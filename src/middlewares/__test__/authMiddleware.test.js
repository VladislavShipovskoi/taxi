import {authMiddleware} from "../authMiddleware";
import {authenticate} from "../../actions/authActions";
import {serverLogin} from "../../api";


jest.mock('../../api', () => ({serverLogin: jest.fn(() => Promise.resolve(true))}))

describe("authMiddleware", () => {
    describe("authenticate", () => {
        it("authenticates through api", async () => {
            const dispatch = jest.fn()

            await authMiddleware({dispatch})()(
                authenticate("testlogin", "testpassword")
            );

            expect(serverLogin).toBeCalledWith("testlogin", "testpassword")
        })
    })
})