import express, { Request, Response} from "express";
import { getEvent, getEvents, getMatch, getMatchResults, getPlayers, getRankings, getUpcomingMatches,getLiveScore, } from "../controllers/APIController";
import { CreateUserController } from "../controllers/CreateUserController";
import { AuthenticateUserController } from "../controllers/AuthenticateController";
import { ensureAuthenticated } from "../middlewares/EnsureAuthenticated";
import { ensureAdmin } from "../middlewares/EnsureAdmin";
import { ListUsersController } from "../controllers/ListUsersController";

const router = express.Router();
const createUserController = new CreateUserController();
const authenticateController =  new AuthenticateUserController();
const listUsersController = new ListUsersController();


/**
 * @openapi
 * /v2/users/view:
 *  get:
 *     tags:
 *     - User Management
 *     description: Lists all users in the database
 *     responses:
 *       200:
 *         description: List of all users in the database
 *       400:
 *         description: We are having some trouble processing requests, or you have a wrong request body.
 *       403:
 *         description: You are not authorized to access this resource, you may have to login using your Bearer token.
 *       500:
 *         description: API is limited to internal use only.
 */
router.get("/users/view", ensureAuthenticated, ensureAdmin, listUsersController.handle);

/**
 * @openapi
 * '/v2/users/manage':
 *  post:
 *     tags:
 *     - User
 *     summary: Register a user
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *           schema:
 *              $ref: '#/components/schemas/CreateUserInput'
 *     responses:
 *      200:
 *        description: Success
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/CreateUserResponse'
 *      409:
 *        description: Conflict
 *      400:
 *        description: Bad request
*/
// ensureAuthenticated, ensureAdmin,
router.post("/users/manage", ensureAuthenticated, ensureAdmin, createUserController.handle);

router.post("/users/auth", authenticateController.handle);

router.get("/rankings/:region", getRankings);
// Get All Players
router.get("/players", getPlayers);
// Get All Ongoing Events
router.get("/events",getEvents);
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

/**
 * @openapi
 * /v2/health:
 *  get:
 *     tags:
 *     - Healthcheck
 *     description: Responds if the app is up and running
 *     responses:
 *       200:
 *         description: Services are running healthy.
 *       400:
 *         description: We are having some trouble processing requests.
 *       500:
 *         description: API is limited to internal use only.
 */
router.get("/health", ( req: Request, res: Response) => {
    const errorcode = 200
    res.status(errorcode).sendFile(__dirname + "/index.html")
});

export { router };
//# sourceMappingURL=routes.js.map