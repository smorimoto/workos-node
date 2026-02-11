export interface ListRoleAssignmentsOptions {
  organizationMembershipId: string;
  limit?: number;
  after?: string;
  before?: string;
  order?: 'asc' | 'desc';
}
