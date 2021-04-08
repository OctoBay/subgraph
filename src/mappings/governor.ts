import { DepartmentCreatedEvent, ProposalCreatedEvent, VoteCastEvent } from '../../generated/OctobayGovernor/OctobayGovernor'
import { GovernanceDepartment, GovernanceProposal, GovernanceProposalVote } from '../../generated/schema'

export function handleDepartmentCreatedEvent(event: DepartmentCreatedEvent): void {
  let department = new GovernanceDepartment(event.params.tokenAddress.toHexString())
  department.projectId = event.params.projectId
  department.tokenAddress = event.params.tokenAddress
  department.name = event.params.tokenName
  department.symbol = event.params.tokenSymbol
  department.minQuorum = event.params.minQuorum
  department.requiredSharesToCreateProposals = event.params.newProposalShare
  department.save()
}

export function handleProposalCreatedEvent(event: ProposalCreatedEvent): void {
  let proposal = new GovernanceProposal(event.params.discussionId)
  proposal.quorum = event.params.quorum
  proposal.startDate = event.params.startDate
  proposal.endDate = event.params.endDate
  proposal.department = event.params.projectId
  proposal.save()
}

// export function handleVoteCastEvent(event: VoteCastEvent): void {
//   let vote = new GovernanceProposalVote(event.transaction.hash.toHex() + '-' + event.logIndex.toString())
//   vote.holder = event.params.voter
//   vote.percentage = event.params.vote
//   vote.proposal = event.params.proposalId
//   vote.save()
// }