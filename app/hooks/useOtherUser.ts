import { User } from '@prisma/client';
import { FullConversationType } from '../types';
import { useSession } from 'next-auth/react';
import { useMemo } from 'react';

const useOtherUser = (
  conservation:
    | FullConversationType
    | {
        users: User[];
      }
) => {
  const session = useSession();
  const otherUser = useMemo(() => {
    const currentUser = session?.data?.user?.email;
    const otherUser = conservation.users.filter(
      (user) => user.email !== currentUser
    );
    return otherUser[0];
  }, [session?.data?.user?.email, conservation.users]);
  return otherUser;
};
export default useOtherUser;
