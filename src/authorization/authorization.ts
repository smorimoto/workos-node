import { WorkOS } from '../workos';
import {
  Role,
  RoleList,
  OrganizationRoleResponse,
  ListOrganizationRolesResponse,
} from '../roles/interfaces';
import {
  EnvironmentRole,
  EnvironmentRoleResponse,
  EnvironmentRoleList,
  EnvironmentRoleListResponse,
  CreateEnvironmentRoleOptions,
  UpdateEnvironmentRoleOptions,
  SetEnvironmentRolePermissionsOptions,
  AddEnvironmentRolePermissionOptions,
  OrganizationRole,
  CreateOrganizationRoleOptions,
  UpdateOrganizationRoleOptions,
  SetOrganizationRolePermissionsOptions,
  AddOrganizationRolePermissionOptions,
  RemoveOrganizationRolePermissionOptions,
  Permission,
  PermissionResponse,
  PermissionList,
  PermissionListResponse,
  CreatePermissionOptions,
  UpdatePermissionOptions,
  ListPermissionsOptions,
  AuthorizationResource,
  AuthorizationResourceResponse,
  CreateAuthorizationResourceOptions,
  UpdateAuthorizationResourceOptions,
  RoleAssignment,
  RoleAssignmentResponse,
  RoleAssignmentList,
  RoleAssignmentListResponse,
  ListRoleAssignmentsOptions,
  AssignRoleOptions,
  RemoveRoleOptions,
  RemoveRoleAssignmentOptions,
} from './interfaces';
import {
  deserializeEnvironmentRole,
  serializeCreateEnvironmentRoleOptions,
  serializeUpdateEnvironmentRoleOptions,
  deserializeRole,
  deserializeOrganizationRole,
  serializeCreateOrganizationRoleOptions,
  serializeUpdateOrganizationRoleOptions,
  deserializePermission,
  serializeCreatePermissionOptions,
  serializeUpdatePermissionOptions,
  deserializeAuthorizationResource,
  serializeCreateResourceOptions,
  serializeUpdateResourceOptions,
  deserializeRoleAssignment,
  serializeAssignRoleOptions,
  serializeRemoveRoleOptions,
} from './serializers';

export class Authorization {
  constructor(private readonly workos: WorkOS) {}

  async createEnvironmentRole(
    options: CreateEnvironmentRoleOptions,
  ): Promise<EnvironmentRole> {
    const { data } = await this.workos.post<EnvironmentRoleResponse>(
      '/authorization/roles',
      serializeCreateEnvironmentRoleOptions(options),
    );
    return deserializeEnvironmentRole(data);
  }

  async listEnvironmentRoles(): Promise<EnvironmentRoleList> {
    const { data } = await this.workos.get<EnvironmentRoleListResponse>(
      '/authorization/roles',
    );
    return {
      object: 'list',
      data: data.data.map(deserializeEnvironmentRole),
    };
  }

  async getEnvironmentRole(slug: string): Promise<EnvironmentRole> {
    const { data } = await this.workos.get<EnvironmentRoleResponse>(
      `/authorization/roles/${slug}`,
    );
    return deserializeEnvironmentRole(data);
  }

  async updateEnvironmentRole(
    slug: string,
    options: UpdateEnvironmentRoleOptions,
  ): Promise<EnvironmentRole> {
    const { data } = await this.workos.patch<EnvironmentRoleResponse>(
      `/authorization/roles/${slug}`,
      serializeUpdateEnvironmentRoleOptions(options),
    );
    return deserializeEnvironmentRole(data);
  }

  async setEnvironmentRolePermissions(
    slug: string,
    options: SetEnvironmentRolePermissionsOptions,
  ): Promise<EnvironmentRole> {
    const { data } = await this.workos.put<EnvironmentRoleResponse>(
      `/authorization/roles/${slug}/permissions`,
      { permissions: options.permissions },
    );
    return deserializeEnvironmentRole(data);
  }

  async addEnvironmentRolePermission(
    slug: string,
    options: AddEnvironmentRolePermissionOptions,
  ): Promise<EnvironmentRole> {
    const { data } = await this.workos.post<EnvironmentRoleResponse>(
      `/authorization/roles/${slug}/permissions`,
      { slug: options.permissionSlug },
    );
    return deserializeEnvironmentRole(data);
  }

  async createOrganizationRole(
    organizationId: string,
    options: CreateOrganizationRoleOptions,
  ): Promise<OrganizationRole> {
    const { data } = await this.workos.post<OrganizationRoleResponse>(
      `/authorization/organizations/${organizationId}/roles`,
      serializeCreateOrganizationRoleOptions(options),
    );
    return deserializeOrganizationRole(data);
  }

  async listOrganizationRoles(organizationId: string): Promise<RoleList> {
    const { data } = await this.workos.get<ListOrganizationRolesResponse>(
      `/authorization/organizations/${organizationId}/roles`,
    );
    return {
      object: 'list',
      data: data.data.map(deserializeRole),
    };
  }

  async getOrganizationRole(
    organizationId: string,
    slug: string,
  ): Promise<Role> {
    const { data } = await this.workos.get<OrganizationRoleResponse>(
      `/authorization/organizations/${organizationId}/roles/${slug}`,
    );
    return deserializeRole(data);
  }

  async updateOrganizationRole(
    organizationId: string,
    slug: string,
    options: UpdateOrganizationRoleOptions,
  ): Promise<OrganizationRole> {
    const { data } = await this.workos.patch<OrganizationRoleResponse>(
      `/authorization/organizations/${organizationId}/roles/${slug}`,
      serializeUpdateOrganizationRoleOptions(options),
    );
    return deserializeOrganizationRole(data);
  }

  async deleteOrganizationRole(
    organizationId: string,
    slug: string,
  ): Promise<void> {
    await this.workos.delete(
      `/authorization/organizations/${organizationId}/roles/${slug}`,
    );
  }

  async setOrganizationRolePermissions(
    organizationId: string,
    slug: string,
    options: SetOrganizationRolePermissionsOptions,
  ): Promise<OrganizationRole> {
    const { data } = await this.workos.put<OrganizationRoleResponse>(
      `/authorization/organizations/${organizationId}/roles/${slug}/permissions`,
      { permissions: options.permissions },
    );
    return deserializeOrganizationRole(data);
  }

  async addOrganizationRolePermission(
    organizationId: string,
    slug: string,
    options: AddOrganizationRolePermissionOptions,
  ): Promise<OrganizationRole> {
    const { data } = await this.workos.post<OrganizationRoleResponse>(
      `/authorization/organizations/${organizationId}/roles/${slug}/permissions`,
      { slug: options.permissionSlug },
    );
    return deserializeOrganizationRole(data);
  }

  async removeOrganizationRolePermission(
    organizationId: string,
    slug: string,
    options: RemoveOrganizationRolePermissionOptions,
  ): Promise<void> {
    await this.workos.delete(
      `/authorization/organizations/${organizationId}/roles/${slug}/permissions/${options.permissionSlug}`,
    );
  }

  async createPermission(
    options: CreatePermissionOptions,
  ): Promise<Permission> {
    const { data } = await this.workos.post<PermissionResponse>(
      '/authorization/permissions',
      serializeCreatePermissionOptions(options),
    );
    return deserializePermission(data);
  }

  async listPermissions(
    options?: ListPermissionsOptions,
  ): Promise<PermissionList> {
    const { data } = await this.workos.get<PermissionListResponse>(
      '/authorization/permissions',
      { query: options },
    );
    return {
      object: 'list',
      data: data.data.map(deserializePermission),
      listMetadata: {
        before: data.list_metadata.before,
        after: data.list_metadata.after,
      },
    };
  }

  async getPermission(slug: string): Promise<Permission> {
    const { data } = await this.workos.get<PermissionResponse>(
      `/authorization/permissions/${slug}`,
    );
    return deserializePermission(data);
  }

  async updatePermission(
    slug: string,
    options: UpdatePermissionOptions,
  ): Promise<Permission> {
    const { data } = await this.workos.patch<PermissionResponse>(
      `/authorization/permissions/${slug}`,
      serializeUpdatePermissionOptions(options),
    );
    return deserializePermission(data);
  }

  async deletePermission(slug: string): Promise<void> {
    await this.workos.delete(`/authorization/permissions/${slug}`);
  }

  async getResource(resourceId: string): Promise<AuthorizationResource> {
    const { data } = await this.workos.get<AuthorizationResourceResponse>(
      `/authorization/resources/${resourceId}`,
    );
    return deserializeAuthorizationResource(data);
  }

  async createResource(
    options: CreateAuthorizationResourceOptions,
  ): Promise<AuthorizationResource> {
    const { data } = await this.workos.post<AuthorizationResourceResponse>(
      '/authorization/resources',
      serializeCreateResourceOptions(options),
    );
    return deserializeAuthorizationResource(data);
  }

  async updateResource(
    options: UpdateAuthorizationResourceOptions,
  ): Promise<AuthorizationResource> {
    const { data } = await this.workos.patch<AuthorizationResourceResponse>(
      `/authorization/resources/${options.resourceId}`,
      serializeUpdateResourceOptions(options),
    );
    return deserializeAuthorizationResource(data);
  }

  async deleteResource(resourceId: string): Promise<void> {
    await this.workos.delete(`/authorization/resources/${resourceId}`);
  }

  /**
   * List all role assignments for an organization membership
   *
   * @param options - Options including organizationMembershipId and pagination
   * @returns Paginated list of role assignments
   *
   * @example
   * const { data, listMetadata } = await workos.authorization.listRoleAssignments({
   *   organizationMembershipId: 'om_01HXYZ...',
   *   limit: 10,
   * });
   */
  async listRoleAssignments(
    options: ListRoleAssignmentsOptions,
  ): Promise<RoleAssignmentList> {
    const { organizationMembershipId, ...queryOptions } = options;
    const { data } = await this.workos.get<RoleAssignmentListResponse>(
      `/authorization/organization_memberships/${organizationMembershipId}/role_assignments`,
      { query: queryOptions },
    );
    return {
      object: 'list',
      data: data.data.map(deserializeRoleAssignment),
      listMetadata: {
        before: data.list_metadata.before,
        after: data.list_metadata.after,
      },
    };
  }

  /**
   * Assign a role to an organization membership on a specific resource
   *
   * @param options - Options including membership ID, role slug, and resource identification
   * @returns The created role assignment
   *
   * @example By resource ID:
   * const assignment = await workos.authorization.assignRole({
   *   organizationMembershipId: 'om_01HXYZ...',
   *   roleSlug: 'editor',
   *   resourceId: 'resource_01HXYZ...',
   * });
   *
   * @example By external ID:
   * const assignment = await workos.authorization.assignRole({
   *   organizationMembershipId: 'om_01HXYZ...',
   *   roleSlug: 'editor',
   *   resourceExternalId: 'doc-123',
   *   resourceTypeSlug: 'document',
   * });
   */
  async assignRole(options: AssignRoleOptions): Promise<RoleAssignment> {
    const { data } = await this.workos.post<RoleAssignmentResponse>(
      `/authorization/organization_memberships/${options.organizationMembershipId}/role_assignments`,
      serializeAssignRoleOptions(options),
    );
    return deserializeRoleAssignment(data);
  }

  /**
   * Remove a role assignment by role slug and resource criteria
   * Use this when you know the role and resource but not the assignment ID
   *
   * @param options - Options including membership ID, role slug, and resource identification
   *
   * @example By resource ID:
   * await workos.authorization.removeRole({
   *   organizationMembershipId: 'om_01HXYZ...',
   *   roleSlug: 'editor',
   *   resourceId: 'resource_01HXYZ...',
   * });
   *
   * @example By external ID:
   * await workos.authorization.removeRole({
   *   organizationMembershipId: 'om_01HXYZ...',
   *   roleSlug: 'editor',
   *   resourceExternalId: 'doc-123',
   *   resourceTypeSlug: 'document',
   * });
   */
  async removeRole(options: RemoveRoleOptions): Promise<void> {
    await this.workos.delete(
      `/authorization/organization_memberships/${options.organizationMembershipId}/role_assignments`,
      serializeRemoveRoleOptions(options),
    );
  }

  /**
   * Remove a role assignment by its ID
   * Use this when you have the specific role assignment ID
   *
   * @param options - Options including membership ID and role assignment ID
   *
   * @example
   * await workos.authorization.removeRoleAssignment({
   *   organizationMembershipId: 'om_01HXYZ...',
   *   roleAssignmentId: 'ra_01HXYZ...',
   * });
   */
  async removeRoleAssignment(
    options: RemoveRoleAssignmentOptions,
  ): Promise<void> {
    await this.workos.delete(
      `/authorization/organization_memberships/${options.organizationMembershipId}/role_assignments/${options.roleAssignmentId}`,
    );
  }
}
