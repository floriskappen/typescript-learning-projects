"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MatchReader_1 = require("./MatchReader");
var Summary_1 = require("./Summary");
var matchReader = MatchReader_1.MatchReader.fromCsv('football.csv');
var summary = Summary_1.Summary.winsAnalysisWithHtmlReport('Man United', 'man_united_wins4');
matchReader.load();
summary.buildAndPrintReport(matchReader.matches);
// const summary = new Summary(
//     new WinsAnalysis('Man United'),
//     new HtmlReport('man_united_wins')
// )
//! Option one
// const homeWin = 'H'
// const awayWin = 'A'
// const draw = 'D'
//! Option two
// const MatchResult = {
//     homeWin: 'H',
//     awayWin: 'A',
//     draw: 'D'
// }
//! Option three
// enum MatchResult {
//     HomeWin = 'H',
//     AwayWin = 'A',
//     Draw = 'D'
// }
