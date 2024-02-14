import React from 'react';


function User(props) {
    return (
        <div className='card-container'>
            <span className={props.online ? "pro online" : "pro offline"}>{props.online ? "Online" : "Offline"}</span>
            <img src='./images/Deadpool.png' className='img' alt='Deadpool' />
            <h3>{props.name}</h3>
            <h3>{props.city}</h3>
            <p>{props.description}</p>
            <div className='buttons'>
                <button className='primary'>Message</button>
                <button className='primary outline'>Following</button>
            </div>
            <div className='skills'>
                <h6>Skills</h6>
                <ul>
                    {props.skills.map((totalskill, index) => (
                        <li key={index}>{totalskill}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export const UserCard = () => {
    return (
        <User name="DeadPool" city="New-York City" description="Vigilante" skills={["Marvel - Jesus","Immortality","4th-Wall-Breaker", "Regenerative healing factor", "Master Assassin", "Marksman", "Hand-to-Hand Combatant.", "Super Human Strength","Superhuman Reflexes","Master Martial Artist"]} online={true} />
    );
};
