import { scrapeEvent, scrapeEvents, scrapeMatch, scrapeMatchResults, scrapePlayers, scrapeTeams, scrapeUpcomingMatches, scrapeLiveScore, } from "../src/scraper/vlr-scraper.js";
import axios from "axios";
import { Request, Response } from "express";

const getRankings = async (req: Request, res: Response) => {
    const rankings = await scrapeTeams(req.params.region);
    res.status(200).json(rankings);
};
// @desc   GET players
// @route  GET /api/players
// @access Public
const getPlayers = async (req: Request, res: Response) => {
    const players = await scrapePlayers();
    res.status(200).json(players);
};

const getEvents = async (req: Request, res: Response) => {
    const events = await scrapeEvents();
    res.status(200).json(events);
};
// @desc   GET event
// @route  GET /api/events/:url
// @access Public
const getEvent = async (req: Request, res: Response) => {
    const event = await scrapeEvent(req.params.url);
    res.status(200).json(event);
};
// @desc   GET upcoming matches
// @route  GET /api/matches/upcoming
// @access Public
const getUpcomingMatches = async (req: Request, res: Response) => {
    const upcomingMatches = await scrapeUpcomingMatches();
    res.status(200).json(upcomingMatches);
};
// @desc   GET match results
// @route  GET /api/matches/results
// @access Public
const getMatchResults = async (req: Request, res: Response) => {
    const upcomingMatches = await scrapeMatchResults();
    res.status(200).json(upcomingMatches);
};
// @desc   GET match
// @route  GET /api/matches/:url
// @access Public
const getMatch = async (req: Request, res: Response) => {
    const match = await scrapeMatch(req.params.url);
    res.status(200).json(match);
};
// @desc   GET Live Score
// @route  GET /matches/live
// @access Public
const getLiveScore = async (req: Request, res: Response) => {
    const LiveScore = await scrapeLiveScore();
    res.status(200).json(LiveScore);
}
export { getRankings, getPlayers, getEvents, getEvent, getUpcomingMatches, getMatchResults, getMatch, getLiveScore, };
//# sourceMappingURL=controller.js.map
