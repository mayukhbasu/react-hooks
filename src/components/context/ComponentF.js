import React, { useContext } from 'react';
import { UserContext , ChannelContext} from '../../App';

const ComponentF = () => {
    const user = useContext(UserContext);
    const channel = useContext(ChannelContext);
    return (
        <div>
            <p>User is : {user} Channel is {channel}</p>
        </div>
    );
};

export default ComponentF;