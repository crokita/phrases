var fs = require('fs')
var path = require('path')
var readline = require('readline')

var Phrases = {
  getPhrases: getPhrases
}

function getPhrases(callback){
  phrases= []
  getPhrasesDotOrgPhrases(function(phrasesDotOrgPhrases){
    phrases = phrases.concat(phrasesDotOrgPhrases)
    callback(phrases)
  })
}
function getPhrasesDotOrgPhrases(callback){
  var phrasesDotOrgPhrasesList = []
  var rl = readline.createInterface({
    input: fs.createReadStream(__dirname + '/phrases_dot_org.txt')
  });

  rl.on('line', function(line) {
    phrasesDotOrgPhrasesList.push(line)
  });
  rl.on('close', function(){
    callback(phrasesDotOrgPhrasesList)
  })
}

module.exports = Phrases;