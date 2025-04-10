import { Router } from 'express'; 

const branchRouter = Router();

// Define routes here, for example:
branchRouter.get('/', (req, res) => {
  res.send('Branch endpoint is working!');
});

export default branchRouter;
