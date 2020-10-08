import logger from "@server/logger";

describe("logger", () => {
    describe("debug", () => {
        test("Normal test", () => {
            logger.debug("Test");
        });
    });
});
