import { GUEST_MODE } from '@constants/session';
import storageService from '@services/storageService';
import { useState, useEffect } from 'react';

const useGuestMode = () => {
    const [guest, setGuest] = useState(false);

    useEffect(() => {
        setGuest(storageService.get(GUEST_MODE) === 'true');
    }, []);

    return [guest, setGuest];
};

export default useGuestMode;
