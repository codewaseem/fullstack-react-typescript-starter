import mongoose from "mongoose";

mongoose.connect(process.env.RAZZLE_MONGOOSE_DB as any);

export default mongoose;