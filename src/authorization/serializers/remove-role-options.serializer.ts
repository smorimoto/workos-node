import {
  RemoveRoleOptions,
  SerializedRemoveRoleOptions,
} from '../interfaces/remove-role-options.interface';

/**
 * Serialize SDK options to API request format
 * Converts camelCase to snake_case
 * Only includes fields that are provided (truthy)
 */
export const serializeRemoveRoleOptions = (
  options: RemoveRoleOptions,
): SerializedRemoveRoleOptions => ({
  role_slug: options.roleSlug,
  ...(options.resourceId && { resource_id: options.resourceId }),
  ...(options.resourceExternalId && {
    resource_external_id: options.resourceExternalId,
  }),
  ...(options.resourceTypeSlug && {
    resource_type_slug: options.resourceTypeSlug,
  }),
});
