import express, { Request, Response } from "express";
import { getEvent, getEvents, getMatch, getMatchResults, getPlayers, getRankings, getUpcomingMatches, getLiveScore, } from "../controllers/APIController";

const router = express.Router();


router.get("/rankings/:region", getRankings);
// Get All Players
router.get("/players", getPlayers);
// Get All Ongoing Events
router.get("/events", getEvents);
// Get Specific Event
router.get("/events/:url", getEvent);
// Get Live Score
router.get("/matches/live", getLiveScore);
// Get Upcoming matches
router.get("/matches/upcoming", getUpcomingMatches);
// Get Completed Match Results
router.get("/matches/results", getMatchResults);
// Get Specific Match Info
router.get("/matches/:url", getMatch);

router.get("/health", (req: Request, res: Response) => {
    const errorcode = 200
    res.status(errorcode).sendFile(__dirname + "/index.html")
});

export { router };
//# sourceMappingURL=routes.js.map