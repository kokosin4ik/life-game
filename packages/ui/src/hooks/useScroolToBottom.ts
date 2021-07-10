import { useCallback } from 'react';
import { ScrollBehavior } from '../constants/style';

const useScrollToBottom = (
    ref: React.RefObject<Element>
) => {
    return useCallback(() => {
        ref.current?.scrollTo({
            top: ref.current?.scrollHeight,
            behavior: ScrollBehavior.smooth,
        });
    }, [
        ref,
    ]);
};

export default useScrollToBottom;