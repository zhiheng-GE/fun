#!/usr/bin/env node

/* eslint-disable quotes */

'use strict';

const program = require('commander');
const getVisitor = require('../lib/visitor').getVisitor;
const unrefTimeout = require('../lib/unref-timeout');

program
  .name('fun local invoke')
  .description(
    `Execute your function in a local environment which replicates the live environment
  almost identically. You can pass in the event body via stdin or by using the -e (--event)
  parameter.`)
  .usage('[options] <[service/]function>')
  .option('-d, --debug-port <port>',
    `specify the sandboxed container starting in debug mode,
                             and exposing this port on localhost`)
  // todo: add auto option to auto config vscode
  .option('-c, --config <ide/debugger>',
    `output configurations for the specified ide/debugger, where
                             the ide/debugger can currently only be vscode`)
  .option('-e, --event <path>',
    `a file containing event data passed to the function during
                             invoke, If this option is not specified, it defaults to
                             reading event from stdin`)
  .parse(process.argv);

if (program.args.length > 1) {
  console.error();
  console.error("  error: unexpected argument '%s'", program.args[1]);
  program.help();
}

program.event = program.event || '-';

getVisitor().then(visitor => {
  visitor.pageview('/fun/local/invoke').send();

  require('../lib/commands/local/invoke')(program.args[0], program)
    .then(() => {
      visitor.event({
        ec: 'local invoke',
        ea: 'invoke',
        el: 'success',
        dp: '/fun/local/invoke'
      }).send();
  
      // fix windows not auto exit bug after docker operation
      unrefTimeout(() => {
        process.exit(0); // eslint-disable-line
      });
    })
    .catch(error => {    
      visitor.event({
        ec: 'local invoke',
        ea: 'invoke',
        el: 'error',
        dp: '/fun/local/invoke'
      }).send();
  
      require('../lib/exception-handler')(error);
    });  
});
