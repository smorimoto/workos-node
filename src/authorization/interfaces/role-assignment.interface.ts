/**
 * Nested role object in role assignment response (slim version)
 * Only contains slug, not full role details
 */
export interface RoleAssignmentRole {
  slug: string;
}

/**
 * Nested resource object in role assignment response (SDK type - camelCase)
 */
export interface RoleAssignmentResource {
  id: string;
  externalId: string;
  resourceTypeSlug: string;
}

/**
 * Nested resource object in role assignment response (API type - snake_case)
 */
export interface RoleAssignmentResourceResponse {
  id: string;
  external_id: string;
  resource_type_slug: string;
}

/**
 * Role assignment entity (SDK type - camelCase)
 * Represents a role assigned to a user on a specific resource
 */
export interface RoleAssignment {
  object: 'role_assignment';
  id: string;
  role: RoleAssignmentRole;
  resource: RoleAssignmentResource;
  createdAt: string;
  updatedAt: string;
}

/**
 * Role assignment entity (API response type - snake_case)
 */
export interface RoleAssignmentResponse {
  object: 'role_assignment';
  id: string;
  role: RoleAssignmentRole; // Note: role.slug is already snake_case compatible
  resource: RoleAssignmentResourceResponse;
  created_at: string;
  updated_at: string;
}

/**
 * Paginated list of role assignments (SDK type)
 */
export interface RoleAssignmentList {
  object: 'list';
  data: RoleAssignment[];
  listMetadata: {
    before: string | null;
    after: string | null;
  };
}

/**
 * Paginated list of role assignments (API response type)
 */
export interface RoleAssignmentListResponse {
  object: 'list';
  data: RoleAssignmentResponse[];
  list_metadata: {
    before: string | null;
    after: string | null;
  };
}
