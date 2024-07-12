import { scrapeEvent, scrapeEvents, scrapeMatch, scrapeMatchResults, scrapePlayers, scrapeTeams, scrapeUpcomingMatches, scrapeLiveScore, } from "../src/scraper/vlr-scraper.js";
import { Request, Response } from "express";

const getRankings = async (req: Request, res: Response) => {
    const rankings = await scrapeTeams(req.params.region);
    res.status(200).json(rankings);
};
const getPlayers = async (req: Request, res: Response) => {
    const players = await scrapePlayers();
    res.status(200).json(players);
};

const getEvents = async (req: Request, res: Response) => {
    const events = await scrapeEvents();
    res.status(200).json(events);
};
const getEvent = async (req: Request, res: Response) => {
    const event = await scrapeEvent(req.params.url);
    res.status(200).json(event);
};
const getUpcomingMatches = async (req: Request, res: Response) => {
    const upcomingMatches = await scrapeUpcomingMatches();
    res.status(200).json(upcomingMatches);
};
const getMatchResults = async (req: Request, res: Response) => {
    const upcomingMatches = await scrapeMatchResults();
    res.status(200).json(upcomingMatches);
};
const getMatch = async (req: Request, res: Response) => {
    const match = await scrapeMatch(req.params.url);
    res.status(200).json(match);
};
const getLiveScore = async (req: Request, res: Response) => {
    const LiveScore = await scrapeLiveScore();
    res.status(200).json(LiveScore);
}
export { getRankings, getPlayers, getEvents, getEvent, getUpcomingMatches, getMatchResults, getMatch, getLiveScore, };
//# sourceMappingURL=controller.js.map
