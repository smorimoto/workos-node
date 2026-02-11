import {
  RoleAssignment,
  RoleAssignmentResponse,
} from '../interfaces/role-assignment.interface';

/**
 * Deserialize API response to SDK type
 * Converts snake_case to camelCase
 */
export const deserializeRoleAssignment = (
  response: RoleAssignmentResponse,
): RoleAssignment => ({
  object: response.object,
  id: response.id,
  role: response.role, // role.slug doesn't need conversion
  resource: {
    id: response.resource.id,
    externalId: response.resource.external_id,
    resourceTypeSlug: response.resource.resource_type_slug,
  },
  createdAt: response.created_at,
  updatedAt: response.updated_at,
});
