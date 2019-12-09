import { MatchReader } from './MatchReader'
import { Summary } from './Summary'


const matchReader = MatchReader.fromCsv('football.csv')
const summary = Summary.winsAnalysisWithHtmlReport('Man United', 'man_united_wins4')

matchReader.load()
summary.buildAndPrintReport(matchReader.matches)
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