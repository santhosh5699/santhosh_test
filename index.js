// This is your Editor pane. Write your JavaScript here and 
// use the command line to execute commands
function isNullOrEmpty(input) {

  return (input === undefined || input === null || input === '');
}
// Export to make the function available to other packages

module.exports = isNullOrEmpty;
