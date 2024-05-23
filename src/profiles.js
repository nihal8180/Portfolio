import pic from './codechef.jpg'
import pic1 from './codeforces.jpg'
import pic2 from './github.jpg'
import pic3 from './leet.png'
import pic4 from './kink.jpg'
export default function Profiles(){
    return(
        <div className='profiles'>
            <h1 style={{textAlign:'center'}}>PROFILES</h1>
            <div>
                <a href='https://www.codechef.com/users/nihal_8180'><img src={pic}></img></a>
                <a href='https://codeforces.com/profile/nihalsingh8180'><img src={pic1}></img></a>
                <a href='https://github.com/nihal8180'><img src={pic2}></img></a>
            </div>
            <div>
               <a href='https://leetcode.com/u/nihal8180/'> <img src={pic3}></img></a>
               <a href='https://www.linkedin.com/in/nihal-singh-328a2b225/'> <img src={pic4}></img></a>
            </div>
        </div>
    )
}