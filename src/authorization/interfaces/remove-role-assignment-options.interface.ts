/**
 * Options for removing a role assignment by its ID
 * Matches API: DELETE /authorization/organization_memberships/:om_id/role_assignments/:ra_id
 */
export interface RemoveRoleAssignmentOptions {
  /** The organization membership ID (required, used in URL path) */
  organizationMembershipId: string;
  /** The role assignment ID to remove (required, used in URL path) */
  roleAssignmentId: string;
}
