import { Home } from "../MovieApp/Home"
import { HomeDetails } from "../MovieApp/HomeDetails"
import { Route , Routes } from "react-router"
import { Movies } from "../MovieApp/Movie"
import { Task } from "../Revision/Task1"
import { HomePage } from "../Revision/Task2/HomePage"

export const AllRoutes = () => {
    

    return(

        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/details/:id" element={<HomeDetails />} />
            <Route path="/task1" element={<Task/>} />
            <Route path="/task2" element={<HomePage/>} />
        </Routes>
    )
}