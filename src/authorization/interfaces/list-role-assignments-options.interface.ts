/**
 * Options for listing role assignments for an organization membership
 * Matches API: GET /authorization/organization_memberships/:om_id/role_assignments
 */
export interface ListRoleAssignmentsOptions {
  /** The organization membership ID (required, used in URL path) */
  organizationMembershipId: string;
  /** Maximum number of results to return */
  limit?: number;
  /** Cursor for pagination - fetch results after this cursor */
  after?: string;
  /** Cursor for pagination - fetch results before this cursor */
  before?: string;
  /** Sort order for results */
  order?: 'asc' | 'desc';
}
