/**
 * Options for assigning a role to an organization membership on a resource
 * Matches API: POST /authorization/organization_memberships/:om_id/role_assignments
 *
 * Resource identification is mutually exclusive:
 * - Use `resourceId` for internal ID lookup
 * - Use `resourceExternalId` + `resourceTypeSlug` for external ID lookup
 */
export interface AssignRoleOptions {
  /** The organization membership ID (required, used in URL path) */
  organizationMembershipId: string;
  /** The role slug to assign (e.g., "editor", "viewer") */
  roleSlug: string;
  /** The internal resource ID (mutually exclusive with external ID) */
  resourceId?: string;
  /** The external resource ID (requires resourceTypeSlug) */
  resourceExternalId?: string;
  /** The resource type slug (required with resourceExternalId) */
  resourceTypeSlug?: string;
}

/**
 * Serialized options for assign role API request (snake_case)
 */
export interface SerializedAssignRoleOptions {
  role_slug: string;
  resource_id?: string;
  resource_external_id?: string;
  resource_type_slug?: string;
}
