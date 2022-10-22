import TeamCard from './TeamCard';
import HamzatPic from '../../../assets/ourteam/Hamzat.png';
import AdaezePic from '../../../assets/ourteam/Adaeze.png';
import ChidiPic from '../../../assets/ourteam/Chidi.png';
import BongShimPic from '../../../assets/ourteam/Bong-Shim.png';
import ClementPic from '../../../assets/ourteam/Clement.png';
import MuideenPic from '../../../assets/ourteam/Muideen.png';
import MusaPic from '../../../assets/ourteam/Musa.png';
import OffiongPic from '../../../assets/ourteam/Offiong.png';
import RichardonPic from '../../../assets/ourteam/Okiti.png';



const OurTeam = () => {
    return (
      <div className="container">
        <div className="heading">
          <h1>Meet our Team</h1>
          <p>
            Collectively, we desire to provide the best platform for developers
          </p>
        </div>

        <div className="grid">
            <TeamCard
            imagePath = {HamzatPic}
            name = "Temitope Hamzat"
            role = "Team Lead, Frontend Developer"
            hobbies = "Fun lover, Herbalist, Borderline introvert, Detail oriented" />
        
        <TeamCard
            imagePath = {MusaPic}
            name = "Musa Ojo"
            role = "AS. Team Lead, Backend Developer"
            hobbies = "Daring, Open mindset and team oriented" />
        
        <TeamCard
            imagePath = {AdaezePic}
            name = "Adaeze Ndupu"
            role = "Frontend Developer, UI/UX Designer"
            hobbies = "Anime Lover, Assertive Logistician, Gamer, Introvert" />
        
        <TeamCard
            imagePath = {BongShimPic}
            name = "Bong-Shim Uke"
            role = "Backend Developer, UI/UX Designer"
            hobbies = "Father, Uncle, Gamer, Traveler, Food Lover" />
        
        <TeamCard
            imagePath = {OffiongPic}
            name = "Joy Offiong"
            role = "Frontend Developer"
            hobbies = "Ambitious, Fun Lover, Detail Oriented" />

        <TeamCard
            imagePath = {ClementPic}
            name = "Clement Agunbiade"
            role = "Frontend Developer"
            hobbies = "Traveling, Food Lover, Badminton" />

        <TeamCard
            imagePath = {MuideenPic}
            name = "Muideen Ajiboye"
            role = "Backend Developer"
            hobbies = "Football Lover, Music Lover, Humanitarian" />
        
        <TeamCard
            imagePath = {ChidiPic}
            name = "Nweke Chidi"
            role = "Frontend Developer"
            hobbies = "Inventive, Risk taker, Football Lover" />

        <TeamCard
            imagePath = {RichardonPic}
            name = "Richardson Okiti"
            role = "Frontend Developer"
            hobbies = "IFootball Lover, Gamer, Ambivert" />

        </div>
      </div>
    );
}
 
export default OurTeam;