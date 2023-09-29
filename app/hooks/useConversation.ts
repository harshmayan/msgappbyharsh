import { useParams } from "next/navigation";
import { useMemo } from "react";

const useConversation = () => {
    const params = useParams();

    const conversationId = useMemo(() => {
        if(!params?.conversationId) {
            return '';
        }
        return params.conversationId as string;
    },[params?.conversationId]);
    const isOpen = useMemo(() => !!conversationId,[conversationId]);//if we added !! at start of conversationId the usOpen has become boolean otherwise it is string..
    return useMemo(() => ({
        isOpen,
        conversationId
    }),[isOpen, conversationId]);
}

export default useConversation;
