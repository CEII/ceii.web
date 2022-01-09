import { COMPONENT_STATUS } from '@constants/states';
import { useState, useEffect } from 'react';

const useDelay = (time: number): [string, () => void, () => void] => {
    const [state, setState] = useState(COMPONENT_STATUS.UNLOADED);

    const show = () => {
        if (state === COMPONENT_STATUS.UNLOADING) return;

        setState(COMPONENT_STATUS.LOADING);
    };

    const hide = () => {
        if (state === COMPONENT_STATUS.LOADING) return;
        setState(COMPONENT_STATUS.UNLOADING);
    };

    useEffect(() => {
        let timeoutId;

        if (state === COMPONENT_STATUS.UNLOADING) {
            timeoutId = setTimeout(() => {
                setState(COMPONENT_STATUS.UNLOADED);
            }, time);
        } else if (state === COMPONENT_STATUS.LOADING) {
            timeoutId = setTimeout(() => {
                setState(COMPONENT_STATUS.LOADED);
            }, time);
        }

        return () => {
            clearTimeout(timeoutId);
        };
    }, [state, time]);

    return [state, show, hide];
};

export default useDelay;
