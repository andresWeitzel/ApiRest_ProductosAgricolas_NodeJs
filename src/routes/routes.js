const { Router } = require("express");

const router = Router();

router.get('/', (req, resp) => {

    const data={
        "id" : 121212,
        "status": "completed",
        "code": "71627863378"
    }

    resp.json(data);
  });


module.exports = router;
