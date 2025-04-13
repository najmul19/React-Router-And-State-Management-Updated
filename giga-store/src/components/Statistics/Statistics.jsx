import { useLoaderData } from "react-router-dom";
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Statistics = () => {
    const data = useLoaderData();
    const {price,category,rating}=data;
  return (
    <div>
      <div className="bg-purple-800 h-48 rounded-sm flex flex-col justify-center items-center space-y-2 text-center">
        <h2 className="text-2xl font-bold">Statistics</h2>
        <p className="text-gray-300 max-w-2xl">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest accessories, we have it all!
        </p>
      </div>

      <div className=" py-5 flex flex-col md:flex-row justify-between">
        <div className=" flex items-center">
          <h2 className="text-2xl font-bold">Statistics</h2>
        </div>
      </div>

      <div className="w-full h-[400px] bg-white">
        <ResponsiveContainer width="100%" height="100%" >
          <BarChart data={data}>
            <XAxis dataKey={'category'} />
            <YAxis dataKey={'price'} />
            <Tooltip />
            <Bar
              dataKey={'price'}
              fill="#800080"
              stroke='red'
              activeBar={<Rectangle fill="pink" stroke="red" />}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
      
    </div>

  );
};

export default Statistics;
