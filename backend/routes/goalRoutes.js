const express = require('express');
const router = express.Router();
const { getGoals, setGoal, updateGoal, deleteGoal } = require('../controllers/goalControllaer');
const { protectRoute } = require('../middleware/authMiddleware');

router.route('/').get(protectRoute, getGoals).post(protectRoute, setGoal);
router.route('/:id').put(protectRoute, updateGoal).delete(protectRoute, deleteGoal);

module.exports = router;
