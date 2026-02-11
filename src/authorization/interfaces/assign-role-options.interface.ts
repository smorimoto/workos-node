export interface AssignRoleOptions {
    /** The organization membership ID (required, used in URL path) */
  organizationMembershipId: string;
  roleSlug: string;
  resourceId?: string;
  resourceExternalId?: string;
  resourceTypeSlug?: string;
}

export interface SerializedAssignRoleOptions {
  role_slug: string;
  resource_id?: string;
  resource_external_id?: string;
  resource_type_slug?: string;
}
