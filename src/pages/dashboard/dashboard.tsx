import classes from "./dashboard.module.css"
import Card from "../../components/dashboard/statCard/statCard";
import { mockStats } from "../../mocks/stats";
import TasksList from "../../components/ui/tasksList/tasksList";
import ProjectsCard from "../../components/dashboard/projectsCard/projectsCard";

function getGreeting(): string {
    const hour = new Date().getHours();

    if (hour < 12) return "Good morning";
    if (hour < 18) return "Good afternoon";
    return "Good evening";
}

function Dashboard() {
    const greeting = getGreeting();

    return (
        <div className={classes.dashboard}>
            <div className={classes.dashboard__greeting}>
                <h1>{greeting}, Ismail</h1>
                <p>Here's your focus overview for today.</p>
            </div>
            <div className={classes.dashboard__left}>
                <div className={classes.dashboard__statsRow}>
                    {mockStats.map((stat) => (
                        <Card key={stat.title} title={stat.title} value={stat.value} />
                    ))}
                </div>
                <TasksList />
            </div>

            <div className={classes.dashboard__right}>
                <ProjectsCard />
            </div>
        </div>
    );
}

export default Dashboard;