import one from '../assets/svg/projects/one.svg'
import two from '../assets/svg/projects/two.svg'
import three from '../assets/svg/projects/three.svg'
import four from '../assets/svg/projects/four.svg'
import five from '../assets/svg/projects/five.svg'
import six from '../assets/svg/projects/six.svg'
import seven from '../assets/svg/projects/seven.svg'
import eight from '../assets/svg/projects/eight.svg'
import bots from '../assets/pic/bots.png'
import bopt from '../assets/pic/bopt.png'
import clean from '../assets/pic/cleaning.jpg'
import trolley from '../assets/pic/trolley.jpg'
import sr from '../assets/pic/sr.png'
export const projectsData = [
    {
        id: 1,
        projectName: 'Autonomous Industrial Mobility Platform',
        projectDesc: 'This product portfolio of mobile robots for various usecases such as Healthcare, Material Movement, Industrial Floor Cleaning was achieved using a common firmware platform designed on top of Robot Operating System. The various functionalities were then customized and deployed for users. I was resposnisble for designing the entire mechatronics system for the portfolio, developing the kinematics motion control for each platform and customizing path planning and navigation.',
        tags: ['ROS', 'Python' ,'C++', 'ReactJS', 'CAN'],
        demo: 'https://www.youtube.com/watch?v=UMLDxl3ix60',
        image: bots
    },
    {
        id: 2,
        projectName: 'Autonomous Pallet Truck',
        projectDesc: 'This is a Battery Operated Pallet Truck retrofitted with Lidars, camera, IMU unit and Industrial PC. The main requirement of this autonomous vehicle was to pick/place metal pallets to and from different points in a construction equipment manufacturing plant. I was responsible for developing the kinematics of the vehicle based on tricycle kinematics, waypoint path planning algorithm, pallet detection algorithm using April tags, job queuing and mission management, web based User Interface, obstacle detection using multiple lidars and emergency braking using OpenCAN',
        tags: ['ROS', 'C++','Python', 'ReactJS', 'CAN'],
        demo: 'https://www.youtube.com/watch?v=AufhAV6wjnU',
        image: bopt
    },
    {
        id: 3,
        projectName: 'Autonomous Cleaning Vehicle',
        projectDesc: 'This is an industrial cleaning vehicle retrofitted with Lidars, camera, IMU unit and Industrial PC. The main requirement of this autonomous vehicle was to execute automatic cleaning operations on predefined zones within a map. I was responsible for developing the kinematics of the vehicle based on differential kinematics, polygon based coverage path planning, obstacle deetection and avoidance using lidar and depth camera, self-configurable User Interface for mapping, cleaning zone definition, go/no-go zones definition. The entire UI stack was deployed as a docker container',
        tags: ['ROS', 'C++','Python', 'ReactJS', 'Docker'],
        demo: 'https://www.youtube.com/watch?v=4aBZ0w4EFfs',
        image: clean
    },
    {
        id: 4,
        projectName: 'Autonomous Trolley',
        projectDesc: 'This is an Autonomous Mobile Robot developed from scratch to cater to requirments of smaller payloads in shopfloor environments. The system consists of a lidar, depth camera, proximity sensors, IMU and HMI. I was resposnsible for the development of kinematics of the vehicle based on differential kinematics, path planning and navigation, job queue management and modbus based HMI interface',
        tags: ['ROS', 'C++','Python', 'ReactJS', 'Docker', 'Modbus'],
        demo: 'https://www.youtube.com/watch?v=pkUJD6Lz4aw',
        image: trolley
    },
    {
        id: 5,
        projectName: 'Search and Rescue - ROSBot 2.0',
        projectDesc: 'This group project was done as part of my coursework for Msc Robotics. The assignment was to design, develop and demonstrate a search and rescue operation using ROSBot 2.0. I was responsible for development of object detection algorithm to detect various symbols in the environment, plot the positions of the detected symbols in a 2D Occupancy Grid using marker arrays. The project involved both simulation implementation and real robot integration',
        tags: ['ROS', 'Python', '2DSlam', 'OpenCV'],
        code: 'https://github.com/Gowresh-HW/group1_project',
        demo: 'https://www.youtube.com/watch?v=k_JjMSetfLk',
        image: sr
    },
    
]


// Do not remove any fields.
// Leave it blank instead as shown below

/* 
{
    id: 1,
    projectName: 'Car Pooling System',
    projectDesc: '',
    tags: ['Flutter', 'React'],
    code: '',
    demo: '',
    image: ''
}, 
*/
