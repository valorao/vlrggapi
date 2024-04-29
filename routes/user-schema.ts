/**
 * @openapi
 * components:
 *  schemas:
 *    CreateUserInput:
 *      type: object
 *      required:
 *        - email
 *        - name
 *        - password
 *        - passwordConfirmation
 *      properties:
 *        name:
 *          type: string
 *          default: ""
 *        email:
 *          type: string
 *          default: ""
 *        password:
 *          type: string
 *          default: ""
 *    CreateUserResponse:
 *      type: object
 *      properties:
 *        name:
 *          type: string
 *        email:
 *          type: string
 */