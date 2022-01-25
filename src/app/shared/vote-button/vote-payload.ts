import { VoteType } from './vote-type';

export class VotePayload {
    voteType: VoteType =  VoteType.UPVOTE;
    postId: number =0;
}