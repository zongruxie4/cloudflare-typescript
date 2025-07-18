# Shared

Types:

- <code><a href="./src/resources/shared.ts">ASN</a></code>
- <code><a href="./src/resources/shared.ts">AuditLog</a></code>
- <code><a href="./src/resources/shared.ts">CertificateCA</a></code>
- <code><a href="./src/resources/shared.ts">CertificateRequestType</a></code>
- <code><a href="./src/resources/shared.ts">CloudflareTunnel</a></code>
- <code><a href="./src/resources/shared.ts">ErrorData</a></code>
- <code><a href="./src/resources/shared.ts">Identifier</a></code>
- <code><a href="./src/resources/shared.ts">LoadBalancerPreview</a></code>
- <code><a href="./src/resources/shared.ts">Member</a></code>
- <code><a href="./src/resources/shared.ts">PaginationInfo</a></code>
- <code><a href="./src/resources/shared.ts">Permission</a></code>
- <code><a href="./src/resources/shared.ts">PermissionGrant</a></code>
- <code><a href="./src/resources/shared.ts">RatePlan</a></code>
- <code><a href="./src/resources/shared.ts">ResponseInfo</a></code>
- <code><a href="./src/resources/shared.ts">Result</a></code>
- <code><a href="./src/resources/shared.ts">Role</a></code>
- <code><a href="./src/resources/shared.ts">SortDirection</a></code>
- <code><a href="./src/resources/shared.ts">Subscription</a></code>
- <code><a href="./src/resources/shared.ts">SubscriptionComponent</a></code>
- <code><a href="./src/resources/shared.ts">SubscriptionZone</a></code>
- <code><a href="./src/resources/shared.ts">Token</a></code>
- <code><a href="./src/resources/shared.ts">TokenConditionCIDRList</a></code>
- <code><a href="./src/resources/shared.ts">TokenPolicy</a></code>
- <code><a href="./src/resources/shared.ts">TokenValue</a></code>

# Accounts

Types:

- <code><a href="./src/resources/accounts/accounts.ts">Account</a></code>
- <code><a href="./src/resources/accounts/accounts.ts">AccountDeleteResponse</a></code>

Methods:

- <code title="post /accounts">client.accounts.<a href="./src/resources/accounts/accounts.ts">create</a>({ ...params }) -> Account</code>
- <code title="put /accounts/{account_id}">client.accounts.<a href="./src/resources/accounts/accounts.ts">update</a>({ ...params }) -> Account</code>
- <code title="get /accounts">client.accounts.<a href="./src/resources/accounts/accounts.ts">list</a>({ ...params }) -> AccountsV4PagePaginationArray</code>
- <code title="delete /accounts/{account_id}">client.accounts.<a href="./src/resources/accounts/accounts.ts">delete</a>({ ...params }) -> AccountDeleteResponse | null</code>
- <code title="get /accounts/{account_id}">client.accounts.<a href="./src/resources/accounts/accounts.ts">get</a>({ ...params }) -> Account</code>

## Members

Types:

- <code><a href="./src/resources/accounts/members.ts">Status</a></code>
- <code><a href="./src/resources/accounts/members.ts">MemberDeleteResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/members">client.accounts.members.<a href="./src/resources/accounts/members.ts">create</a>({ ...params }) -> Member</code>
- <code title="put /accounts/{account_id}/members/{member_id}">client.accounts.members.<a href="./src/resources/accounts/members.ts">update</a>(memberId, { ...params }) -> Member</code>
- <code title="get /accounts/{account_id}/members">client.accounts.members.<a href="./src/resources/accounts/members.ts">list</a>({ ...params }) -> MembersV4PagePaginationArray</code>
- <code title="delete /accounts/{account_id}/members/{member_id}">client.accounts.members.<a href="./src/resources/accounts/members.ts">delete</a>(memberId, { ...params }) -> MemberDeleteResponse | null</code>
- <code title="get /accounts/{account_id}/members/{member_id}">client.accounts.members.<a href="./src/resources/accounts/members.ts">get</a>(memberId, { ...params }) -> Member</code>

## Roles

Methods:

- <code title="get /accounts/{account_id}/roles">client.accounts.roles.<a href="./src/resources/accounts/roles.ts">list</a>({ ...params }) -> RolesV4PagePaginationArray</code>
- <code title="get /accounts/{account_id}/roles/{role_id}">client.accounts.roles.<a href="./src/resources/accounts/roles.ts">get</a>(roleId, { ...params }) -> Role</code>

## Subscriptions

Types:

- <code><a href="./src/resources/accounts/subscriptions.ts">SubscriptionDeleteResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/subscriptions">client.accounts.subscriptions.<a href="./src/resources/accounts/subscriptions.ts">create</a>({ ...params }) -> Subscription</code>
- <code title="put /accounts/{account_id}/subscriptions/{subscription_identifier}">client.accounts.subscriptions.<a href="./src/resources/accounts/subscriptions.ts">update</a>(subscriptionIdentifier, { ...params }) -> Subscription</code>
- <code title="delete /accounts/{account_id}/subscriptions/{subscription_identifier}">client.accounts.subscriptions.<a href="./src/resources/accounts/subscriptions.ts">delete</a>(subscriptionIdentifier, { ...params }) -> SubscriptionDeleteResponse</code>
- <code title="get /accounts/{account_id}/subscriptions">client.accounts.subscriptions.<a href="./src/resources/accounts/subscriptions.ts">get</a>({ ...params }) -> SubscriptionsSinglePage</code>

## Tokens

Types:

- <code><a href="./src/resources/accounts/tokens/tokens.ts">TokenCreateResponse</a></code>
- <code><a href="./src/resources/accounts/tokens/tokens.ts">TokenDeleteResponse</a></code>
- <code><a href="./src/resources/accounts/tokens/tokens.ts">TokenVerifyResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/tokens">client.accounts.tokens.<a href="./src/resources/accounts/tokens/tokens.ts">create</a>({ ...params }) -> TokenCreateResponse</code>
- <code title="put /accounts/{account_id}/tokens/{token_id}">client.accounts.tokens.<a href="./src/resources/accounts/tokens/tokens.ts">update</a>(tokenId, { ...params }) -> Token</code>
- <code title="get /accounts/{account_id}/tokens">client.accounts.tokens.<a href="./src/resources/accounts/tokens/tokens.ts">list</a>({ ...params }) -> TokensV4PagePaginationArray</code>
- <code title="delete /accounts/{account_id}/tokens/{token_id}">client.accounts.tokens.<a href="./src/resources/accounts/tokens/tokens.ts">delete</a>(tokenId, { ...params }) -> TokenDeleteResponse | null</code>
- <code title="get /accounts/{account_id}/tokens/{token_id}">client.accounts.tokens.<a href="./src/resources/accounts/tokens/tokens.ts">get</a>(tokenId, { ...params }) -> Token</code>
- <code title="get /accounts/{account_id}/tokens/verify">client.accounts.tokens.<a href="./src/resources/accounts/tokens/tokens.ts">verify</a>({ ...params }) -> TokenVerifyResponse</code>

### PermissionGroups

Types:

- <code><a href="./src/resources/accounts/tokens/permission-groups.ts">PermissionGroupListResponse</a></code>
- <code><a href="./src/resources/accounts/tokens/permission-groups.ts">PermissionGroupGetResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/tokens/permission_groups">client.accounts.tokens.permissionGroups.<a href="./src/resources/accounts/tokens/permission-groups.ts">list</a>({ ...params }) -> PermissionGroupListResponsesSinglePage</code>
- <code title="get /accounts/{account_id}/tokens/permission_groups">client.accounts.tokens.permissionGroups.<a href="./src/resources/accounts/tokens/permission-groups.ts">get</a>({ ...params }) -> PermissionGroupGetResponse</code>

### Value

Methods:

- <code title="put /accounts/{account_id}/tokens/{token_id}/value">client.accounts.tokens.value.<a href="./src/resources/accounts/tokens/value.ts">update</a>(tokenId, { ...params }) -> TokenValue</code>

## Logs

### Audit

Types:

- <code><a href="./src/resources/accounts/logs/audit.ts">AuditListResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/logs/audit">client.accounts.logs.audit.<a href="./src/resources/accounts/logs/audit.ts">list</a>({ ...params }) -> AuditListResponsesCursorLimitPagination</code>

# OriginCACertificates

Types:

- <code><a href="./src/resources/origin-ca-certificates.ts">OriginCACertificate</a></code>
- <code><a href="./src/resources/origin-ca-certificates.ts">OriginCACertificateDeleteResponse</a></code>

Methods:

- <code title="post /certificates">client.originCACertificates.<a href="./src/resources/origin-ca-certificates.ts">create</a>({ ...params }) -> OriginCACertificate</code>
- <code title="get /certificates">client.originCACertificates.<a href="./src/resources/origin-ca-certificates.ts">list</a>({ ...params }) -> OriginCACertificatesV4PagePaginationArray</code>
- <code title="delete /certificates/{certificate_id}">client.originCACertificates.<a href="./src/resources/origin-ca-certificates.ts">delete</a>(certificateId) -> OriginCACertificateDeleteResponse</code>
- <code title="get /certificates/{certificate_id}">client.originCACertificates.<a href="./src/resources/origin-ca-certificates.ts">get</a>(certificateId) -> OriginCACertificate</code>

# IPs

Types:

- <code><a href="./src/resources/ips.ts">IPsArray</a></code>
- <code><a href="./src/resources/ips.ts">IPListResponse</a></code>

Methods:

- <code title="get /ips">client.ips.<a href="./src/resources/ips.ts">list</a>({ ...params }) -> IPListResponse</code>

# Memberships

Types:

- <code><a href="./src/resources/memberships.ts">Membership</a></code>
- <code><a href="./src/resources/memberships.ts">MembershipUpdateResponse</a></code>
- <code><a href="./src/resources/memberships.ts">MembershipDeleteResponse</a></code>
- <code><a href="./src/resources/memberships.ts">MembershipGetResponse</a></code>

Methods:

- <code title="put /memberships/{membership_id}">client.memberships.<a href="./src/resources/memberships.ts">update</a>(membershipId, { ...params }) -> MembershipUpdateResponse</code>
- <code title="get /memberships">client.memberships.<a href="./src/resources/memberships.ts">list</a>({ ...params }) -> MembershipsV4PagePaginationArray</code>
- <code title="delete /memberships/{membership_id}">client.memberships.<a href="./src/resources/memberships.ts">delete</a>(membershipId) -> MembershipDeleteResponse</code>
- <code title="get /memberships/{membership_id}">client.memberships.<a href="./src/resources/memberships.ts">get</a>(membershipId) -> MembershipGetResponse</code>

# User

Types:

- <code><a href="./src/resources/user/user.ts">UserEditResponse</a></code>
- <code><a href="./src/resources/user/user.ts">UserGetResponse</a></code>

Methods:

- <code title="patch /user">client.user.<a href="./src/resources/user/user.ts">edit</a>({ ...params }) -> UserEditResponse</code>
- <code title="get /user">client.user.<a href="./src/resources/user/user.ts">get</a>() -> UserGetResponse</code>

## AuditLogs

Methods:

- <code title="get /user/audit_logs">client.user.auditLogs.<a href="./src/resources/user/audit-logs.ts">list</a>({ ...params }) -> AuditLogsV4PagePaginationArray</code>

## Billing

### History

Types:

- <code><a href="./src/resources/user/billing/history.ts">BillingHistory</a></code>

Methods:

- <code title="get /user/billing/history">client.user.billing.history.<a href="./src/resources/user/billing/history.ts">list</a>({ ...params }) -> BillingHistoriesV4PagePaginationArray</code>

### Profile

Types:

- <code><a href="./src/resources/user/billing/profile.ts">ProfileGetResponse</a></code>

Methods:

- <code title="get /user/billing/profile">client.user.billing.profile.<a href="./src/resources/user/billing/profile.ts">get</a>() -> ProfileGetResponse</code>

## Invites

Types:

- <code><a href="./src/resources/user/invites.ts">Invite</a></code>

Methods:

- <code title="get /user/invites">client.user.invites.<a href="./src/resources/user/invites.ts">list</a>() -> InvitesSinglePage</code>
- <code title="patch /user/invites/{invite_id}">client.user.invites.<a href="./src/resources/user/invites.ts">edit</a>(inviteId, { ...params }) -> Invite</code>
- <code title="get /user/invites/{invite_id}">client.user.invites.<a href="./src/resources/user/invites.ts">get</a>(inviteId) -> Invite</code>

## Organizations

Types:

- <code><a href="./src/resources/user/organizations.ts">Organization</a></code>
- <code><a href="./src/resources/user/organizations.ts">OrganizationDeleteResponse</a></code>
- <code><a href="./src/resources/user/organizations.ts">OrganizationGetResponse</a></code>

Methods:

- <code title="get /user/organizations">client.user.organizations.<a href="./src/resources/user/organizations.ts">list</a>({ ...params }) -> OrganizationsV4PagePaginationArray</code>
- <code title="delete /user/organizations/{organization_id}">client.user.organizations.<a href="./src/resources/user/organizations.ts">delete</a>(organizationId) -> OrganizationDeleteResponse</code>
- <code title="get /user/organizations/{organization_id}">client.user.organizations.<a href="./src/resources/user/organizations.ts">get</a>(organizationId) -> OrganizationGetResponse</code>

## Subscriptions

Types:

- <code><a href="./src/resources/user/subscriptions.ts">SubscriptionUpdateResponse</a></code>
- <code><a href="./src/resources/user/subscriptions.ts">SubscriptionDeleteResponse</a></code>

Methods:

- <code title="put /user/subscriptions/{identifier}">client.user.subscriptions.<a href="./src/resources/user/subscriptions.ts">update</a>(identifier, { ...params }) -> SubscriptionUpdateResponse</code>
- <code title="delete /user/subscriptions/{identifier}">client.user.subscriptions.<a href="./src/resources/user/subscriptions.ts">delete</a>(identifier) -> SubscriptionDeleteResponse</code>
- <code title="get /user/subscriptions">client.user.subscriptions.<a href="./src/resources/user/subscriptions.ts">get</a>() -> SubscriptionsSinglePage</code>

## Tokens

Types:

- <code><a href="./src/resources/user/tokens/tokens.ts">TokenCreateResponse</a></code>
- <code><a href="./src/resources/user/tokens/tokens.ts">TokenDeleteResponse</a></code>
- <code><a href="./src/resources/user/tokens/tokens.ts">TokenVerifyResponse</a></code>

Methods:

- <code title="post /user/tokens">client.user.tokens.<a href="./src/resources/user/tokens/tokens.ts">create</a>({ ...params }) -> TokenCreateResponse</code>
- <code title="put /user/tokens/{token_id}">client.user.tokens.<a href="./src/resources/user/tokens/tokens.ts">update</a>(tokenId, { ...params }) -> Token</code>
- <code title="get /user/tokens">client.user.tokens.<a href="./src/resources/user/tokens/tokens.ts">list</a>({ ...params }) -> TokensV4PagePaginationArray</code>
- <code title="delete /user/tokens/{token_id}">client.user.tokens.<a href="./src/resources/user/tokens/tokens.ts">delete</a>(tokenId) -> TokenDeleteResponse | null</code>
- <code title="get /user/tokens/{token_id}">client.user.tokens.<a href="./src/resources/user/tokens/tokens.ts">get</a>(tokenId) -> Token</code>
- <code title="get /user/tokens/verify">client.user.tokens.<a href="./src/resources/user/tokens/tokens.ts">verify</a>() -> TokenVerifyResponse</code>

### PermissionGroups

Types:

- <code><a href="./src/resources/user/tokens/permission-groups.ts">PermissionGroupListResponse</a></code>

Methods:

- <code title="get /user/tokens/permission_groups">client.user.tokens.permissionGroups.<a href="./src/resources/user/tokens/permission-groups.ts">list</a>({ ...params }) -> PermissionGroupListResponsesSinglePage</code>

### Value

Methods:

- <code title="put /user/tokens/{token_id}/value">client.user.tokens.value.<a href="./src/resources/user/tokens/value.ts">update</a>(tokenId, { ...params }) -> TokenValue</code>

# Zones

Types:

- <code><a href="./src/resources/zones/zones.ts">Type</a></code>
- <code><a href="./src/resources/zones/zones.ts">Zone</a></code>
- <code><a href="./src/resources/zones/zones.ts">ZoneDeleteResponse</a></code>

Methods:

- <code title="post /zones">client.zones.<a href="./src/resources/zones/zones.ts">create</a>({ ...params }) -> Zone</code>
- <code title="get /zones">client.zones.<a href="./src/resources/zones/zones.ts">list</a>({ ...params }) -> ZonesV4PagePaginationArray</code>
- <code title="delete /zones/{zone_id}">client.zones.<a href="./src/resources/zones/zones.ts">delete</a>({ ...params }) -> ZoneDeleteResponse | null</code>
- <code title="patch /zones/{zone_id}">client.zones.<a href="./src/resources/zones/zones.ts">edit</a>({ ...params }) -> Zone</code>
- <code title="get /zones/{zone_id}">client.zones.<a href="./src/resources/zones/zones.ts">get</a>({ ...params }) -> Zone</code>

## ActivationCheck

Types:

- <code><a href="./src/resources/zones/activation-check.ts">ActivationCheckTriggerResponse</a></code>

Methods:

- <code title="put /zones/{zone_id}/activation_check">client.zones.activationCheck.<a href="./src/resources/zones/activation-check.ts">trigger</a>({ ...params }) -> ActivationCheckTriggerResponse</code>

## Settings

Types:

- <code><a href="./src/resources/zones/settings.ts">AdvancedDDoS</a></code>
- <code><a href="./src/resources/zones/settings.ts">Aegis</a></code>
- <code><a href="./src/resources/zones/settings.ts">AlwaysOnline</a></code>
- <code><a href="./src/resources/zones/settings.ts">AlwaysUseHTTPS</a></code>
- <code><a href="./src/resources/zones/settings.ts">AutomaticHTTPSRewrites</a></code>
- <code><a href="./src/resources/zones/settings.ts">AutomaticPlatformOptimization</a></code>
- <code><a href="./src/resources/zones/settings.ts">Brotli</a></code>
- <code><a href="./src/resources/zones/settings.ts">BrowserCacheTTL</a></code>
- <code><a href="./src/resources/zones/settings.ts">BrowserCheck</a></code>
- <code><a href="./src/resources/zones/settings.ts">CacheLevel</a></code>
- <code><a href="./src/resources/zones/settings.ts">ChallengeTTL</a></code>
- <code><a href="./src/resources/zones/settings.ts">Ciphers</a></code>
- <code><a href="./src/resources/zones/settings.ts">DevelopmentMode</a></code>
- <code><a href="./src/resources/zones/settings.ts">EarlyHints</a></code>
- <code><a href="./src/resources/zones/settings.ts">EmailObfuscation</a></code>
- <code><a href="./src/resources/zones/settings.ts">FontSettings</a></code>
- <code><a href="./src/resources/zones/settings.ts">H2Prioritization</a></code>
- <code><a href="./src/resources/zones/settings.ts">HotlinkProtection</a></code>
- <code><a href="./src/resources/zones/settings.ts">HTTP2</a></code>
- <code><a href="./src/resources/zones/settings.ts">HTTP3</a></code>
- <code><a href="./src/resources/zones/settings.ts">ImageResizing</a></code>
- <code><a href="./src/resources/zones/settings.ts">IPGeolocation</a></code>
- <code><a href="./src/resources/zones/settings.ts">IPV6</a></code>
- <code><a href="./src/resources/zones/settings.ts">MinTLSVersion</a></code>
- <code><a href="./src/resources/zones/settings.ts">Mirage</a></code>
- <code><a href="./src/resources/zones/settings.ts">NEL</a></code>
- <code><a href="./src/resources/zones/settings.ts">OpportunisticEncryption</a></code>
- <code><a href="./src/resources/zones/settings.ts">OpportunisticOnion</a></code>
- <code><a href="./src/resources/zones/settings.ts">OrangeToOrange</a></code>
- <code><a href="./src/resources/zones/settings.ts">OriginErrorPagePassThru</a></code>
- <code><a href="./src/resources/zones/settings.ts">OriginMaxHTTPVersion</a></code>
- <code><a href="./src/resources/zones/settings.ts">Polish</a></code>
- <code><a href="./src/resources/zones/settings.ts">PrefetchPreload</a></code>
- <code><a href="./src/resources/zones/settings.ts">ProxyReadTimeout</a></code>
- <code><a href="./src/resources/zones/settings.ts">PseudoIPV4</a></code>
- <code><a href="./src/resources/zones/settings.ts">ResponseBuffering</a></code>
- <code><a href="./src/resources/zones/settings.ts">RocketLoader</a></code>
- <code><a href="./src/resources/zones/settings.ts">SecurityHeaders</a></code>
- <code><a href="./src/resources/zones/settings.ts">SecurityLevel</a></code>
- <code><a href="./src/resources/zones/settings.ts">ServerSideExcludes</a></code>
- <code><a href="./src/resources/zones/settings.ts">SortQueryStringForCache</a></code>
- <code><a href="./src/resources/zones/settings.ts">SSL</a></code>
- <code><a href="./src/resources/zones/settings.ts">SSLRecommender</a></code>
- <code><a href="./src/resources/zones/settings.ts">TLS1_3</a></code>
- <code><a href="./src/resources/zones/settings.ts">TLSClientAuth</a></code>
- <code><a href="./src/resources/zones/settings.ts">TrueClientIPHeader</a></code>
- <code><a href="./src/resources/zones/settings.ts">WAF</a></code>
- <code><a href="./src/resources/zones/settings.ts">WebP</a></code>
- <code><a href="./src/resources/zones/settings.ts">Websocket</a></code>
- <code><a href="./src/resources/zones/settings.ts">ZeroRTT</a></code>
- <code><a href="./src/resources/zones/settings.ts">SettingEditResponse</a></code>
- <code><a href="./src/resources/zones/settings.ts">SettingGetResponse</a></code>

Methods:

- <code title="patch /zones/{zone_id}/settings/{setting_id}">client.zones.settings.<a href="./src/resources/zones/settings.ts">edit</a>(settingId, { ...params }) -> SettingEditResponse</code>
- <code title="get /zones/{zone_id}/settings/{setting_id}">client.zones.settings.<a href="./src/resources/zones/settings.ts">get</a>(settingId, { ...params }) -> SettingGetResponse</code>

## CustomNameservers

Types:

- <code><a href="./src/resources/zones/custom-nameservers.ts">CustomNameserverUpdateResponse</a></code>
- <code><a href="./src/resources/zones/custom-nameservers.ts">CustomNameserverGetResponse</a></code>

Methods:

- <code title="put /zones/{zone_id}/custom_ns">client.zones.customNameservers.<a href="./src/resources/zones/custom-nameservers.ts">update</a>({ ...params }) -> CustomNameserverUpdateResponsesSinglePage</code>
- <code title="get /zones/{zone_id}/custom_ns">client.zones.customNameservers.<a href="./src/resources/zones/custom-nameservers.ts">get</a>({ ...params }) -> CustomNameserverGetResponse</code>

## Holds

Types:

- <code><a href="./src/resources/zones/holds.ts">ZoneHold</a></code>

Methods:

- <code title="post /zones/{zone_id}/hold">client.zones.holds.<a href="./src/resources/zones/holds.ts">create</a>({ ...params }) -> ZoneHold</code>
- <code title="delete /zones/{zone_id}/hold">client.zones.holds.<a href="./src/resources/zones/holds.ts">delete</a>({ ...params }) -> ZoneHold</code>
- <code title="patch /zones/{zone_id}/hold">client.zones.holds.<a href="./src/resources/zones/holds.ts">edit</a>({ ...params }) -> ZoneHold</code>
- <code title="get /zones/{zone_id}/hold">client.zones.holds.<a href="./src/resources/zones/holds.ts">get</a>({ ...params }) -> ZoneHold</code>

## Subscriptions

Methods:

- <code title="post /zones/{zone_id}/subscription">client.zones.subscriptions.<a href="./src/resources/zones/subscriptions.ts">create</a>({ ...params }) -> Subscription</code>
- <code title="put /zones/{zone_id}/subscription">client.zones.subscriptions.<a href="./src/resources/zones/subscriptions.ts">update</a>({ ...params }) -> Subscription</code>
- <code title="get /zones/{zone_id}/subscription">client.zones.subscriptions.<a href="./src/resources/zones/subscriptions.ts">get</a>({ ...params }) -> Subscription</code>

## Plans

Types:

- <code><a href="./src/resources/zones/plans.ts">AvailableRatePlan</a></code>

Methods:

- <code title="get /zones/{zone_id}/available_plans">client.zones.plans.<a href="./src/resources/zones/plans.ts">list</a>({ ...params }) -> AvailableRatePlansSinglePage</code>
- <code title="get /zones/{zone_id}/available_plans/{plan_identifier}">client.zones.plans.<a href="./src/resources/zones/plans.ts">get</a>(planIdentifier, { ...params }) -> AvailableRatePlan</code>

## RatePlans

Types:

- <code><a href="./src/resources/zones/rate-plans.ts">RatePlanGetResponse</a></code>

Methods:

- <code title="get /zones/{zone_id}/available_rate_plans">client.zones.ratePlans.<a href="./src/resources/zones/rate-plans.ts">get</a>({ ...params }) -> RatePlanGetResponsesSinglePage</code>

# LoadBalancers

Types:

- <code><a href="./src/resources/load-balancers/load-balancers.ts">AdaptiveRouting</a></code>
- <code><a href="./src/resources/load-balancers/load-balancers.ts">CheckRegion</a></code>
- <code><a href="./src/resources/load-balancers/load-balancers.ts">DefaultPools</a></code>
- <code><a href="./src/resources/load-balancers/load-balancers.ts">FilterOptions</a></code>
- <code><a href="./src/resources/load-balancers/load-balancers.ts">Header</a></code>
- <code><a href="./src/resources/load-balancers/load-balancers.ts">Host</a></code>
- <code><a href="./src/resources/load-balancers/load-balancers.ts">LoadBalancer</a></code>
- <code><a href="./src/resources/load-balancers/load-balancers.ts">LoadShedding</a></code>
- <code><a href="./src/resources/load-balancers/load-balancers.ts">LocationStrategy</a></code>
- <code><a href="./src/resources/load-balancers/load-balancers.ts">NotificationFilter</a></code>
- <code><a href="./src/resources/load-balancers/load-balancers.ts">Origin</a></code>
- <code><a href="./src/resources/load-balancers/load-balancers.ts">OriginSteering</a></code>
- <code><a href="./src/resources/load-balancers/load-balancers.ts">RandomSteering</a></code>
- <code><a href="./src/resources/load-balancers/load-balancers.ts">Rules</a></code>
- <code><a href="./src/resources/load-balancers/load-balancers.ts">SessionAffinity</a></code>
- <code><a href="./src/resources/load-balancers/load-balancers.ts">SessionAffinityAttributes</a></code>
- <code><a href="./src/resources/load-balancers/load-balancers.ts">SteeringPolicy</a></code>
- <code><a href="./src/resources/load-balancers/load-balancers.ts">LoadBalancerDeleteResponse</a></code>

Methods:

- <code title="post /zones/{zone_id}/load_balancers">client.loadBalancers.<a href="./src/resources/load-balancers/load-balancers.ts">create</a>({ ...params }) -> LoadBalancer</code>
- <code title="put /zones/{zone_id}/load_balancers/{load_balancer_id}">client.loadBalancers.<a href="./src/resources/load-balancers/load-balancers.ts">update</a>(loadBalancerId, { ...params }) -> LoadBalancer</code>
- <code title="get /zones/{zone_id}/load_balancers">client.loadBalancers.<a href="./src/resources/load-balancers/load-balancers.ts">list</a>({ ...params }) -> LoadBalancersSinglePage</code>
- <code title="delete /zones/{zone_id}/load_balancers/{load_balancer_id}">client.loadBalancers.<a href="./src/resources/load-balancers/load-balancers.ts">delete</a>(loadBalancerId, { ...params }) -> LoadBalancerDeleteResponse</code>
- <code title="patch /zones/{zone_id}/load_balancers/{load_balancer_id}">client.loadBalancers.<a href="./src/resources/load-balancers/load-balancers.ts">edit</a>(loadBalancerId, { ...params }) -> LoadBalancer</code>
- <code title="get /zones/{zone_id}/load_balancers/{load_balancer_id}">client.loadBalancers.<a href="./src/resources/load-balancers/load-balancers.ts">get</a>(loadBalancerId, { ...params }) -> LoadBalancer</code>

## Monitors

Types:

- <code><a href="./src/resources/load-balancers/monitors/monitors.ts">Monitor</a></code>
- <code><a href="./src/resources/load-balancers/monitors/monitors.ts">MonitorDeleteResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/load_balancers/monitors">client.loadBalancers.monitors.<a href="./src/resources/load-balancers/monitors/monitors.ts">create</a>({ ...params }) -> Monitor</code>
- <code title="put /accounts/{account_id}/load_balancers/monitors/{monitor_id}">client.loadBalancers.monitors.<a href="./src/resources/load-balancers/monitors/monitors.ts">update</a>(monitorId, { ...params }) -> Monitor</code>
- <code title="get /accounts/{account_id}/load_balancers/monitors">client.loadBalancers.monitors.<a href="./src/resources/load-balancers/monitors/monitors.ts">list</a>({ ...params }) -> MonitorsSinglePage</code>
- <code title="delete /accounts/{account_id}/load_balancers/monitors/{monitor_id}">client.loadBalancers.monitors.<a href="./src/resources/load-balancers/monitors/monitors.ts">delete</a>(monitorId, { ...params }) -> MonitorDeleteResponse</code>
- <code title="patch /accounts/{account_id}/load_balancers/monitors/{monitor_id}">client.loadBalancers.monitors.<a href="./src/resources/load-balancers/monitors/monitors.ts">edit</a>(monitorId, { ...params }) -> Monitor</code>
- <code title="get /accounts/{account_id}/load_balancers/monitors/{monitor_id}">client.loadBalancers.monitors.<a href="./src/resources/load-balancers/monitors/monitors.ts">get</a>(monitorId, { ...params }) -> Monitor</code>

### Previews

Types:

- <code><a href="./src/resources/load-balancers/monitors/previews.ts">PreviewCreateResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/load_balancers/monitors/{monitor_id}/preview">client.loadBalancers.monitors.previews.<a href="./src/resources/load-balancers/monitors/previews.ts">create</a>(monitorId, { ...params }) -> PreviewCreateResponse</code>

### References

Types:

- <code><a href="./src/resources/load-balancers/monitors/references.ts">ReferenceGetResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/load_balancers/monitors/{monitor_id}/references">client.loadBalancers.monitors.references.<a href="./src/resources/load-balancers/monitors/references.ts">get</a>(monitorId, { ...params }) -> ReferenceGetResponsesSinglePage</code>

## Pools

Types:

- <code><a href="./src/resources/load-balancers/pools/pools.ts">Pool</a></code>
- <code><a href="./src/resources/load-balancers/pools/pools.ts">PoolDeleteResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/load_balancers/pools">client.loadBalancers.pools.<a href="./src/resources/load-balancers/pools/pools.ts">create</a>({ ...params }) -> Pool</code>
- <code title="put /accounts/{account_id}/load_balancers/pools/{pool_id}">client.loadBalancers.pools.<a href="./src/resources/load-balancers/pools/pools.ts">update</a>(poolId, { ...params }) -> Pool</code>
- <code title="get /accounts/{account_id}/load_balancers/pools">client.loadBalancers.pools.<a href="./src/resources/load-balancers/pools/pools.ts">list</a>({ ...params }) -> PoolsSinglePage</code>
- <code title="delete /accounts/{account_id}/load_balancers/pools/{pool_id}">client.loadBalancers.pools.<a href="./src/resources/load-balancers/pools/pools.ts">delete</a>(poolId, { ...params }) -> PoolDeleteResponse</code>
- <code title="patch /accounts/{account_id}/load_balancers/pools">client.loadBalancers.pools.<a href="./src/resources/load-balancers/pools/pools.ts">bulkEdit</a>({ ...params }) -> PoolsSinglePage</code>
- <code title="patch /accounts/{account_id}/load_balancers/pools/{pool_id}">client.loadBalancers.pools.<a href="./src/resources/load-balancers/pools/pools.ts">edit</a>(poolId, { ...params }) -> Pool</code>
- <code title="get /accounts/{account_id}/load_balancers/pools/{pool_id}">client.loadBalancers.pools.<a href="./src/resources/load-balancers/pools/pools.ts">get</a>(poolId, { ...params }) -> Pool</code>

### Health

Types:

- <code><a href="./src/resources/load-balancers/pools/health.ts">HealthCreateResponse</a></code>
- <code><a href="./src/resources/load-balancers/pools/health.ts">HealthGetResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/load_balancers/pools/{pool_id}/preview">client.loadBalancers.pools.health.<a href="./src/resources/load-balancers/pools/health.ts">create</a>(poolId, { ...params }) -> HealthCreateResponse</code>
- <code title="get /accounts/{account_id}/load_balancers/pools/{pool_id}/health">client.loadBalancers.pools.health.<a href="./src/resources/load-balancers/pools/health.ts">get</a>(poolId, { ...params }) -> HealthGetResponse</code>

### References

Types:

- <code><a href="./src/resources/load-balancers/pools/references.ts">ReferenceGetResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/load_balancers/pools/{pool_id}/references">client.loadBalancers.pools.references.<a href="./src/resources/load-balancers/pools/references.ts">get</a>(poolId, { ...params }) -> ReferenceGetResponsesSinglePage</code>

## Previews

Types:

- <code><a href="./src/resources/load-balancers/previews.ts">PreviewGetResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/load_balancers/preview/{preview_id}">client.loadBalancers.previews.<a href="./src/resources/load-balancers/previews.ts">get</a>(previewId, { ...params }) -> PreviewGetResponse</code>

## Regions

Types:

- <code><a href="./src/resources/load-balancers/regions.ts">RegionListResponse</a></code>
- <code><a href="./src/resources/load-balancers/regions.ts">RegionGetResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/load_balancers/regions">client.loadBalancers.regions.<a href="./src/resources/load-balancers/regions.ts">list</a>({ ...params }) -> RegionListResponse</code>
- <code title="get /accounts/{account_id}/load_balancers/regions/{region_id}">client.loadBalancers.regions.<a href="./src/resources/load-balancers/regions.ts">get</a>(regionId, { ...params }) -> RegionGetResponse</code>

## Searches

Types:

- <code><a href="./src/resources/load-balancers/searches.ts">SearchListResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/load_balancers/search">client.loadBalancers.searches.<a href="./src/resources/load-balancers/searches.ts">list</a>({ ...params }) -> SearchListResponsesV4PagePagination</code>

# Cache

Types:

- <code><a href="./src/resources/cache/cache.ts">CachePurgeResponse</a></code>

Methods:

- <code title="post /zones/{zone_id}/purge_cache">client.cache.<a href="./src/resources/cache/cache.ts">purge</a>({ ...params }) -> CachePurgeResponse | null</code>

## CacheReserve

Types:

- <code><a href="./src/resources/cache/cache-reserve.ts">CacheReserve</a></code>
- <code><a href="./src/resources/cache/cache-reserve.ts">CacheReserveClear</a></code>
- <code><a href="./src/resources/cache/cache-reserve.ts">State</a></code>
- <code><a href="./src/resources/cache/cache-reserve.ts">CacheReserveClearResponse</a></code>
- <code><a href="./src/resources/cache/cache-reserve.ts">CacheReserveEditResponse</a></code>
- <code><a href="./src/resources/cache/cache-reserve.ts">CacheReserveGetResponse</a></code>
- <code><a href="./src/resources/cache/cache-reserve.ts">CacheReserveStatusResponse</a></code>

Methods:

- <code title="post /zones/{zone_id}/cache/cache_reserve_clear">client.cache.cacheReserve.<a href="./src/resources/cache/cache-reserve.ts">clear</a>({ ...params }) -> CacheReserveClearResponse</code>
- <code title="patch /zones/{zone_id}/cache/cache_reserve">client.cache.cacheReserve.<a href="./src/resources/cache/cache-reserve.ts">edit</a>({ ...params }) -> CacheReserveEditResponse</code>
- <code title="get /zones/{zone_id}/cache/cache_reserve">client.cache.cacheReserve.<a href="./src/resources/cache/cache-reserve.ts">get</a>({ ...params }) -> CacheReserveGetResponse</code>
- <code title="get /zones/{zone_id}/cache/cache_reserve_clear">client.cache.cacheReserve.<a href="./src/resources/cache/cache-reserve.ts">status</a>({ ...params }) -> CacheReserveStatusResponse</code>

## SmartTieredCache

Types:

- <code><a href="./src/resources/cache/smart-tiered-cache.ts">SmartTieredCacheDeleteResponse</a></code>
- <code><a href="./src/resources/cache/smart-tiered-cache.ts">SmartTieredCacheEditResponse</a></code>
- <code><a href="./src/resources/cache/smart-tiered-cache.ts">SmartTieredCacheGetResponse</a></code>

Methods:

- <code title="delete /zones/{zone_id}/cache/tiered_cache_smart_topology_enable">client.cache.smartTieredCache.<a href="./src/resources/cache/smart-tiered-cache.ts">delete</a>({ ...params }) -> SmartTieredCacheDeleteResponse</code>
- <code title="patch /zones/{zone_id}/cache/tiered_cache_smart_topology_enable">client.cache.smartTieredCache.<a href="./src/resources/cache/smart-tiered-cache.ts">edit</a>({ ...params }) -> SmartTieredCacheEditResponse</code>
- <code title="get /zones/{zone_id}/cache/tiered_cache_smart_topology_enable">client.cache.smartTieredCache.<a href="./src/resources/cache/smart-tiered-cache.ts">get</a>({ ...params }) -> SmartTieredCacheGetResponse</code>

## Variants

Types:

- <code><a href="./src/resources/cache/variants.ts">CacheVariant</a></code>
- <code><a href="./src/resources/cache/variants.ts">VariantDeleteResponse</a></code>
- <code><a href="./src/resources/cache/variants.ts">VariantEditResponse</a></code>
- <code><a href="./src/resources/cache/variants.ts">VariantGetResponse</a></code>

Methods:

- <code title="delete /zones/{zone_id}/cache/variants">client.cache.variants.<a href="./src/resources/cache/variants.ts">delete</a>({ ...params }) -> VariantDeleteResponse</code>
- <code title="patch /zones/{zone_id}/cache/variants">client.cache.variants.<a href="./src/resources/cache/variants.ts">edit</a>({ ...params }) -> VariantEditResponse</code>
- <code title="get /zones/{zone_id}/cache/variants">client.cache.variants.<a href="./src/resources/cache/variants.ts">get</a>({ ...params }) -> VariantGetResponse</code>

## RegionalTieredCache

Types:

- <code><a href="./src/resources/cache/regional-tiered-cache.ts">RegionalTieredCache</a></code>
- <code><a href="./src/resources/cache/regional-tiered-cache.ts">RegionalTieredCacheEditResponse</a></code>
- <code><a href="./src/resources/cache/regional-tiered-cache.ts">RegionalTieredCacheGetResponse</a></code>

Methods:

- <code title="patch /zones/{zone_id}/cache/regional_tiered_cache">client.cache.regionalTieredCache.<a href="./src/resources/cache/regional-tiered-cache.ts">edit</a>({ ...params }) -> RegionalTieredCacheEditResponse</code>
- <code title="get /zones/{zone_id}/cache/regional_tiered_cache">client.cache.regionalTieredCache.<a href="./src/resources/cache/regional-tiered-cache.ts">get</a>({ ...params }) -> RegionalTieredCacheGetResponse</code>

# SSL

## Analyze

Types:

- <code><a href="./src/resources/ssl/analyze.ts">AnalyzeCreateResponse</a></code>

Methods:

- <code title="post /zones/{zone_id}/ssl/analyze">client.ssl.analyze.<a href="./src/resources/ssl/analyze.ts">create</a>({ ...params }) -> AnalyzeCreateResponse</code>

## CertificatePacks

Types:

- <code><a href="./src/resources/ssl/certificate-packs/certificate-packs.ts">Host</a></code>
- <code><a href="./src/resources/ssl/certificate-packs/certificate-packs.ts">RequestValidity</a></code>
- <code><a href="./src/resources/ssl/certificate-packs/certificate-packs.ts">Status</a></code>
- <code><a href="./src/resources/ssl/certificate-packs/certificate-packs.ts">ValidationMethod</a></code>
- <code><a href="./src/resources/ssl/certificate-packs/certificate-packs.ts">CertificatePackCreateResponse</a></code>
- <code><a href="./src/resources/ssl/certificate-packs/certificate-packs.ts">CertificatePackListResponse</a></code>
- <code><a href="./src/resources/ssl/certificate-packs/certificate-packs.ts">CertificatePackDeleteResponse</a></code>
- <code><a href="./src/resources/ssl/certificate-packs/certificate-packs.ts">CertificatePackEditResponse</a></code>
- <code><a href="./src/resources/ssl/certificate-packs/certificate-packs.ts">CertificatePackGetResponse</a></code>

Methods:

- <code title="post /zones/{zone_id}/ssl/certificate_packs/order">client.ssl.certificatePacks.<a href="./src/resources/ssl/certificate-packs/certificate-packs.ts">create</a>({ ...params }) -> CertificatePackCreateResponse</code>
- <code title="get /zones/{zone_id}/ssl/certificate_packs">client.ssl.certificatePacks.<a href="./src/resources/ssl/certificate-packs/certificate-packs.ts">list</a>({ ...params }) -> CertificatePackListResponsesSinglePage</code>
- <code title="delete /zones/{zone_id}/ssl/certificate_packs/{certificate_pack_id}">client.ssl.certificatePacks.<a href="./src/resources/ssl/certificate-packs/certificate-packs.ts">delete</a>(certificatePackId, { ...params }) -> CertificatePackDeleteResponse</code>
- <code title="patch /zones/{zone_id}/ssl/certificate_packs/{certificate_pack_id}">client.ssl.certificatePacks.<a href="./src/resources/ssl/certificate-packs/certificate-packs.ts">edit</a>(certificatePackId, { ...params }) -> CertificatePackEditResponse</code>
- <code title="get /zones/{zone_id}/ssl/certificate_packs/{certificate_pack_id}">client.ssl.certificatePacks.<a href="./src/resources/ssl/certificate-packs/certificate-packs.ts">get</a>(certificatePackId, { ...params }) -> CertificatePackGetResponse</code>

### Quota

Types:

- <code><a href="./src/resources/ssl/certificate-packs/quota.ts">QuotaGetResponse</a></code>

Methods:

- <code title="get /zones/{zone_id}/ssl/certificate_packs/quota">client.ssl.certificatePacks.quota.<a href="./src/resources/ssl/certificate-packs/quota.ts">get</a>({ ...params }) -> QuotaGetResponse</code>

## Recommendations

Types:

- <code><a href="./src/resources/ssl/recommendations.ts">RecommendationGetResponse</a></code>

Methods:

- <code title="get /zones/{zone_id}/ssl/recommendation">client.ssl.recommendations.<a href="./src/resources/ssl/recommendations.ts">get</a>({ ...params }) -> RecommendationGetResponse</code>

## Universal

### Settings

Types:

- <code><a href="./src/resources/ssl/universal/settings.ts">UniversalSSLSettings</a></code>

Methods:

- <code title="patch /zones/{zone_id}/ssl/universal/settings">client.ssl.universal.settings.<a href="./src/resources/ssl/universal/settings.ts">edit</a>({ ...params }) -> UniversalSSLSettings</code>
- <code title="get /zones/{zone_id}/ssl/universal/settings">client.ssl.universal.settings.<a href="./src/resources/ssl/universal/settings.ts">get</a>({ ...params }) -> UniversalSSLSettings</code>

## Verification

Types:

- <code><a href="./src/resources/ssl/verification.ts">Verification</a></code>
- <code><a href="./src/resources/ssl/verification.ts">VerificationEditResponse</a></code>
- <code><a href="./src/resources/ssl/verification.ts">VerificationGetResponse</a></code>

Methods:

- <code title="patch /zones/{zone_id}/ssl/verification/{certificate_pack_id}">client.ssl.verification.<a href="./src/resources/ssl/verification.ts">edit</a>(certificatePackId, { ...params }) -> VerificationEditResponse</code>
- <code title="get /zones/{zone_id}/ssl/verification">client.ssl.verification.<a href="./src/resources/ssl/verification.ts">get</a>({ ...params }) -> VerificationGetResponse</code>

# ACM

## TotalTLS

Types:

- <code><a href="./src/resources/acm/total-tls.ts">CertificateAuthority</a></code>
- <code><a href="./src/resources/acm/total-tls.ts">TotalTLSCreateResponse</a></code>
- <code><a href="./src/resources/acm/total-tls.ts">TotalTLSGetResponse</a></code>

Methods:

- <code title="post /zones/{zone_id}/acm/total_tls">client.acm.totalTLS.<a href="./src/resources/acm/total-tls.ts">create</a>({ ...params }) -> TotalTLSCreateResponse</code>
- <code title="get /zones/{zone_id}/acm/total_tls">client.acm.totalTLS.<a href="./src/resources/acm/total-tls.ts">get</a>({ ...params }) -> TotalTLSGetResponse</code>

# Argo

## SmartRouting

Types:

- <code><a href="./src/resources/argo/smart-routing.ts">SmartRoutingEditResponse</a></code>
- <code><a href="./src/resources/argo/smart-routing.ts">SmartRoutingGetResponse</a></code>

Methods:

- <code title="patch /zones/{zone_id}/argo/smart_routing">client.argo.smartRouting.<a href="./src/resources/argo/smart-routing.ts">edit</a>({ ...params }) -> SmartRoutingEditResponse</code>
- <code title="get /zones/{zone_id}/argo/smart_routing">client.argo.smartRouting.<a href="./src/resources/argo/smart-routing.ts">get</a>({ ...params }) -> SmartRoutingGetResponse</code>

## TieredCaching

Types:

- <code><a href="./src/resources/argo/tiered-caching.ts">TieredCachingEditResponse</a></code>
- <code><a href="./src/resources/argo/tiered-caching.ts">TieredCachingGetResponse</a></code>

Methods:

- <code title="patch /zones/{zone_id}/argo/tiered_caching">client.argo.tieredCaching.<a href="./src/resources/argo/tiered-caching.ts">edit</a>({ ...params }) -> TieredCachingEditResponse</code>
- <code title="get /zones/{zone_id}/argo/tiered_caching">client.argo.tieredCaching.<a href="./src/resources/argo/tiered-caching.ts">get</a>({ ...params }) -> TieredCachingGetResponse</code>

# CertificateAuthorities

## HostnameAssociations

Types:

- <code><a href="./src/resources/certificate-authorities/hostname-associations.ts">HostnameAssociation</a></code>
- <code><a href="./src/resources/certificate-authorities/hostname-associations.ts">TLSHostnameAssociation</a></code>
- <code><a href="./src/resources/certificate-authorities/hostname-associations.ts">HostnameAssociationUpdateResponse</a></code>
- <code><a href="./src/resources/certificate-authorities/hostname-associations.ts">HostnameAssociationGetResponse</a></code>

Methods:

- <code title="put /zones/{zone_id}/certificate_authorities/hostname_associations">client.certificateAuthorities.hostnameAssociations.<a href="./src/resources/certificate-authorities/hostname-associations.ts">update</a>({ ...params }) -> HostnameAssociationUpdateResponse</code>
- <code title="get /zones/{zone_id}/certificate_authorities/hostname_associations">client.certificateAuthorities.hostnameAssociations.<a href="./src/resources/certificate-authorities/hostname-associations.ts">get</a>({ ...params }) -> HostnameAssociationGetResponse</code>

# ClientCertificates

Types:

- <code><a href="./src/resources/client-certificates.ts">ClientCertificate</a></code>

Methods:

- <code title="post /zones/{zone_id}/client_certificates">client.clientCertificates.<a href="./src/resources/client-certificates.ts">create</a>({ ...params }) -> ClientCertificate</code>
- <code title="get /zones/{zone_id}/client_certificates">client.clientCertificates.<a href="./src/resources/client-certificates.ts">list</a>({ ...params }) -> ClientCertificatesV4PagePaginationArray</code>
- <code title="delete /zones/{zone_id}/client_certificates/{client_certificate_id}">client.clientCertificates.<a href="./src/resources/client-certificates.ts">delete</a>(clientCertificateId, { ...params }) -> ClientCertificate</code>
- <code title="patch /zones/{zone_id}/client_certificates/{client_certificate_id}">client.clientCertificates.<a href="./src/resources/client-certificates.ts">edit</a>(clientCertificateId, { ...params }) -> ClientCertificate</code>
- <code title="get /zones/{zone_id}/client_certificates/{client_certificate_id}">client.clientCertificates.<a href="./src/resources/client-certificates.ts">get</a>(clientCertificateId, { ...params }) -> ClientCertificate</code>

# CustomCertificates

Types:

- <code><a href="./src/resources/custom-certificates/custom-certificates.ts">CustomCertificate</a></code>
- <code><a href="./src/resources/custom-certificates/custom-certificates.ts">GeoRestrictions</a></code>
- <code><a href="./src/resources/custom-certificates/custom-certificates.ts">Status</a></code>
- <code><a href="./src/resources/custom-certificates/custom-certificates.ts">CustomCertificateDeleteResponse</a></code>

Methods:

- <code title="post /zones/{zone_id}/custom_certificates">client.customCertificates.<a href="./src/resources/custom-certificates/custom-certificates.ts">create</a>({ ...params }) -> CustomCertificate</code>
- <code title="get /zones/{zone_id}/custom_certificates">client.customCertificates.<a href="./src/resources/custom-certificates/custom-certificates.ts">list</a>({ ...params }) -> CustomCertificatesV4PagePaginationArray</code>
- <code title="delete /zones/{zone_id}/custom_certificates/{custom_certificate_id}">client.customCertificates.<a href="./src/resources/custom-certificates/custom-certificates.ts">delete</a>(customCertificateId, { ...params }) -> CustomCertificateDeleteResponse</code>
- <code title="patch /zones/{zone_id}/custom_certificates/{custom_certificate_id}">client.customCertificates.<a href="./src/resources/custom-certificates/custom-certificates.ts">edit</a>(customCertificateId, { ...params }) -> CustomCertificate</code>
- <code title="get /zones/{zone_id}/custom_certificates/{custom_certificate_id}">client.customCertificates.<a href="./src/resources/custom-certificates/custom-certificates.ts">get</a>(customCertificateId, { ...params }) -> CustomCertificate</code>

## Prioritize

Methods:

- <code title="put /zones/{zone_id}/custom_certificates/prioritize">client.customCertificates.prioritize.<a href="./src/resources/custom-certificates/prioritize.ts">update</a>({ ...params }) -> CustomCertificatesSinglePage</code>

# CustomHostnames

Types:

- <code><a href="./src/resources/custom-hostnames/custom-hostnames.ts">BundleMethod</a></code>
- <code><a href="./src/resources/custom-hostnames/custom-hostnames.ts">CustomHostname</a></code>
- <code><a href="./src/resources/custom-hostnames/custom-hostnames.ts">DCVMethod</a></code>
- <code><a href="./src/resources/custom-hostnames/custom-hostnames.ts">DomainValidationType</a></code>
- <code><a href="./src/resources/custom-hostnames/custom-hostnames.ts">CustomHostnameCreateResponse</a></code>
- <code><a href="./src/resources/custom-hostnames/custom-hostnames.ts">CustomHostnameListResponse</a></code>
- <code><a href="./src/resources/custom-hostnames/custom-hostnames.ts">CustomHostnameDeleteResponse</a></code>
- <code><a href="./src/resources/custom-hostnames/custom-hostnames.ts">CustomHostnameEditResponse</a></code>
- <code><a href="./src/resources/custom-hostnames/custom-hostnames.ts">CustomHostnameGetResponse</a></code>

Methods:

- <code title="post /zones/{zone_id}/custom_hostnames">client.customHostnames.<a href="./src/resources/custom-hostnames/custom-hostnames.ts">create</a>({ ...params }) -> CustomHostnameCreateResponse</code>
- <code title="get /zones/{zone_id}/custom_hostnames">client.customHostnames.<a href="./src/resources/custom-hostnames/custom-hostnames.ts">list</a>({ ...params }) -> CustomHostnameListResponsesV4PagePaginationArray</code>
- <code title="delete /zones/{zone_id}/custom_hostnames/{custom_hostname_id}">client.customHostnames.<a href="./src/resources/custom-hostnames/custom-hostnames.ts">delete</a>(customHostnameId, { ...params }) -> CustomHostnameDeleteResponse</code>
- <code title="patch /zones/{zone_id}/custom_hostnames/{custom_hostname_id}">client.customHostnames.<a href="./src/resources/custom-hostnames/custom-hostnames.ts">edit</a>(customHostnameId, { ...params }) -> CustomHostnameEditResponse</code>
- <code title="get /zones/{zone_id}/custom_hostnames/{custom_hostname_id}">client.customHostnames.<a href="./src/resources/custom-hostnames/custom-hostnames.ts">get</a>(customHostnameId, { ...params }) -> CustomHostnameGetResponse</code>

## FallbackOrigin

Types:

- <code><a href="./src/resources/custom-hostnames/fallback-origin.ts">FallbackOriginUpdateResponse</a></code>
- <code><a href="./src/resources/custom-hostnames/fallback-origin.ts">FallbackOriginDeleteResponse</a></code>
- <code><a href="./src/resources/custom-hostnames/fallback-origin.ts">FallbackOriginGetResponse</a></code>

Methods:

- <code title="put /zones/{zone_id}/custom_hostnames/fallback_origin">client.customHostnames.fallbackOrigin.<a href="./src/resources/custom-hostnames/fallback-origin.ts">update</a>({ ...params }) -> FallbackOriginUpdateResponse</code>
- <code title="delete /zones/{zone_id}/custom_hostnames/fallback_origin">client.customHostnames.fallbackOrigin.<a href="./src/resources/custom-hostnames/fallback-origin.ts">delete</a>({ ...params }) -> FallbackOriginDeleteResponse</code>
- <code title="get /zones/{zone_id}/custom_hostnames/fallback_origin">client.customHostnames.fallbackOrigin.<a href="./src/resources/custom-hostnames/fallback-origin.ts">get</a>({ ...params }) -> FallbackOriginGetResponse</code>

## CertificatePack

### Certificates

Types:

- <code><a href="./src/resources/custom-hostnames/certificate-pack/certificates.ts">CertificateUpdateResponse</a></code>
- <code><a href="./src/resources/custom-hostnames/certificate-pack/certificates.ts">CertificateDeleteResponse</a></code>

Methods:

- <code title="put /zones/{zone_id}/custom_hostnames/{custom_hostname_id}/certificate_pack/{certificate_pack_id}/certificates/{certificate_id}">client.customHostnames.certificatePack.certificates.<a href="./src/resources/custom-hostnames/certificate-pack/certificates.ts">update</a>(customHostnameId, certificatePackId, certificateId, { ...params }) -> CertificateUpdateResponse</code>
- <code title="delete /zones/{zone_id}/custom_hostnames/{custom_hostname_id}/certificate_pack/{certificate_pack_id}/certificates/{certificate_id}">client.customHostnames.certificatePack.certificates.<a href="./src/resources/custom-hostnames/certificate-pack/certificates.ts">delete</a>(customHostnameId, certificatePackId, certificateId, { ...params }) -> CertificateDeleteResponse</code>

# CustomNameservers

Types:

- <code><a href="./src/resources/custom-nameservers.ts">CustomNameserver</a></code>
- <code><a href="./src/resources/custom-nameservers.ts">CustomNameserverDeleteResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/custom_ns">client.customNameservers.<a href="./src/resources/custom-nameservers.ts">create</a>({ ...params }) -> CustomNameserver</code>
- <code title="delete /accounts/{account_id}/custom_ns/{custom_ns_id}">client.customNameservers.<a href="./src/resources/custom-nameservers.ts">delete</a>(customNSId, { ...params }) -> CustomNameserverDeleteResponsesSinglePage</code>
- <code title="get /accounts/{account_id}/custom_ns">client.customNameservers.<a href="./src/resources/custom-nameservers.ts">get</a>({ ...params }) -> CustomNameserversSinglePage</code>

# DNSFirewall

Types:

- <code><a href="./src/resources/dns-firewall/dns-firewall.ts">AttackMitigation</a></code>
- <code><a href="./src/resources/dns-firewall/dns-firewall.ts">FirewallIPs</a></code>
- <code><a href="./src/resources/dns-firewall/dns-firewall.ts">UpstreamIPs</a></code>
- <code><a href="./src/resources/dns-firewall/dns-firewall.ts">DNSFirewallCreateResponse</a></code>
- <code><a href="./src/resources/dns-firewall/dns-firewall.ts">DNSFirewallListResponse</a></code>
- <code><a href="./src/resources/dns-firewall/dns-firewall.ts">DNSFirewallDeleteResponse</a></code>
- <code><a href="./src/resources/dns-firewall/dns-firewall.ts">DNSFirewallEditResponse</a></code>
- <code><a href="./src/resources/dns-firewall/dns-firewall.ts">DNSFirewallGetResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/dns_firewall">client.dnsFirewall.<a href="./src/resources/dns-firewall/dns-firewall.ts">create</a>({ ...params }) -> DNSFirewallCreateResponse</code>
- <code title="get /accounts/{account_id}/dns_firewall">client.dnsFirewall.<a href="./src/resources/dns-firewall/dns-firewall.ts">list</a>({ ...params }) -> DNSFirewallListResponsesV4PagePaginationArray</code>
- <code title="delete /accounts/{account_id}/dns_firewall/{dns_firewall_id}">client.dnsFirewall.<a href="./src/resources/dns-firewall/dns-firewall.ts">delete</a>(dnsFirewallId, { ...params }) -> DNSFirewallDeleteResponse</code>
- <code title="patch /accounts/{account_id}/dns_firewall/{dns_firewall_id}">client.dnsFirewall.<a href="./src/resources/dns-firewall/dns-firewall.ts">edit</a>(dnsFirewallId, { ...params }) -> DNSFirewallEditResponse</code>
- <code title="get /accounts/{account_id}/dns_firewall/{dns_firewall_id}">client.dnsFirewall.<a href="./src/resources/dns-firewall/dns-firewall.ts">get</a>(dnsFirewallId, { ...params }) -> DNSFirewallGetResponse</code>

## Analytics

### Reports

Methods:

- <code title="get /accounts/{account_id}/dns_firewall/{dns_firewall_id}/dns_analytics/report">client.dnsFirewall.analytics.reports.<a href="./src/resources/dns-firewall/analytics/reports/reports.ts">get</a>(dnsFirewallId, { ...params }) -> Report</code>

#### Bytimes

Methods:

- <code title="get /accounts/{account_id}/dns_firewall/{dns_firewall_id}/dns_analytics/report/bytime">client.dnsFirewall.analytics.reports.bytimes.<a href="./src/resources/dns-firewall/analytics/reports/bytimes.ts">get</a>(dnsFirewallId, { ...params }) -> ByTime</code>

## ReverseDNS

Types:

- <code><a href="./src/resources/dns-firewall/reverse-dns.ts">ReverseDNSEditResponse</a></code>
- <code><a href="./src/resources/dns-firewall/reverse-dns.ts">ReverseDNSGetResponse</a></code>

Methods:

- <code title="patch /accounts/{account_id}/dns_firewall/{dns_firewall_id}/reverse_dns">client.dnsFirewall.reverseDNS.<a href="./src/resources/dns-firewall/reverse-dns.ts">edit</a>(dnsFirewallId, { ...params }) -> ReverseDNSEditResponse</code>
- <code title="get /accounts/{account_id}/dns_firewall/{dns_firewall_id}/reverse_dns">client.dnsFirewall.reverseDNS.<a href="./src/resources/dns-firewall/reverse-dns.ts">get</a>(dnsFirewallId, { ...params }) -> ReverseDNSGetResponse</code>

# DNS

Types:

- <code><a href="./src/resources/dns/dns.ts">DNSAnalyticsNominalMetric</a></code>
- <code><a href="./src/resources/dns/dns.ts">DNSAnalyticsQuery</a></code>

## DNSSEC

Types:

- <code><a href="./src/resources/dns/dnssec.ts">DNSSEC</a></code>
- <code><a href="./src/resources/dns/dnssec.ts">DNSSECDeleteResponse</a></code>

Methods:

- <code title="delete /zones/{zone_id}/dnssec">client.dns.dnssec.<a href="./src/resources/dns/dnssec.ts">delete</a>({ ...params }) -> DNSSECDeleteResponse</code>
- <code title="patch /zones/{zone_id}/dnssec">client.dns.dnssec.<a href="./src/resources/dns/dnssec.ts">edit</a>({ ...params }) -> DNSSEC</code>
- <code title="get /zones/{zone_id}/dnssec">client.dns.dnssec.<a href="./src/resources/dns/dnssec.ts">get</a>({ ...params }) -> DNSSEC</code>

## Records

Types:

- <code><a href="./src/resources/dns/records.ts">ARecord</a></code>
- <code><a href="./src/resources/dns/records.ts">AAAARecord</a></code>
- <code><a href="./src/resources/dns/records.ts">BatchPatch</a></code>
- <code><a href="./src/resources/dns/records.ts">BatchPut</a></code>
- <code><a href="./src/resources/dns/records.ts">CAARecord</a></code>
- <code><a href="./src/resources/dns/records.ts">CERTRecord</a></code>
- <code><a href="./src/resources/dns/records.ts">CNAMERecord</a></code>
- <code><a href="./src/resources/dns/records.ts">DNSKEYRecord</a></code>
- <code><a href="./src/resources/dns/records.ts">DSRecord</a></code>
- <code><a href="./src/resources/dns/records.ts">HTTPSRecord</a></code>
- <code><a href="./src/resources/dns/records.ts">LOCRecord</a></code>
- <code><a href="./src/resources/dns/records.ts">MXRecord</a></code>
- <code><a href="./src/resources/dns/records.ts">NAPTRRecord</a></code>
- <code><a href="./src/resources/dns/records.ts">NSRecord</a></code>
- <code><a href="./src/resources/dns/records.ts">PTRRecord</a></code>
- <code><a href="./src/resources/dns/records.ts">Record</a></code>
- <code><a href="./src/resources/dns/records.ts">RecordResponse</a></code>
- <code><a href="./src/resources/dns/records.ts">RecordTags</a></code>
- <code><a href="./src/resources/dns/records.ts">SMIMEARecord</a></code>
- <code><a href="./src/resources/dns/records.ts">SRVRecord</a></code>
- <code><a href="./src/resources/dns/records.ts">SSHFPRecord</a></code>
- <code><a href="./src/resources/dns/records.ts">SVCBRecord</a></code>
- <code><a href="./src/resources/dns/records.ts">TLSARecord</a></code>
- <code><a href="./src/resources/dns/records.ts">TTL</a></code>
- <code><a href="./src/resources/dns/records.ts">TXTRecord</a></code>
- <code><a href="./src/resources/dns/records.ts">URIRecord</a></code>
- <code><a href="./src/resources/dns/records.ts">RecordDeleteResponse</a></code>
- <code><a href="./src/resources/dns/records.ts">RecordBatchResponse</a></code>
- <code><a href="./src/resources/dns/records.ts">RecordExportResponse</a></code>
- <code><a href="./src/resources/dns/records.ts">RecordImportResponse</a></code>
- <code><a href="./src/resources/dns/records.ts">RecordScanResponse</a></code>

Methods:

- <code title="post /zones/{zone_id}/dns_records">client.dns.records.<a href="./src/resources/dns/records.ts">create</a>({ ...params }) -> RecordResponse</code>
- <code title="put /zones/{zone_id}/dns_records/{dns_record_id}">client.dns.records.<a href="./src/resources/dns/records.ts">update</a>(dnsRecordId, { ...params }) -> RecordResponse</code>
- <code title="get /zones/{zone_id}/dns_records">client.dns.records.<a href="./src/resources/dns/records.ts">list</a>({ ...params }) -> RecordResponsesV4PagePaginationArray</code>
- <code title="delete /zones/{zone_id}/dns_records/{dns_record_id}">client.dns.records.<a href="./src/resources/dns/records.ts">delete</a>(dnsRecordId, { ...params }) -> RecordDeleteResponse</code>
- <code title="post /zones/{zone_id}/dns_records/batch">client.dns.records.<a href="./src/resources/dns/records.ts">batch</a>({ ...params }) -> RecordBatchResponse</code>
- <code title="patch /zones/{zone_id}/dns_records/{dns_record_id}">client.dns.records.<a href="./src/resources/dns/records.ts">edit</a>(dnsRecordId, { ...params }) -> RecordResponse</code>
- <code title="get /zones/{zone_id}/dns_records/export">client.dns.records.<a href="./src/resources/dns/records.ts">export</a>({ ...params }) -> string</code>
- <code title="get /zones/{zone_id}/dns_records/{dns_record_id}">client.dns.records.<a href="./src/resources/dns/records.ts">get</a>(dnsRecordId, { ...params }) -> RecordResponse</code>
- <code title="post /zones/{zone_id}/dns_records/import">client.dns.records.<a href="./src/resources/dns/records.ts">import</a>({ ...params }) -> RecordImportResponse</code>
- <code title="post /zones/{zone_id}/dns_records/scan">client.dns.records.<a href="./src/resources/dns/records.ts">scan</a>({ ...params }) -> RecordScanResponse</code>

## Settings

Types:

- <code><a href="./src/resources/dns/settings/settings.ts">DNSSetting</a></code>

### Zone

Types:

- <code><a href="./src/resources/dns/settings/zone.ts">ZoneEditResponse</a></code>
- <code><a href="./src/resources/dns/settings/zone.ts">ZoneGetResponse</a></code>

Methods:

- <code title="patch /zones/{zone_id}/dns_settings">client.dns.settings.zone.<a href="./src/resources/dns/settings/zone.ts">edit</a>({ ...params }) -> ZoneEditResponse</code>
- <code title="get /zones/{zone_id}/dns_settings">client.dns.settings.zone.<a href="./src/resources/dns/settings/zone.ts">get</a>({ ...params }) -> ZoneGetResponse</code>

### Account

Types:

- <code><a href="./src/resources/dns/settings/account/account.ts">AccountEditResponse</a></code>
- <code><a href="./src/resources/dns/settings/account/account.ts">AccountGetResponse</a></code>

Methods:

- <code title="patch /accounts/{account_id}/dns_settings">client.dns.settings.account.<a href="./src/resources/dns/settings/account/account.ts">edit</a>({ ...params }) -> AccountEditResponse</code>
- <code title="get /accounts/{account_id}/dns_settings">client.dns.settings.account.<a href="./src/resources/dns/settings/account/account.ts">get</a>({ ...params }) -> AccountGetResponse</code>

#### Views

Types:

- <code><a href="./src/resources/dns/settings/account/views.ts">ViewCreateResponse</a></code>
- <code><a href="./src/resources/dns/settings/account/views.ts">ViewListResponse</a></code>
- <code><a href="./src/resources/dns/settings/account/views.ts">ViewDeleteResponse</a></code>
- <code><a href="./src/resources/dns/settings/account/views.ts">ViewEditResponse</a></code>
- <code><a href="./src/resources/dns/settings/account/views.ts">ViewGetResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/dns_settings/views">client.dns.settings.account.views.<a href="./src/resources/dns/settings/account/views.ts">create</a>({ ...params }) -> ViewCreateResponse</code>
- <code title="get /accounts/{account_id}/dns_settings/views">client.dns.settings.account.views.<a href="./src/resources/dns/settings/account/views.ts">list</a>({ ...params }) -> ViewListResponsesV4PagePaginationArray</code>
- <code title="delete /accounts/{account_id}/dns_settings/views/{view_id}">client.dns.settings.account.views.<a href="./src/resources/dns/settings/account/views.ts">delete</a>(viewId, { ...params }) -> ViewDeleteResponse</code>
- <code title="patch /accounts/{account_id}/dns_settings/views/{view_id}">client.dns.settings.account.views.<a href="./src/resources/dns/settings/account/views.ts">edit</a>(viewId, { ...params }) -> ViewEditResponse</code>
- <code title="get /accounts/{account_id}/dns_settings/views/{view_id}">client.dns.settings.account.views.<a href="./src/resources/dns/settings/account/views.ts">get</a>(viewId, { ...params }) -> ViewGetResponse</code>

## Analytics

### Reports

Types:

- <code><a href="./src/resources/dns/analytics/reports/reports.ts">Report</a></code>

Methods:

- <code title="get /zones/{zone_id}/dns_analytics/report">client.dns.analytics.reports.<a href="./src/resources/dns/analytics/reports/reports.ts">get</a>({ ...params }) -> Report</code>

#### Bytimes

Types:

- <code><a href="./src/resources/dns/analytics/reports/bytimes.ts">ByTime</a></code>

Methods:

- <code title="get /zones/{zone_id}/dns_analytics/report/bytime">client.dns.analytics.reports.bytimes.<a href="./src/resources/dns/analytics/reports/bytimes.ts">get</a>({ ...params }) -> ByTime</code>

## ZoneTransfers

### ForceAXFR

Types:

- <code><a href="./src/resources/dns/zone-transfers/force-axfr.ts">ForceAXFR</a></code>

Methods:

- <code title="post /zones/{zone_id}/secondary_dns/force_axfr">client.dns.zoneTransfers.forceAXFR.<a href="./src/resources/dns/zone-transfers/force-axfr.ts">create</a>({ ...params }) -> ForceAXFR</code>

### Incoming

Types:

- <code><a href="./src/resources/dns/zone-transfers/incoming.ts">Incoming</a></code>
- <code><a href="./src/resources/dns/zone-transfers/incoming.ts">IncomingCreateResponse</a></code>
- <code><a href="./src/resources/dns/zone-transfers/incoming.ts">IncomingUpdateResponse</a></code>
- <code><a href="./src/resources/dns/zone-transfers/incoming.ts">IncomingDeleteResponse</a></code>
- <code><a href="./src/resources/dns/zone-transfers/incoming.ts">IncomingGetResponse</a></code>

Methods:

- <code title="post /zones/{zone_id}/secondary_dns/incoming">client.dns.zoneTransfers.incoming.<a href="./src/resources/dns/zone-transfers/incoming.ts">create</a>({ ...params }) -> IncomingCreateResponse</code>
- <code title="put /zones/{zone_id}/secondary_dns/incoming">client.dns.zoneTransfers.incoming.<a href="./src/resources/dns/zone-transfers/incoming.ts">update</a>({ ...params }) -> IncomingUpdateResponse</code>
- <code title="delete /zones/{zone_id}/secondary_dns/incoming">client.dns.zoneTransfers.incoming.<a href="./src/resources/dns/zone-transfers/incoming.ts">delete</a>({ ...params }) -> IncomingDeleteResponse</code>
- <code title="get /zones/{zone_id}/secondary_dns/incoming">client.dns.zoneTransfers.incoming.<a href="./src/resources/dns/zone-transfers/incoming.ts">get</a>({ ...params }) -> IncomingGetResponse</code>

### Outgoing

Types:

- <code><a href="./src/resources/dns/zone-transfers/outgoing/outgoing.ts">DisableTransfer</a></code>
- <code><a href="./src/resources/dns/zone-transfers/outgoing/outgoing.ts">EnableTransfer</a></code>
- <code><a href="./src/resources/dns/zone-transfers/outgoing/outgoing.ts">Outgoing</a></code>
- <code><a href="./src/resources/dns/zone-transfers/outgoing/outgoing.ts">OutgoingStatus</a></code>
- <code><a href="./src/resources/dns/zone-transfers/outgoing/outgoing.ts">OutgoingCreateResponse</a></code>
- <code><a href="./src/resources/dns/zone-transfers/outgoing/outgoing.ts">OutgoingUpdateResponse</a></code>
- <code><a href="./src/resources/dns/zone-transfers/outgoing/outgoing.ts">OutgoingDeleteResponse</a></code>
- <code><a href="./src/resources/dns/zone-transfers/outgoing/outgoing.ts">OutgoingForceNotifyResponse</a></code>
- <code><a href="./src/resources/dns/zone-transfers/outgoing/outgoing.ts">OutgoingGetResponse</a></code>

Methods:

- <code title="post /zones/{zone_id}/secondary_dns/outgoing">client.dns.zoneTransfers.outgoing.<a href="./src/resources/dns/zone-transfers/outgoing/outgoing.ts">create</a>({ ...params }) -> OutgoingCreateResponse</code>
- <code title="put /zones/{zone_id}/secondary_dns/outgoing">client.dns.zoneTransfers.outgoing.<a href="./src/resources/dns/zone-transfers/outgoing/outgoing.ts">update</a>({ ...params }) -> OutgoingUpdateResponse</code>
- <code title="delete /zones/{zone_id}/secondary_dns/outgoing">client.dns.zoneTransfers.outgoing.<a href="./src/resources/dns/zone-transfers/outgoing/outgoing.ts">delete</a>({ ...params }) -> OutgoingDeleteResponse</code>
- <code title="post /zones/{zone_id}/secondary_dns/outgoing/disable">client.dns.zoneTransfers.outgoing.<a href="./src/resources/dns/zone-transfers/outgoing/outgoing.ts">disable</a>({ ...params }) -> DisableTransfer</code>
- <code title="post /zones/{zone_id}/secondary_dns/outgoing/enable">client.dns.zoneTransfers.outgoing.<a href="./src/resources/dns/zone-transfers/outgoing/outgoing.ts">enable</a>({ ...params }) -> EnableTransfer</code>
- <code title="post /zones/{zone_id}/secondary_dns/outgoing/force_notify">client.dns.zoneTransfers.outgoing.<a href="./src/resources/dns/zone-transfers/outgoing/outgoing.ts">forceNotify</a>({ ...params }) -> OutgoingForceNotifyResponse</code>
- <code title="get /zones/{zone_id}/secondary_dns/outgoing">client.dns.zoneTransfers.outgoing.<a href="./src/resources/dns/zone-transfers/outgoing/outgoing.ts">get</a>({ ...params }) -> OutgoingGetResponse</code>

#### Status

Methods:

- <code title="get /zones/{zone_id}/secondary_dns/outgoing/status">client.dns.zoneTransfers.outgoing.status.<a href="./src/resources/dns/zone-transfers/outgoing/status.ts">get</a>({ ...params }) -> EnableTransfer</code>

### ACLs

Types:

- <code><a href="./src/resources/dns/zone-transfers/acls.ts">ACL</a></code>
- <code><a href="./src/resources/dns/zone-transfers/acls.ts">ACLDeleteResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/secondary_dns/acls">client.dns.zoneTransfers.acls.<a href="./src/resources/dns/zone-transfers/acls.ts">create</a>({ ...params }) -> ACL</code>
- <code title="put /accounts/{account_id}/secondary_dns/acls/{acl_id}">client.dns.zoneTransfers.acls.<a href="./src/resources/dns/zone-transfers/acls.ts">update</a>(aclId, { ...params }) -> ACL</code>
- <code title="get /accounts/{account_id}/secondary_dns/acls">client.dns.zoneTransfers.acls.<a href="./src/resources/dns/zone-transfers/acls.ts">list</a>({ ...params }) -> ACLsSinglePage</code>
- <code title="delete /accounts/{account_id}/secondary_dns/acls/{acl_id}">client.dns.zoneTransfers.acls.<a href="./src/resources/dns/zone-transfers/acls.ts">delete</a>(aclId, { ...params }) -> ACLDeleteResponse</code>
- <code title="get /accounts/{account_id}/secondary_dns/acls/{acl_id}">client.dns.zoneTransfers.acls.<a href="./src/resources/dns/zone-transfers/acls.ts">get</a>(aclId, { ...params }) -> ACL</code>

### Peers

Types:

- <code><a href="./src/resources/dns/zone-transfers/peers.ts">Peer</a></code>
- <code><a href="./src/resources/dns/zone-transfers/peers.ts">PeerDeleteResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/secondary_dns/peers">client.dns.zoneTransfers.peers.<a href="./src/resources/dns/zone-transfers/peers.ts">create</a>({ ...params }) -> Peer</code>
- <code title="put /accounts/{account_id}/secondary_dns/peers/{peer_id}">client.dns.zoneTransfers.peers.<a href="./src/resources/dns/zone-transfers/peers.ts">update</a>(peerId, { ...params }) -> Peer</code>
- <code title="get /accounts/{account_id}/secondary_dns/peers">client.dns.zoneTransfers.peers.<a href="./src/resources/dns/zone-transfers/peers.ts">list</a>({ ...params }) -> PeersSinglePage</code>
- <code title="delete /accounts/{account_id}/secondary_dns/peers/{peer_id}">client.dns.zoneTransfers.peers.<a href="./src/resources/dns/zone-transfers/peers.ts">delete</a>(peerId, { ...params }) -> PeerDeleteResponse</code>
- <code title="get /accounts/{account_id}/secondary_dns/peers/{peer_id}">client.dns.zoneTransfers.peers.<a href="./src/resources/dns/zone-transfers/peers.ts">get</a>(peerId, { ...params }) -> Peer</code>

### TSIGs

Types:

- <code><a href="./src/resources/dns/zone-transfers/tsigs.ts">TSIG</a></code>
- <code><a href="./src/resources/dns/zone-transfers/tsigs.ts">TSIGDeleteResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/secondary_dns/tsigs">client.dns.zoneTransfers.tsigs.<a href="./src/resources/dns/zone-transfers/tsigs.ts">create</a>({ ...params }) -> TSIG</code>
- <code title="put /accounts/{account_id}/secondary_dns/tsigs/{tsig_id}">client.dns.zoneTransfers.tsigs.<a href="./src/resources/dns/zone-transfers/tsigs.ts">update</a>(tsigId, { ...params }) -> TSIG</code>
- <code title="get /accounts/{account_id}/secondary_dns/tsigs">client.dns.zoneTransfers.tsigs.<a href="./src/resources/dns/zone-transfers/tsigs.ts">list</a>({ ...params }) -> TSIGsSinglePage</code>
- <code title="delete /accounts/{account_id}/secondary_dns/tsigs/{tsig_id}">client.dns.zoneTransfers.tsigs.<a href="./src/resources/dns/zone-transfers/tsigs.ts">delete</a>(tsigId, { ...params }) -> TSIGDeleteResponse</code>
- <code title="get /accounts/{account_id}/secondary_dns/tsigs/{tsig_id}">client.dns.zoneTransfers.tsigs.<a href="./src/resources/dns/zone-transfers/tsigs.ts">get</a>(tsigId, { ...params }) -> TSIG</code>

# EmailSecurity

## Investigate

Types:

- <code><a href="./src/resources/email-security/investigate/investigate.ts">InvestigateListResponse</a></code>
- <code><a href="./src/resources/email-security/investigate/investigate.ts">InvestigateGetResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/email-security/investigate">client.emailSecurity.investigate.<a href="./src/resources/email-security/investigate/investigate.ts">list</a>({ ...params }) -> InvestigateListResponsesV4PagePaginationArray</code>
- <code title="get /accounts/{account_id}/email-security/investigate/{postfix_id}">client.emailSecurity.investigate.<a href="./src/resources/email-security/investigate/investigate.ts">get</a>(postfixId, { ...params }) -> InvestigateGetResponse</code>

### Detections

Types:

- <code><a href="./src/resources/email-security/investigate/detections.ts">DetectionGetResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/email-security/investigate/{postfix_id}/detections">client.emailSecurity.investigate.detections.<a href="./src/resources/email-security/investigate/detections.ts">get</a>(postfixId, { ...params }) -> DetectionGetResponse</code>

### Preview

Types:

- <code><a href="./src/resources/email-security/investigate/preview.ts">PreviewCreateResponse</a></code>
- <code><a href="./src/resources/email-security/investigate/preview.ts">PreviewGetResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/email-security/investigate/preview">client.emailSecurity.investigate.preview.<a href="./src/resources/email-security/investigate/preview.ts">create</a>({ ...params }) -> PreviewCreateResponse</code>
- <code title="get /accounts/{account_id}/email-security/investigate/{postfix_id}/preview">client.emailSecurity.investigate.preview.<a href="./src/resources/email-security/investigate/preview.ts">get</a>(postfixId, { ...params }) -> PreviewGetResponse</code>

### Raw

Types:

- <code><a href="./src/resources/email-security/investigate/raw.ts">RawGetResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/email-security/investigate/{postfix_id}/raw">client.emailSecurity.investigate.raw.<a href="./src/resources/email-security/investigate/raw.ts">get</a>(postfixId, { ...params }) -> RawGetResponse</code>

### Trace

Types:

- <code><a href="./src/resources/email-security/investigate/trace.ts">TraceGetResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/email-security/investigate/{postfix_id}/trace">client.emailSecurity.investigate.trace.<a href="./src/resources/email-security/investigate/trace.ts">get</a>(postfixId, { ...params }) -> TraceGetResponse</code>

### Move

Types:

- <code><a href="./src/resources/email-security/investigate/move.ts">MoveCreateResponse</a></code>
- <code><a href="./src/resources/email-security/investigate/move.ts">MoveBulkResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/email-security/investigate/{postfix_id}/move">client.emailSecurity.investigate.move.<a href="./src/resources/email-security/investigate/move.ts">create</a>(postfixId, { ...params }) -> MoveCreateResponsesSinglePage</code>
- <code title="post /accounts/{account_id}/email-security/investigate/move">client.emailSecurity.investigate.move.<a href="./src/resources/email-security/investigate/move.ts">bulk</a>({ ...params }) -> MoveBulkResponsesSinglePage</code>

### Reclassify

Types:

- <code><a href="./src/resources/email-security/investigate/reclassify.ts">ReclassifyCreateResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/email-security/investigate/{postfix_id}/reclassify">client.emailSecurity.investigate.reclassify.<a href="./src/resources/email-security/investigate/reclassify.ts">create</a>(postfixId, { ...params }) -> ReclassifyCreateResponse</code>

### Release

Types:

- <code><a href="./src/resources/email-security/investigate/release.ts">ReleaseBulkResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/email-security/investigate/release">client.emailSecurity.investigate.release.<a href="./src/resources/email-security/investigate/release.ts">bulk</a>([ ...body ]) -> ReleaseBulkResponsesSinglePage</code>

## Settings

### AllowPolicies

Types:

- <code><a href="./src/resources/email-security/settings/allow-policies.ts">AllowPolicyCreateResponse</a></code>
- <code><a href="./src/resources/email-security/settings/allow-policies.ts">AllowPolicyListResponse</a></code>
- <code><a href="./src/resources/email-security/settings/allow-policies.ts">AllowPolicyDeleteResponse</a></code>
- <code><a href="./src/resources/email-security/settings/allow-policies.ts">AllowPolicyEditResponse</a></code>
- <code><a href="./src/resources/email-security/settings/allow-policies.ts">AllowPolicyGetResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/email-security/settings/allow_policies">client.emailSecurity.settings.allowPolicies.<a href="./src/resources/email-security/settings/allow-policies.ts">create</a>({ ...params }) -> AllowPolicyCreateResponse</code>
- <code title="get /accounts/{account_id}/email-security/settings/allow_policies">client.emailSecurity.settings.allowPolicies.<a href="./src/resources/email-security/settings/allow-policies.ts">list</a>({ ...params }) -> AllowPolicyListResponsesV4PagePaginationArray</code>
- <code title="delete /accounts/{account_id}/email-security/settings/allow_policies/{policy_id}">client.emailSecurity.settings.allowPolicies.<a href="./src/resources/email-security/settings/allow-policies.ts">delete</a>(policyId, { ...params }) -> AllowPolicyDeleteResponse</code>
- <code title="patch /accounts/{account_id}/email-security/settings/allow_policies/{policy_id}">client.emailSecurity.settings.allowPolicies.<a href="./src/resources/email-security/settings/allow-policies.ts">edit</a>(policyId, { ...params }) -> AllowPolicyEditResponse</code>
- <code title="get /accounts/{account_id}/email-security/settings/allow_policies/{policy_id}">client.emailSecurity.settings.allowPolicies.<a href="./src/resources/email-security/settings/allow-policies.ts">get</a>(policyId, { ...params }) -> AllowPolicyGetResponse</code>

### BlockSenders

Types:

- <code><a href="./src/resources/email-security/settings/block-senders.ts">BlockSenderCreateResponse</a></code>
- <code><a href="./src/resources/email-security/settings/block-senders.ts">BlockSenderListResponse</a></code>
- <code><a href="./src/resources/email-security/settings/block-senders.ts">BlockSenderDeleteResponse</a></code>
- <code><a href="./src/resources/email-security/settings/block-senders.ts">BlockSenderEditResponse</a></code>
- <code><a href="./src/resources/email-security/settings/block-senders.ts">BlockSenderGetResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/email-security/settings/block_senders">client.emailSecurity.settings.blockSenders.<a href="./src/resources/email-security/settings/block-senders.ts">create</a>({ ...params }) -> BlockSenderCreateResponse</code>
- <code title="get /accounts/{account_id}/email-security/settings/block_senders">client.emailSecurity.settings.blockSenders.<a href="./src/resources/email-security/settings/block-senders.ts">list</a>({ ...params }) -> BlockSenderListResponsesV4PagePaginationArray</code>
- <code title="delete /accounts/{account_id}/email-security/settings/block_senders/{pattern_id}">client.emailSecurity.settings.blockSenders.<a href="./src/resources/email-security/settings/block-senders.ts">delete</a>(patternId, { ...params }) -> BlockSenderDeleteResponse</code>
- <code title="patch /accounts/{account_id}/email-security/settings/block_senders/{pattern_id}">client.emailSecurity.settings.blockSenders.<a href="./src/resources/email-security/settings/block-senders.ts">edit</a>(patternId, { ...params }) -> BlockSenderEditResponse</code>
- <code title="get /accounts/{account_id}/email-security/settings/block_senders/{pattern_id}">client.emailSecurity.settings.blockSenders.<a href="./src/resources/email-security/settings/block-senders.ts">get</a>(patternId, { ...params }) -> BlockSenderGetResponse</code>

### Domains

Types:

- <code><a href="./src/resources/email-security/settings/domains.ts">DomainListResponse</a></code>
- <code><a href="./src/resources/email-security/settings/domains.ts">DomainDeleteResponse</a></code>
- <code><a href="./src/resources/email-security/settings/domains.ts">DomainBulkDeleteResponse</a></code>
- <code><a href="./src/resources/email-security/settings/domains.ts">DomainEditResponse</a></code>
- <code><a href="./src/resources/email-security/settings/domains.ts">DomainGetResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/email-security/settings/domains">client.emailSecurity.settings.domains.<a href="./src/resources/email-security/settings/domains.ts">list</a>({ ...params }) -> DomainListResponsesV4PagePaginationArray</code>
- <code title="delete /accounts/{account_id}/email-security/settings/domains/{domain_id}">client.emailSecurity.settings.domains.<a href="./src/resources/email-security/settings/domains.ts">delete</a>(domainId, { ...params }) -> DomainDeleteResponse</code>
- <code title="delete /accounts/{account_id}/email-security/settings/domains">client.emailSecurity.settings.domains.<a href="./src/resources/email-security/settings/domains.ts">bulkDelete</a>({ ...params }) -> DomainBulkDeleteResponsesSinglePage</code>
- <code title="patch /accounts/{account_id}/email-security/settings/domains/{domain_id}">client.emailSecurity.settings.domains.<a href="./src/resources/email-security/settings/domains.ts">edit</a>(domainId, { ...params }) -> DomainEditResponse</code>
- <code title="get /accounts/{account_id}/email-security/settings/domains/{domain_id}">client.emailSecurity.settings.domains.<a href="./src/resources/email-security/settings/domains.ts">get</a>(domainId, { ...params }) -> DomainGetResponse</code>

### ImpersonationRegistry

Types:

- <code><a href="./src/resources/email-security/settings/impersonation-registry.ts">ImpersonationRegistryCreateResponse</a></code>
- <code><a href="./src/resources/email-security/settings/impersonation-registry.ts">ImpersonationRegistryListResponse</a></code>
- <code><a href="./src/resources/email-security/settings/impersonation-registry.ts">ImpersonationRegistryDeleteResponse</a></code>
- <code><a href="./src/resources/email-security/settings/impersonation-registry.ts">ImpersonationRegistryEditResponse</a></code>
- <code><a href="./src/resources/email-security/settings/impersonation-registry.ts">ImpersonationRegistryGetResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/email-security/settings/impersonation_registry">client.emailSecurity.settings.impersonationRegistry.<a href="./src/resources/email-security/settings/impersonation-registry.ts">create</a>({ ...params }) -> ImpersonationRegistryCreateResponse</code>
- <code title="get /accounts/{account_id}/email-security/settings/impersonation_registry">client.emailSecurity.settings.impersonationRegistry.<a href="./src/resources/email-security/settings/impersonation-registry.ts">list</a>({ ...params }) -> ImpersonationRegistryListResponsesV4PagePaginationArray</code>
- <code title="delete /accounts/{account_id}/email-security/settings/impersonation_registry/{display_name_id}">client.emailSecurity.settings.impersonationRegistry.<a href="./src/resources/email-security/settings/impersonation-registry.ts">delete</a>(displayNameId, { ...params }) -> ImpersonationRegistryDeleteResponse</code>
- <code title="patch /accounts/{account_id}/email-security/settings/impersonation_registry/{display_name_id}">client.emailSecurity.settings.impersonationRegistry.<a href="./src/resources/email-security/settings/impersonation-registry.ts">edit</a>(displayNameId, { ...params }) -> ImpersonationRegistryEditResponse</code>
- <code title="get /accounts/{account_id}/email-security/settings/impersonation_registry/{display_name_id}">client.emailSecurity.settings.impersonationRegistry.<a href="./src/resources/email-security/settings/impersonation-registry.ts">get</a>(displayNameId, { ...params }) -> ImpersonationRegistryGetResponse</code>

### TrustedDomains

Types:

- <code><a href="./src/resources/email-security/settings/trusted-domains.ts">TrustedDomainCreateResponse</a></code>
- <code><a href="./src/resources/email-security/settings/trusted-domains.ts">TrustedDomainListResponse</a></code>
- <code><a href="./src/resources/email-security/settings/trusted-domains.ts">TrustedDomainDeleteResponse</a></code>
- <code><a href="./src/resources/email-security/settings/trusted-domains.ts">TrustedDomainEditResponse</a></code>
- <code><a href="./src/resources/email-security/settings/trusted-domains.ts">TrustedDomainGetResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/email-security/settings/trusted_domains">client.emailSecurity.settings.trustedDomains.<a href="./src/resources/email-security/settings/trusted-domains.ts">create</a>({ ...params }) -> TrustedDomainCreateResponse</code>
- <code title="get /accounts/{account_id}/email-security/settings/trusted_domains">client.emailSecurity.settings.trustedDomains.<a href="./src/resources/email-security/settings/trusted-domains.ts">list</a>({ ...params }) -> TrustedDomainListResponsesV4PagePaginationArray</code>
- <code title="delete /accounts/{account_id}/email-security/settings/trusted_domains/{trusted_domain_id}">client.emailSecurity.settings.trustedDomains.<a href="./src/resources/email-security/settings/trusted-domains.ts">delete</a>(trustedDomainId, { ...params }) -> TrustedDomainDeleteResponse</code>
- <code title="patch /accounts/{account_id}/email-security/settings/trusted_domains/{trusted_domain_id}">client.emailSecurity.settings.trustedDomains.<a href="./src/resources/email-security/settings/trusted-domains.ts">edit</a>(trustedDomainId, { ...params }) -> TrustedDomainEditResponse</code>
- <code title="get /accounts/{account_id}/email-security/settings/trusted_domains/{trusted_domain_id}">client.emailSecurity.settings.trustedDomains.<a href="./src/resources/email-security/settings/trusted-domains.ts">get</a>(trustedDomainId, { ...params }) -> TrustedDomainGetResponse</code>

## Submissions

Types:

- <code><a href="./src/resources/email-security/submissions.ts">SubmissionListResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/email-security/submissions">client.emailSecurity.submissions.<a href="./src/resources/email-security/submissions.ts">list</a>({ ...params }) -> SubmissionListResponsesV4PagePaginationArray</code>

# EmailRouting

Types:

- <code><a href="./src/resources/email-routing/email-routing.ts">Settings</a></code>

Methods:

- <code title="post /zones/{zone_id}/email/routing/disable">client.emailRouting.<a href="./src/resources/email-routing/email-routing.ts">disable</a>({ ...params }) -> Settings</code>
- <code title="post /zones/{zone_id}/email/routing/enable">client.emailRouting.<a href="./src/resources/email-routing/email-routing.ts">enable</a>({ ...params }) -> Settings</code>
- <code title="get /zones/{zone_id}/email/routing">client.emailRouting.<a href="./src/resources/email-routing/email-routing.ts">get</a>({ ...params }) -> Settings</code>

## DNS

Types:

- <code><a href="./src/resources/email-routing/dns.ts">DNSRecord</a></code>
- <code><a href="./src/resources/email-routing/dns.ts">DNSGetResponse</a></code>

Methods:

- <code title="post /zones/{zone_id}/email/routing/dns">client.emailRouting.dns.<a href="./src/resources/email-routing/dns.ts">create</a>({ ...params }) -> Settings</code>
- <code title="delete /zones/{zone_id}/email/routing/dns">client.emailRouting.dns.<a href="./src/resources/email-routing/dns.ts">delete</a>({ ...params }) -> DNSRecordsSinglePage</code>
- <code title="patch /zones/{zone_id}/email/routing/dns">client.emailRouting.dns.<a href="./src/resources/email-routing/dns.ts">edit</a>({ ...params }) -> Settings</code>
- <code title="get /zones/{zone_id}/email/routing/dns">client.emailRouting.dns.<a href="./src/resources/email-routing/dns.ts">get</a>({ ...params }) -> DNSGetResponse</code>

## Rules

Types:

- <code><a href="./src/resources/email-routing/rules/rules.ts">Action</a></code>
- <code><a href="./src/resources/email-routing/rules/rules.ts">EmailRoutingRule</a></code>
- <code><a href="./src/resources/email-routing/rules/rules.ts">Matcher</a></code>

Methods:

- <code title="post /zones/{zone_id}/email/routing/rules">client.emailRouting.rules.<a href="./src/resources/email-routing/rules/rules.ts">create</a>({ ...params }) -> EmailRoutingRule</code>
- <code title="put /zones/{zone_id}/email/routing/rules/{rule_identifier}">client.emailRouting.rules.<a href="./src/resources/email-routing/rules/rules.ts">update</a>(ruleIdentifier, { ...params }) -> EmailRoutingRule</code>
- <code title="get /zones/{zone_id}/email/routing/rules">client.emailRouting.rules.<a href="./src/resources/email-routing/rules/rules.ts">list</a>({ ...params }) -> EmailRoutingRulesV4PagePaginationArray</code>
- <code title="delete /zones/{zone_id}/email/routing/rules/{rule_identifier}">client.emailRouting.rules.<a href="./src/resources/email-routing/rules/rules.ts">delete</a>(ruleIdentifier, { ...params }) -> EmailRoutingRule</code>
- <code title="get /zones/{zone_id}/email/routing/rules/{rule_identifier}">client.emailRouting.rules.<a href="./src/resources/email-routing/rules/rules.ts">get</a>(ruleIdentifier, { ...params }) -> EmailRoutingRule</code>

### CatchAlls

Types:

- <code><a href="./src/resources/email-routing/rules/catch-alls.ts">CatchAllAction</a></code>
- <code><a href="./src/resources/email-routing/rules/catch-alls.ts">CatchAllMatcher</a></code>
- <code><a href="./src/resources/email-routing/rules/catch-alls.ts">CatchAllUpdateResponse</a></code>
- <code><a href="./src/resources/email-routing/rules/catch-alls.ts">CatchAllGetResponse</a></code>

Methods:

- <code title="put /zones/{zone_id}/email/routing/rules/catch_all">client.emailRouting.rules.catchAlls.<a href="./src/resources/email-routing/rules/catch-alls.ts">update</a>({ ...params }) -> CatchAllUpdateResponse</code>
- <code title="get /zones/{zone_id}/email/routing/rules/catch_all">client.emailRouting.rules.catchAlls.<a href="./src/resources/email-routing/rules/catch-alls.ts">get</a>({ ...params }) -> CatchAllGetResponse</code>

## Addresses

Types:

- <code><a href="./src/resources/email-routing/addresses.ts">Address</a></code>

Methods:

- <code title="post /accounts/{account_id}/email/routing/addresses">client.emailRouting.addresses.<a href="./src/resources/email-routing/addresses.ts">create</a>({ ...params }) -> Address</code>
- <code title="get /accounts/{account_id}/email/routing/addresses">client.emailRouting.addresses.<a href="./src/resources/email-routing/addresses.ts">list</a>({ ...params }) -> AddressesV4PagePaginationArray</code>
- <code title="delete /accounts/{account_id}/email/routing/addresses/{destination_address_identifier}">client.emailRouting.addresses.<a href="./src/resources/email-routing/addresses.ts">delete</a>(destinationAddressIdentifier, { ...params }) -> Address</code>
- <code title="get /accounts/{account_id}/email/routing/addresses/{destination_address_identifier}">client.emailRouting.addresses.<a href="./src/resources/email-routing/addresses.ts">get</a>(destinationAddressIdentifier, { ...params }) -> Address</code>

# Filters

Types:

- <code><a href="./src/resources/filters.ts">FirewallFilter</a></code>

Methods:

- <code title="post /zones/{zone_id}/filters">client.filters.<a href="./src/resources/filters.ts">create</a>({ ...params }) -> FirewallFiltersSinglePage</code>
- <code title="put /zones/{zone_id}/filters/{filter_id}">client.filters.<a href="./src/resources/filters.ts">update</a>(filterId, { ...params }) -> FirewallFilter</code>
- <code title="get /zones/{zone_id}/filters">client.filters.<a href="./src/resources/filters.ts">list</a>({ ...params }) -> FirewallFiltersV4PagePaginationArray</code>
- <code title="delete /zones/{zone_id}/filters/{filter_id}">client.filters.<a href="./src/resources/filters.ts">delete</a>(filterId, { ...params }) -> FirewallFilter</code>
- <code title="delete /zones/{zone_id}/filters">client.filters.<a href="./src/resources/filters.ts">bulkDelete</a>({ ...params }) -> FirewallFiltersSinglePage</code>
- <code title="put /zones/{zone_id}/filters">client.filters.<a href="./src/resources/filters.ts">bulkUpdate</a>({ ...params }) -> FirewallFiltersSinglePage</code>
- <code title="get /zones/{zone_id}/filters/{filter_id}">client.filters.<a href="./src/resources/filters.ts">get</a>(filterId, { ...params }) -> FirewallFilter</code>

# Firewall

## Lockdowns

Types:

- <code><a href="./src/resources/firewall/lockdowns.ts">Configuration</a></code>
- <code><a href="./src/resources/firewall/lockdowns.ts">Lockdown</a></code>
- <code><a href="./src/resources/firewall/lockdowns.ts">LockdownCIDRConfiguration</a></code>
- <code><a href="./src/resources/firewall/lockdowns.ts">LockdownIPConfiguration</a></code>
- <code><a href="./src/resources/firewall/lockdowns.ts">LockdownURL</a></code>
- <code><a href="./src/resources/firewall/lockdowns.ts">LockdownDeleteResponse</a></code>

Methods:

- <code title="post /zones/{zone_id}/firewall/lockdowns">client.firewall.lockdowns.<a href="./src/resources/firewall/lockdowns.ts">create</a>({ ...params }) -> Lockdown</code>
- <code title="put /zones/{zone_id}/firewall/lockdowns/{lock_downs_id}">client.firewall.lockdowns.<a href="./src/resources/firewall/lockdowns.ts">update</a>(lockDownsId, { ...params }) -> Lockdown</code>
- <code title="get /zones/{zone_id}/firewall/lockdowns">client.firewall.lockdowns.<a href="./src/resources/firewall/lockdowns.ts">list</a>({ ...params }) -> LockdownsV4PagePaginationArray</code>
- <code title="delete /zones/{zone_id}/firewall/lockdowns/{lock_downs_id}">client.firewall.lockdowns.<a href="./src/resources/firewall/lockdowns.ts">delete</a>(lockDownsId, { ...params }) -> LockdownDeleteResponse</code>
- <code title="get /zones/{zone_id}/firewall/lockdowns/{lock_downs_id}">client.firewall.lockdowns.<a href="./src/resources/firewall/lockdowns.ts">get</a>(lockDownsId, { ...params }) -> Lockdown</code>

## Rules

Types:

- <code><a href="./src/resources/firewall/rules.ts">DeletedFilter</a></code>
- <code><a href="./src/resources/firewall/rules.ts">FirewallRule</a></code>
- <code><a href="./src/resources/firewall/rules.ts">Product</a></code>

Methods:

- <code title="post /zones/{zone_id}/firewall/rules">client.firewall.rules.<a href="./src/resources/firewall/rules.ts">create</a>({ ...params }) -> FirewallRulesSinglePage</code>
- <code title="put /zones/{zone_id}/firewall/rules/{rule_id}">client.firewall.rules.<a href="./src/resources/firewall/rules.ts">update</a>(ruleId, { ...params }) -> FirewallRule</code>
- <code title="get /zones/{zone_id}/firewall/rules">client.firewall.rules.<a href="./src/resources/firewall/rules.ts">list</a>({ ...params }) -> FirewallRulesV4PagePaginationArray</code>
- <code title="delete /zones/{zone_id}/firewall/rules/{rule_id}">client.firewall.rules.<a href="./src/resources/firewall/rules.ts">delete</a>(ruleId, { ...params }) -> FirewallRule</code>
- <code title="delete /zones/{zone_id}/firewall/rules">client.firewall.rules.<a href="./src/resources/firewall/rules.ts">bulkDelete</a>({ ...params }) -> FirewallRulesSinglePage</code>
- <code title="patch /zones/{zone_id}/firewall/rules">client.firewall.rules.<a href="./src/resources/firewall/rules.ts">bulkEdit</a>({ ...params }) -> FirewallRulesSinglePage</code>
- <code title="put /zones/{zone_id}/firewall/rules">client.firewall.rules.<a href="./src/resources/firewall/rules.ts">bulkUpdate</a>({ ...params }) -> FirewallRulesSinglePage</code>
- <code title="patch /zones/{zone_id}/firewall/rules/{rule_id}">client.firewall.rules.<a href="./src/resources/firewall/rules.ts">edit</a>(ruleId, { ...params }) -> FirewallRulesSinglePage</code>
- <code title="get /zones/{zone_id}/firewall/rules/{rule_id}">client.firewall.rules.<a href="./src/resources/firewall/rules.ts">get</a>(ruleId, { ...params }) -> FirewallRule</code>

## AccessRules

Types:

- <code><a href="./src/resources/firewall/access-rules.ts">AccessRuleCIDRConfiguration</a></code>
- <code><a href="./src/resources/firewall/access-rules.ts">AccessRuleIPConfiguration</a></code>
- <code><a href="./src/resources/firewall/access-rules.ts">ASNConfiguration</a></code>
- <code><a href="./src/resources/firewall/access-rules.ts">CountryConfiguration</a></code>
- <code><a href="./src/resources/firewall/access-rules.ts">IPV6Configuration</a></code>
- <code><a href="./src/resources/firewall/access-rules.ts">AccessRuleCreateResponse</a></code>
- <code><a href="./src/resources/firewall/access-rules.ts">AccessRuleListResponse</a></code>
- <code><a href="./src/resources/firewall/access-rules.ts">AccessRuleDeleteResponse</a></code>
- <code><a href="./src/resources/firewall/access-rules.ts">AccessRuleEditResponse</a></code>
- <code><a href="./src/resources/firewall/access-rules.ts">AccessRuleGetResponse</a></code>

Methods:

- <code title="post /{accounts_or_zones}/{account_or_zone_id}/firewall/access_rules/rules">client.firewall.accessRules.<a href="./src/resources/firewall/access-rules.ts">create</a>({ ...params }) -> AccessRuleCreateResponse</code>
- <code title="get /{accounts_or_zones}/{account_or_zone_id}/firewall/access_rules/rules">client.firewall.accessRules.<a href="./src/resources/firewall/access-rules.ts">list</a>({ ...params }) -> AccessRuleListResponsesV4PagePaginationArray</code>
- <code title="delete /{accounts_or_zones}/{account_or_zone_id}/firewall/access_rules/rules/{rule_id}">client.firewall.accessRules.<a href="./src/resources/firewall/access-rules.ts">delete</a>(ruleId, { ...params }) -> AccessRuleDeleteResponse | null</code>
- <code title="patch /{accounts_or_zones}/{account_or_zone_id}/firewall/access_rules/rules/{rule_id}">client.firewall.accessRules.<a href="./src/resources/firewall/access-rules.ts">edit</a>(ruleId, { ...params }) -> AccessRuleEditResponse</code>
- <code title="get /{accounts_or_zones}/{account_or_zone_id}/firewall/access_rules/rules/{rule_id}">client.firewall.accessRules.<a href="./src/resources/firewall/access-rules.ts">get</a>(ruleId, { ...params }) -> AccessRuleGetResponse</code>

## UARules

Types:

- <code><a href="./src/resources/firewall/ua-rules.ts">UARuleCreateResponse</a></code>
- <code><a href="./src/resources/firewall/ua-rules.ts">UARuleUpdateResponse</a></code>
- <code><a href="./src/resources/firewall/ua-rules.ts">UARuleListResponse</a></code>
- <code><a href="./src/resources/firewall/ua-rules.ts">UARuleDeleteResponse</a></code>
- <code><a href="./src/resources/firewall/ua-rules.ts">UARuleGetResponse</a></code>

Methods:

- <code title="post /zones/{zone_id}/firewall/ua_rules">client.firewall.uaRules.<a href="./src/resources/firewall/ua-rules.ts">create</a>({ ...params }) -> UARuleCreateResponse</code>
- <code title="put /zones/{zone_id}/firewall/ua_rules/{ua_rule_id}">client.firewall.uaRules.<a href="./src/resources/firewall/ua-rules.ts">update</a>(uaRuleId, { ...params }) -> UARuleUpdateResponse</code>
- <code title="get /zones/{zone_id}/firewall/ua_rules">client.firewall.uaRules.<a href="./src/resources/firewall/ua-rules.ts">list</a>({ ...params }) -> UARuleListResponsesV4PagePaginationArray</code>
- <code title="delete /zones/{zone_id}/firewall/ua_rules/{ua_rule_id}">client.firewall.uaRules.<a href="./src/resources/firewall/ua-rules.ts">delete</a>(uaRuleId, { ...params }) -> UARuleDeleteResponse</code>
- <code title="get /zones/{zone_id}/firewall/ua_rules/{ua_rule_id}">client.firewall.uaRules.<a href="./src/resources/firewall/ua-rules.ts">get</a>(uaRuleId, { ...params }) -> UARuleGetResponse</code>

## WAF

### Overrides

Types:

- <code><a href="./src/resources/firewall/waf/overrides.ts">Override</a></code>
- <code><a href="./src/resources/firewall/waf/overrides.ts">OverrideURL</a></code>
- <code><a href="./src/resources/firewall/waf/overrides.ts">RewriteAction</a></code>
- <code><a href="./src/resources/firewall/waf/overrides.ts">WAFRule</a></code>
- <code><a href="./src/resources/firewall/waf/overrides.ts">OverrideDeleteResponse</a></code>

Methods:

- <code title="post /zones/{zone_id}/firewall/waf/overrides">client.firewall.waf.overrides.<a href="./src/resources/firewall/waf/overrides.ts">create</a>({ ...params }) -> Override</code>
- <code title="put /zones/{zone_id}/firewall/waf/overrides/{overrides_id}">client.firewall.waf.overrides.<a href="./src/resources/firewall/waf/overrides.ts">update</a>(overridesId, { ...params }) -> Override</code>
- <code title="get /zones/{zone_id}/firewall/waf/overrides">client.firewall.waf.overrides.<a href="./src/resources/firewall/waf/overrides.ts">list</a>({ ...params }) -> OverridesV4PagePaginationArray</code>
- <code title="delete /zones/{zone_id}/firewall/waf/overrides/{overrides_id}">client.firewall.waf.overrides.<a href="./src/resources/firewall/waf/overrides.ts">delete</a>(overridesId, { ...params }) -> OverrideDeleteResponse</code>
- <code title="get /zones/{zone_id}/firewall/waf/overrides/{overrides_id}">client.firewall.waf.overrides.<a href="./src/resources/firewall/waf/overrides.ts">get</a>(overridesId, { ...params }) -> Override</code>

### Packages

Types:

- <code><a href="./src/resources/firewall/waf/packages/packages.ts">PackageListResponse</a></code>
- <code><a href="./src/resources/firewall/waf/packages/packages.ts">PackageGetResponse</a></code>

Methods:

- <code title="get /zones/{zone_id}/firewall/waf/packages">client.firewall.waf.packages.<a href="./src/resources/firewall/waf/packages/packages.ts">list</a>({ ...params }) -> PackageListResponsesV4PagePaginationArray</code>
- <code title="get /zones/{zone_id}/firewall/waf/packages/{package_id}">client.firewall.waf.packages.<a href="./src/resources/firewall/waf/packages/packages.ts">get</a>(packageId, { ...params }) -> PackageGetResponse</code>

#### Groups

Types:

- <code><a href="./src/resources/firewall/waf/packages/groups.ts">Group</a></code>
- <code><a href="./src/resources/firewall/waf/packages/groups.ts">GroupEditResponse</a></code>
- <code><a href="./src/resources/firewall/waf/packages/groups.ts">GroupGetResponse</a></code>

Methods:

- <code title="get /zones/{zone_id}/firewall/waf/packages/{package_id}/groups">client.firewall.waf.packages.groups.<a href="./src/resources/firewall/waf/packages/groups.ts">list</a>(packageId, { ...params }) -> GroupsV4PagePaginationArray</code>
- <code title="patch /zones/{zone_id}/firewall/waf/packages/{package_id}/groups/{group_id}">client.firewall.waf.packages.groups.<a href="./src/resources/firewall/waf/packages/groups.ts">edit</a>(packageId, groupId, { ...params }) -> GroupEditResponse</code>
- <code title="get /zones/{zone_id}/firewall/waf/packages/{package_id}/groups/{group_id}">client.firewall.waf.packages.groups.<a href="./src/resources/firewall/waf/packages/groups.ts">get</a>(packageId, groupId, { ...params }) -> GroupGetResponse</code>

#### Rules

Types:

- <code><a href="./src/resources/firewall/waf/packages/rules.ts">AllowedModesAnomaly</a></code>
- <code><a href="./src/resources/firewall/waf/packages/rules.ts">WAFRuleGroup</a></code>
- <code><a href="./src/resources/firewall/waf/packages/rules.ts">RuleListResponse</a></code>
- <code><a href="./src/resources/firewall/waf/packages/rules.ts">RuleEditResponse</a></code>
- <code><a href="./src/resources/firewall/waf/packages/rules.ts">RuleGetResponse</a></code>

Methods:

- <code title="get /zones/{zone_id}/firewall/waf/packages/{package_id}/rules">client.firewall.waf.packages.rules.<a href="./src/resources/firewall/waf/packages/rules.ts">list</a>(packageId, { ...params }) -> RuleListResponsesV4PagePaginationArray</code>
- <code title="patch /zones/{zone_id}/firewall/waf/packages/{package_id}/rules/{rule_id}">client.firewall.waf.packages.rules.<a href="./src/resources/firewall/waf/packages/rules.ts">edit</a>(packageId, ruleId, { ...params }) -> RuleEditResponse</code>
- <code title="get /zones/{zone_id}/firewall/waf/packages/{package_id}/rules/{rule_id}">client.firewall.waf.packages.rules.<a href="./src/resources/firewall/waf/packages/rules.ts">get</a>(packageId, ruleId, { ...params }) -> RuleGetResponse</code>

# Healthchecks

Types:

- <code><a href="./src/resources/healthchecks/healthchecks.ts">CheckRegion</a></code>
- <code><a href="./src/resources/healthchecks/healthchecks.ts">Healthcheck</a></code>
- <code><a href="./src/resources/healthchecks/healthchecks.ts">HTTPConfiguration</a></code>
- <code><a href="./src/resources/healthchecks/healthchecks.ts">QueryHealthcheck</a></code>
- <code><a href="./src/resources/healthchecks/healthchecks.ts">TCPConfiguration</a></code>
- <code><a href="./src/resources/healthchecks/healthchecks.ts">HealthcheckDeleteResponse</a></code>

Methods:

- <code title="post /zones/{zone_id}/healthchecks">client.healthchecks.<a href="./src/resources/healthchecks/healthchecks.ts">create</a>({ ...params }) -> Healthcheck</code>
- <code title="put /zones/{zone_id}/healthchecks/{healthcheck_id}">client.healthchecks.<a href="./src/resources/healthchecks/healthchecks.ts">update</a>(healthcheckId, { ...params }) -> Healthcheck</code>
- <code title="get /zones/{zone_id}/healthchecks">client.healthchecks.<a href="./src/resources/healthchecks/healthchecks.ts">list</a>({ ...params }) -> HealthchecksV4PagePaginationArray</code>
- <code title="delete /zones/{zone_id}/healthchecks/{healthcheck_id}">client.healthchecks.<a href="./src/resources/healthchecks/healthchecks.ts">delete</a>(healthcheckId, { ...params }) -> HealthcheckDeleteResponse</code>
- <code title="patch /zones/{zone_id}/healthchecks/{healthcheck_id}">client.healthchecks.<a href="./src/resources/healthchecks/healthchecks.ts">edit</a>(healthcheckId, { ...params }) -> Healthcheck</code>
- <code title="get /zones/{zone_id}/healthchecks/{healthcheck_id}">client.healthchecks.<a href="./src/resources/healthchecks/healthchecks.ts">get</a>(healthcheckId, { ...params }) -> Healthcheck</code>

## Previews

Types:

- <code><a href="./src/resources/healthchecks/previews.ts">PreviewDeleteResponse</a></code>

Methods:

- <code title="post /zones/{zone_id}/healthchecks/preview">client.healthchecks.previews.<a href="./src/resources/healthchecks/previews.ts">create</a>({ ...params }) -> Healthcheck</code>
- <code title="delete /zones/{zone_id}/healthchecks/preview/{healthcheck_id}">client.healthchecks.previews.<a href="./src/resources/healthchecks/previews.ts">delete</a>(healthcheckId, { ...params }) -> PreviewDeleteResponse</code>
- <code title="get /zones/{zone_id}/healthchecks/preview/{healthcheck_id}">client.healthchecks.previews.<a href="./src/resources/healthchecks/previews.ts">get</a>(healthcheckId, { ...params }) -> Healthcheck</code>

# KeylessCertificates

Types:

- <code><a href="./src/resources/keyless-certificates.ts">KeylessCertificate</a></code>
- <code><a href="./src/resources/keyless-certificates.ts">Tunnel</a></code>
- <code><a href="./src/resources/keyless-certificates.ts">KeylessCertificateDeleteResponse</a></code>

Methods:

- <code title="post /zones/{zone_id}/keyless_certificates">client.keylessCertificates.<a href="./src/resources/keyless-certificates.ts">create</a>({ ...params }) -> KeylessCertificate</code>
- <code title="get /zones/{zone_id}/keyless_certificates">client.keylessCertificates.<a href="./src/resources/keyless-certificates.ts">list</a>({ ...params }) -> KeylessCertificatesSinglePage</code>
- <code title="delete /zones/{zone_id}/keyless_certificates/{keyless_certificate_id}">client.keylessCertificates.<a href="./src/resources/keyless-certificates.ts">delete</a>(keylessCertificateId, { ...params }) -> KeylessCertificateDeleteResponse</code>
- <code title="patch /zones/{zone_id}/keyless_certificates/{keyless_certificate_id}">client.keylessCertificates.<a href="./src/resources/keyless-certificates.ts">edit</a>(keylessCertificateId, { ...params }) -> KeylessCertificate</code>
- <code title="get /zones/{zone_id}/keyless_certificates/{keyless_certificate_id}">client.keylessCertificates.<a href="./src/resources/keyless-certificates.ts">get</a>(keylessCertificateId, { ...params }) -> KeylessCertificate</code>

# Logpush

## Datasets

### Fields

Types:

- <code><a href="./src/resources/logpush/datasets/fields.ts">FieldGetResponse</a></code>

Methods:

- <code title="get /{accounts_or_zones}/{account_or_zone_id}/logpush/datasets/{dataset_id}/fields">client.logpush.datasets.fields.<a href="./src/resources/logpush/datasets/fields.ts">get</a>(datasetId, { ...params }) -> FieldGetResponse</code>

### Jobs

Methods:

- <code title="get /{accounts_or_zones}/{account_or_zone_id}/logpush/datasets/{dataset_id}/jobs">client.logpush.datasets.jobs.<a href="./src/resources/logpush/datasets/jobs.ts">get</a>(datasetId, { ...params }) -> LogpushJobsSinglePage</code>

## Edge

Types:

- <code><a href="./src/resources/logpush/edge.ts">InstantLogpushJob</a></code>

Methods:

- <code title="post /zones/{zone_id}/logpush/edge">client.logpush.edge.<a href="./src/resources/logpush/edge.ts">create</a>({ ...params }) -> InstantLogpushJob | null</code>
- <code title="get /zones/{zone_id}/logpush/edge">client.logpush.edge.<a href="./src/resources/logpush/edge.ts">get</a>({ ...params }) -> InstantLogpushJobsSinglePage</code>

## Jobs

Types:

- <code><a href="./src/resources/logpush/jobs.ts">LogpushJob</a></code>
- <code><a href="./src/resources/logpush/jobs.ts">OutputOptions</a></code>
- <code><a href="./src/resources/logpush/jobs.ts">JobDeleteResponse</a></code>

Methods:

- <code title="post /{accounts_or_zones}/{account_or_zone_id}/logpush/jobs">client.logpush.jobs.<a href="./src/resources/logpush/jobs.ts">create</a>({ ...params }) -> LogpushJob | null</code>
- <code title="put /{accounts_or_zones}/{account_or_zone_id}/logpush/jobs/{job_id}">client.logpush.jobs.<a href="./src/resources/logpush/jobs.ts">update</a>(jobId, { ...params }) -> LogpushJob | null</code>
- <code title="get /{accounts_or_zones}/{account_or_zone_id}/logpush/jobs">client.logpush.jobs.<a href="./src/resources/logpush/jobs.ts">list</a>({ ...params }) -> LogpushJobsSinglePage</code>
- <code title="delete /{accounts_or_zones}/{account_or_zone_id}/logpush/jobs/{job_id}">client.logpush.jobs.<a href="./src/resources/logpush/jobs.ts">delete</a>(jobId, { ...params }) -> JobDeleteResponse</code>
- <code title="get /{accounts_or_zones}/{account_or_zone_id}/logpush/jobs/{job_id}">client.logpush.jobs.<a href="./src/resources/logpush/jobs.ts">get</a>(jobId, { ...params }) -> LogpushJob | null</code>

## Ownership

Types:

- <code><a href="./src/resources/logpush/ownership.ts">OwnershipValidation</a></code>
- <code><a href="./src/resources/logpush/ownership.ts">OwnershipCreateResponse</a></code>

Methods:

- <code title="post /{accounts_or_zones}/{account_or_zone_id}/logpush/ownership">client.logpush.ownership.<a href="./src/resources/logpush/ownership.ts">create</a>({ ...params }) -> OwnershipCreateResponse | null</code>
- <code title="post /{accounts_or_zones}/{account_or_zone_id}/logpush/ownership/validate">client.logpush.ownership.<a href="./src/resources/logpush/ownership.ts">validate</a>({ ...params }) -> OwnershipValidation | null</code>

## Validate

Types:

- <code><a href="./src/resources/logpush/validate.ts">ValidateDestinationResponse</a></code>
- <code><a href="./src/resources/logpush/validate.ts">ValidateDestinationExistsResponse</a></code>
- <code><a href="./src/resources/logpush/validate.ts">ValidateOriginResponse</a></code>

Methods:

- <code title="post /{accounts_or_zones}/{account_or_zone_id}/logpush/validate/destination">client.logpush.validate.<a href="./src/resources/logpush/validate.ts">destination</a>({ ...params }) -> ValidateDestinationResponse | null</code>
- <code title="post /{accounts_or_zones}/{account_or_zone_id}/logpush/validate/destination/exists">client.logpush.validate.<a href="./src/resources/logpush/validate.ts">destinationExists</a>({ ...params }) -> ValidateDestinationExistsResponse | null</code>
- <code title="post /{accounts_or_zones}/{account_or_zone_id}/logpush/validate/origin">client.logpush.validate.<a href="./src/resources/logpush/validate.ts">origin</a>({ ...params }) -> ValidateOriginResponse | null</code>

# Logs

## Control

### Retention

Types:

- <code><a href="./src/resources/logs/control/retention.ts">RetentionCreateResponse</a></code>
- <code><a href="./src/resources/logs/control/retention.ts">RetentionGetResponse</a></code>

Methods:

- <code title="post /zones/{zone_id}/logs/control/retention/flag">client.logs.control.retention.<a href="./src/resources/logs/control/retention.ts">create</a>({ ...params }) -> RetentionCreateResponse | null</code>
- <code title="get /zones/{zone_id}/logs/control/retention/flag">client.logs.control.retention.<a href="./src/resources/logs/control/retention.ts">get</a>({ ...params }) -> RetentionGetResponse | null</code>

### Cmb

#### Config

Types:

- <code><a href="./src/resources/logs/control/cmb/config.ts">CmbConfig</a></code>
- <code><a href="./src/resources/logs/control/cmb/config.ts">ConfigDeleteResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/logs/control/cmb/config">client.logs.control.cmb.config.<a href="./src/resources/logs/control/cmb/config.ts">create</a>({ ...params }) -> CmbConfig | null</code>
- <code title="delete /accounts/{account_id}/logs/control/cmb/config">client.logs.control.cmb.config.<a href="./src/resources/logs/control/cmb/config.ts">delete</a>({ ...params }) -> ConfigDeleteResponse | null</code>
- <code title="get /accounts/{account_id}/logs/control/cmb/config">client.logs.control.cmb.config.<a href="./src/resources/logs/control/cmb/config.ts">get</a>({ ...params }) -> CmbConfig | null</code>

## RayID

Types:

- <code><a href="./src/resources/logs/rayid.ts">RayIDGetResponse</a></code>

Methods:

- <code title="get /zones/{zone_id}/logs/rayids/{ray_id}">client.logs.RayID.<a href="./src/resources/logs/rayid.ts">get</a>(RayID, { ...params }) -> RayIDGetResponse</code>

## Received

Types:

- <code><a href="./src/resources/logs/received/received.ts">ReceivedGetResponse</a></code>

Methods:

- <code title="get /zones/{zone_id}/logs/received">client.logs.received.<a href="./src/resources/logs/received/received.ts">get</a>({ ...params }) -> ReceivedGetResponse</code>

### Fields

Types:

- <code><a href="./src/resources/logs/received/fields.ts">FieldGetResponse</a></code>

Methods:

- <code title="get /zones/{zone_id}/logs/received/fields">client.logs.received.fields.<a href="./src/resources/logs/received/fields.ts">get</a>({ ...params }) -> FieldGetResponse</code>

# OriginTLSClientAuth

Types:

- <code><a href="./src/resources/origin-tls-client-auth/origin-tls-client-auth.ts">ZoneAuthenticatedOriginPull</a></code>
- <code><a href="./src/resources/origin-tls-client-auth/origin-tls-client-auth.ts">OriginTLSClientAuthCreateResponse</a></code>
- <code><a href="./src/resources/origin-tls-client-auth/origin-tls-client-auth.ts">OriginTLSClientAuthListResponse</a></code>
- <code><a href="./src/resources/origin-tls-client-auth/origin-tls-client-auth.ts">OriginTLSClientAuthDeleteResponse</a></code>
- <code><a href="./src/resources/origin-tls-client-auth/origin-tls-client-auth.ts">OriginTLSClientAuthGetResponse</a></code>

Methods:

- <code title="post /zones/{zone_id}/origin_tls_client_auth">client.originTLSClientAuth.<a href="./src/resources/origin-tls-client-auth/origin-tls-client-auth.ts">create</a>({ ...params }) -> OriginTLSClientAuthCreateResponse</code>
- <code title="get /zones/{zone_id}/origin_tls_client_auth">client.originTLSClientAuth.<a href="./src/resources/origin-tls-client-auth/origin-tls-client-auth.ts">list</a>({ ...params }) -> OriginTLSClientAuthListResponsesSinglePage</code>
- <code title="delete /zones/{zone_id}/origin_tls_client_auth/{certificate_id}">client.originTLSClientAuth.<a href="./src/resources/origin-tls-client-auth/origin-tls-client-auth.ts">delete</a>(certificateId, { ...params }) -> OriginTLSClientAuthDeleteResponse</code>
- <code title="get /zones/{zone_id}/origin_tls_client_auth/{certificate_id}">client.originTLSClientAuth.<a href="./src/resources/origin-tls-client-auth/origin-tls-client-auth.ts">get</a>(certificateId, { ...params }) -> OriginTLSClientAuthGetResponse</code>

## Hostnames

Types:

- <code><a href="./src/resources/origin-tls-client-auth/hostnames/hostnames.ts">AuthenticatedOriginPull</a></code>
- <code><a href="./src/resources/origin-tls-client-auth/hostnames/hostnames.ts">HostnameUpdateResponse</a></code>

Methods:

- <code title="put /zones/{zone_id}/origin_tls_client_auth/hostnames">client.originTLSClientAuth.hostnames.<a href="./src/resources/origin-tls-client-auth/hostnames/hostnames.ts">update</a>({ ...params }) -> HostnameUpdateResponsesSinglePage</code>
- <code title="get /zones/{zone_id}/origin_tls_client_auth/hostnames/{hostname}">client.originTLSClientAuth.hostnames.<a href="./src/resources/origin-tls-client-auth/hostnames/hostnames.ts">get</a>(hostname, { ...params }) -> AuthenticatedOriginPull</code>

### Certificates

Types:

- <code><a href="./src/resources/origin-tls-client-auth/hostnames/certificates.ts">Certificate</a></code>
- <code><a href="./src/resources/origin-tls-client-auth/hostnames/certificates.ts">CertificateCreateResponse</a></code>
- <code><a href="./src/resources/origin-tls-client-auth/hostnames/certificates.ts">CertificateListResponse</a></code>
- <code><a href="./src/resources/origin-tls-client-auth/hostnames/certificates.ts">CertificateDeleteResponse</a></code>
- <code><a href="./src/resources/origin-tls-client-auth/hostnames/certificates.ts">CertificateGetResponse</a></code>

Methods:

- <code title="post /zones/{zone_id}/origin_tls_client_auth/hostnames/certificates">client.originTLSClientAuth.hostnames.certificates.<a href="./src/resources/origin-tls-client-auth/hostnames/certificates.ts">create</a>({ ...params }) -> CertificateCreateResponse</code>
- <code title="get /zones/{zone_id}/origin_tls_client_auth/hostnames/certificates">client.originTLSClientAuth.hostnames.certificates.<a href="./src/resources/origin-tls-client-auth/hostnames/certificates.ts">list</a>({ ...params }) -> CertificateListResponsesSinglePage</code>
- <code title="delete /zones/{zone_id}/origin_tls_client_auth/hostnames/certificates/{certificate_id}">client.originTLSClientAuth.hostnames.certificates.<a href="./src/resources/origin-tls-client-auth/hostnames/certificates.ts">delete</a>(certificateId, { ...params }) -> CertificateDeleteResponse</code>
- <code title="get /zones/{zone_id}/origin_tls_client_auth/hostnames/certificates/{certificate_id}">client.originTLSClientAuth.hostnames.certificates.<a href="./src/resources/origin-tls-client-auth/hostnames/certificates.ts">get</a>(certificateId, { ...params }) -> CertificateGetResponse</code>

## Settings

Types:

- <code><a href="./src/resources/origin-tls-client-auth/settings.ts">SettingUpdateResponse</a></code>
- <code><a href="./src/resources/origin-tls-client-auth/settings.ts">SettingGetResponse</a></code>

Methods:

- <code title="put /zones/{zone_id}/origin_tls_client_auth/settings">client.originTLSClientAuth.settings.<a href="./src/resources/origin-tls-client-auth/settings.ts">update</a>({ ...params }) -> SettingUpdateResponse</code>
- <code title="get /zones/{zone_id}/origin_tls_client_auth/settings">client.originTLSClientAuth.settings.<a href="./src/resources/origin-tls-client-auth/settings.ts">get</a>({ ...params }) -> SettingGetResponse</code>

# PageRules

Types:

- <code><a href="./src/resources/page-rules.ts">PageRule</a></code>
- <code><a href="./src/resources/page-rules.ts">Target</a></code>
- <code><a href="./src/resources/page-rules.ts">PageRuleListResponse</a></code>
- <code><a href="./src/resources/page-rules.ts">PageRuleDeleteResponse</a></code>

Methods:

- <code title="post /zones/{zone_id}/pagerules">client.pageRules.<a href="./src/resources/page-rules.ts">create</a>({ ...params }) -> PageRule</code>
- <code title="put /zones/{zone_id}/pagerules/{pagerule_id}">client.pageRules.<a href="./src/resources/page-rules.ts">update</a>(pageruleId, { ...params }) -> PageRule</code>
- <code title="get /zones/{zone_id}/pagerules">client.pageRules.<a href="./src/resources/page-rules.ts">list</a>({ ...params }) -> PageRuleListResponse</code>
- <code title="delete /zones/{zone_id}/pagerules/{pagerule_id}">client.pageRules.<a href="./src/resources/page-rules.ts">delete</a>(pageruleId, { ...params }) -> PageRuleDeleteResponse | null</code>
- <code title="patch /zones/{zone_id}/pagerules/{pagerule_id}">client.pageRules.<a href="./src/resources/page-rules.ts">edit</a>(pageruleId, { ...params }) -> PageRule</code>
- <code title="get /zones/{zone_id}/pagerules/{pagerule_id}">client.pageRules.<a href="./src/resources/page-rules.ts">get</a>(pageruleId, { ...params }) -> PageRule</code>

# RateLimits

Types:

- <code><a href="./src/resources/rate-limits.ts">Action</a></code>
- <code><a href="./src/resources/rate-limits.ts">RateLimit</a></code>
- <code><a href="./src/resources/rate-limits.ts">RateLimitDeleteResponse</a></code>

Methods:

- <code title="post /zones/{zone_id}/rate_limits">client.rateLimits.<a href="./src/resources/rate-limits.ts">create</a>({ ...params }) -> RateLimit</code>
- <code title="get /zones/{zone_id}/rate_limits">client.rateLimits.<a href="./src/resources/rate-limits.ts">list</a>({ ...params }) -> RateLimitsV4PagePaginationArray</code>
- <code title="delete /zones/{zone_id}/rate_limits/{rate_limit_id}">client.rateLimits.<a href="./src/resources/rate-limits.ts">delete</a>(rateLimitId, { ...params }) -> RateLimitDeleteResponse</code>
- <code title="put /zones/{zone_id}/rate_limits/{rate_limit_id}">client.rateLimits.<a href="./src/resources/rate-limits.ts">edit</a>(rateLimitId, { ...params }) -> RateLimit</code>
- <code title="get /zones/{zone_id}/rate_limits/{rate_limit_id}">client.rateLimits.<a href="./src/resources/rate-limits.ts">get</a>(rateLimitId, { ...params }) -> RateLimit</code>

# WaitingRooms

Types:

- <code><a href="./src/resources/waiting-rooms/waiting-rooms.ts">AdditionalRoutes</a></code>
- <code><a href="./src/resources/waiting-rooms/waiting-rooms.ts">CookieAttributes</a></code>
- <code><a href="./src/resources/waiting-rooms/waiting-rooms.ts">Query</a></code>
- <code><a href="./src/resources/waiting-rooms/waiting-rooms.ts">WaitingRoom</a></code>
- <code><a href="./src/resources/waiting-rooms/waiting-rooms.ts">WaitingRoomDeleteResponse</a></code>

Methods:

- <code title="post /zones/{zone_id}/waiting_rooms">client.waitingRooms.<a href="./src/resources/waiting-rooms/waiting-rooms.ts">create</a>({ ...params }) -> WaitingRoom</code>
- <code title="put /zones/{zone_id}/waiting_rooms/{waiting_room_id}">client.waitingRooms.<a href="./src/resources/waiting-rooms/waiting-rooms.ts">update</a>(waitingRoomId, { ...params }) -> WaitingRoom</code>
- <code title="get /{accounts_or_zones}/{account_or_zone_id}/waiting_rooms">client.waitingRooms.<a href="./src/resources/waiting-rooms/waiting-rooms.ts">list</a>({ ...params }) -> WaitingRoomsV4PagePaginationArray</code>
- <code title="delete /zones/{zone_id}/waiting_rooms/{waiting_room_id}">client.waitingRooms.<a href="./src/resources/waiting-rooms/waiting-rooms.ts">delete</a>(waitingRoomId, { ...params }) -> WaitingRoomDeleteResponse</code>
- <code title="patch /zones/{zone_id}/waiting_rooms/{waiting_room_id}">client.waitingRooms.<a href="./src/resources/waiting-rooms/waiting-rooms.ts">edit</a>(waitingRoomId, { ...params }) -> WaitingRoom</code>
- <code title="get /zones/{zone_id}/waiting_rooms/{waiting_room_id}">client.waitingRooms.<a href="./src/resources/waiting-rooms/waiting-rooms.ts">get</a>(waitingRoomId, { ...params }) -> WaitingRoom</code>

## Page

Types:

- <code><a href="./src/resources/waiting-rooms/page.ts">PagePreviewResponse</a></code>

Methods:

- <code title="post /zones/{zone_id}/waiting_rooms/preview">client.waitingRooms.page.<a href="./src/resources/waiting-rooms/page.ts">preview</a>({ ...params }) -> PagePreviewResponse</code>

## Events

Types:

- <code><a href="./src/resources/waiting-rooms/events/events.ts">Event</a></code>
- <code><a href="./src/resources/waiting-rooms/events/events.ts">EventDeleteResponse</a></code>

Methods:

- <code title="post /zones/{zone_id}/waiting_rooms/{waiting_room_id}/events">client.waitingRooms.events.<a href="./src/resources/waiting-rooms/events/events.ts">create</a>(waitingRoomId, { ...params }) -> Event</code>
- <code title="put /zones/{zone_id}/waiting_rooms/{waiting_room_id}/events/{event_id}">client.waitingRooms.events.<a href="./src/resources/waiting-rooms/events/events.ts">update</a>(waitingRoomId, eventId, { ...params }) -> Event</code>
- <code title="get /zones/{zone_id}/waiting_rooms/{waiting_room_id}/events">client.waitingRooms.events.<a href="./src/resources/waiting-rooms/events/events.ts">list</a>(waitingRoomId, { ...params }) -> EventsV4PagePaginationArray</code>
- <code title="delete /zones/{zone_id}/waiting_rooms/{waiting_room_id}/events/{event_id}">client.waitingRooms.events.<a href="./src/resources/waiting-rooms/events/events.ts">delete</a>(waitingRoomId, eventId, { ...params }) -> EventDeleteResponse</code>
- <code title="patch /zones/{zone_id}/waiting_rooms/{waiting_room_id}/events/{event_id}">client.waitingRooms.events.<a href="./src/resources/waiting-rooms/events/events.ts">edit</a>(waitingRoomId, eventId, { ...params }) -> Event</code>
- <code title="get /zones/{zone_id}/waiting_rooms/{waiting_room_id}/events/{event_id}">client.waitingRooms.events.<a href="./src/resources/waiting-rooms/events/events.ts">get</a>(waitingRoomId, eventId, { ...params }) -> Event</code>

### Details

Types:

- <code><a href="./src/resources/waiting-rooms/events/details.ts">EventQuery</a></code>
- <code><a href="./src/resources/waiting-rooms/events/details.ts">DetailGetResponse</a></code>

Methods:

- <code title="get /zones/{zone_id}/waiting_rooms/{waiting_room_id}/events/{event_id}/details">client.waitingRooms.events.details.<a href="./src/resources/waiting-rooms/events/details.ts">get</a>(waitingRoomId, eventId, { ...params }) -> DetailGetResponse</code>

## Rules

Types:

- <code><a href="./src/resources/waiting-rooms/rules.ts">WaitingRoomRule</a></code>

Methods:

- <code title="post /zones/{zone_id}/waiting_rooms/{waiting_room_id}/rules">client.waitingRooms.rules.<a href="./src/resources/waiting-rooms/rules.ts">create</a>(waitingRoomId, { ...params }) -> WaitingRoomRulesSinglePage</code>
- <code title="put /zones/{zone_id}/waiting_rooms/{waiting_room_id}/rules">client.waitingRooms.rules.<a href="./src/resources/waiting-rooms/rules.ts">update</a>(waitingRoomId, [ ...rules ]) -> WaitingRoomRulesSinglePage</code>
- <code title="delete /zones/{zone_id}/waiting_rooms/{waiting_room_id}/rules/{rule_id}">client.waitingRooms.rules.<a href="./src/resources/waiting-rooms/rules.ts">delete</a>(waitingRoomId, ruleId, { ...params }) -> WaitingRoomRulesSinglePage</code>
- <code title="patch /zones/{zone_id}/waiting_rooms/{waiting_room_id}/rules/{rule_id}">client.waitingRooms.rules.<a href="./src/resources/waiting-rooms/rules.ts">edit</a>(waitingRoomId, ruleId, { ...params }) -> WaitingRoomRulesSinglePage</code>
- <code title="get /zones/{zone_id}/waiting_rooms/{waiting_room_id}/rules">client.waitingRooms.rules.<a href="./src/resources/waiting-rooms/rules.ts">get</a>(waitingRoomId, { ...params }) -> WaitingRoomRulesSinglePage</code>

## Statuses

Types:

- <code><a href="./src/resources/waiting-rooms/statuses.ts">StatusGetResponse</a></code>

Methods:

- <code title="get /zones/{zone_id}/waiting_rooms/{waiting_room_id}/status">client.waitingRooms.statuses.<a href="./src/resources/waiting-rooms/statuses.ts">get</a>(waitingRoomId, { ...params }) -> StatusGetResponse</code>

## Settings

Types:

- <code><a href="./src/resources/waiting-rooms/settings.ts">Setting</a></code>
- <code><a href="./src/resources/waiting-rooms/settings.ts">SettingUpdateResponse</a></code>
- <code><a href="./src/resources/waiting-rooms/settings.ts">SettingEditResponse</a></code>
- <code><a href="./src/resources/waiting-rooms/settings.ts">SettingGetResponse</a></code>

Methods:

- <code title="put /zones/{zone_id}/waiting_rooms/settings">client.waitingRooms.settings.<a href="./src/resources/waiting-rooms/settings.ts">update</a>({ ...params }) -> SettingUpdateResponse</code>
- <code title="patch /zones/{zone_id}/waiting_rooms/settings">client.waitingRooms.settings.<a href="./src/resources/waiting-rooms/settings.ts">edit</a>({ ...params }) -> SettingEditResponse</code>
- <code title="get /zones/{zone_id}/waiting_rooms/settings">client.waitingRooms.settings.<a href="./src/resources/waiting-rooms/settings.ts">get</a>({ ...params }) -> SettingGetResponse</code>

# Web3

## Hostnames

Types:

- <code><a href="./src/resources/web3/hostnames/hostnames.ts">Hostname</a></code>
- <code><a href="./src/resources/web3/hostnames/hostnames.ts">HostnameDeleteResponse</a></code>

Methods:

- <code title="post /zones/{zone_id}/web3/hostnames">client.web3.hostnames.<a href="./src/resources/web3/hostnames/hostnames.ts">create</a>({ ...params }) -> Hostname</code>
- <code title="get /zones/{zone_id}/web3/hostnames">client.web3.hostnames.<a href="./src/resources/web3/hostnames/hostnames.ts">list</a>({ ...params }) -> HostnamesSinglePage</code>
- <code title="delete /zones/{zone_id}/web3/hostnames/{identifier}">client.web3.hostnames.<a href="./src/resources/web3/hostnames/hostnames.ts">delete</a>(identifier, { ...params }) -> HostnameDeleteResponse | null</code>
- <code title="patch /zones/{zone_id}/web3/hostnames/{identifier}">client.web3.hostnames.<a href="./src/resources/web3/hostnames/hostnames.ts">edit</a>(identifier, { ...params }) -> Hostname</code>
- <code title="get /zones/{zone_id}/web3/hostnames/{identifier}">client.web3.hostnames.<a href="./src/resources/web3/hostnames/hostnames.ts">get</a>(identifier, { ...params }) -> Hostname</code>

### IPFSUniversalPaths

#### ContentLists

Types:

- <code><a href="./src/resources/web3/hostnames/ipfs-universal-paths/content-lists/content-lists.ts">ContentList</a></code>

Methods:

- <code title="put /zones/{zone_id}/web3/hostnames/{identifier}/ipfs_universal_path/content_list">client.web3.hostnames.ipfsUniversalPaths.contentLists.<a href="./src/resources/web3/hostnames/ipfs-universal-paths/content-lists/content-lists.ts">update</a>(identifier, { ...params }) -> ContentList</code>
- <code title="get /zones/{zone_id}/web3/hostnames/{identifier}/ipfs_universal_path/content_list">client.web3.hostnames.ipfsUniversalPaths.contentLists.<a href="./src/resources/web3/hostnames/ipfs-universal-paths/content-lists/content-lists.ts">get</a>(identifier, { ...params }) -> ContentList</code>

##### Entries

Types:

- <code><a href="./src/resources/web3/hostnames/ipfs-universal-paths/content-lists/entries.ts">EntryCreateResponse</a></code>
- <code><a href="./src/resources/web3/hostnames/ipfs-universal-paths/content-lists/entries.ts">EntryUpdateResponse</a></code>
- <code><a href="./src/resources/web3/hostnames/ipfs-universal-paths/content-lists/entries.ts">EntryListResponse</a></code>
- <code><a href="./src/resources/web3/hostnames/ipfs-universal-paths/content-lists/entries.ts">EntryDeleteResponse</a></code>
- <code><a href="./src/resources/web3/hostnames/ipfs-universal-paths/content-lists/entries.ts">EntryGetResponse</a></code>

Methods:

- <code title="post /zones/{zone_id}/web3/hostnames/{identifier}/ipfs_universal_path/content_list/entries">client.web3.hostnames.ipfsUniversalPaths.contentLists.entries.<a href="./src/resources/web3/hostnames/ipfs-universal-paths/content-lists/entries.ts">create</a>(identifier, { ...params }) -> EntryCreateResponse</code>
- <code title="put /zones/{zone_id}/web3/hostnames/{identifier}/ipfs_universal_path/content_list/entries/{content_list_entry_identifier}">client.web3.hostnames.ipfsUniversalPaths.contentLists.entries.<a href="./src/resources/web3/hostnames/ipfs-universal-paths/content-lists/entries.ts">update</a>(identifier, contentListEntryIdentifier, { ...params }) -> EntryUpdateResponse</code>
- <code title="get /zones/{zone_id}/web3/hostnames/{identifier}/ipfs_universal_path/content_list/entries">client.web3.hostnames.ipfsUniversalPaths.contentLists.entries.<a href="./src/resources/web3/hostnames/ipfs-universal-paths/content-lists/entries.ts">list</a>(identifier, { ...params }) -> EntryListResponse | null</code>
- <code title="delete /zones/{zone_id}/web3/hostnames/{identifier}/ipfs_universal_path/content_list/entries/{content_list_entry_identifier}">client.web3.hostnames.ipfsUniversalPaths.contentLists.entries.<a href="./src/resources/web3/hostnames/ipfs-universal-paths/content-lists/entries.ts">delete</a>(identifier, contentListEntryIdentifier, { ...params }) -> EntryDeleteResponse | null</code>
- <code title="get /zones/{zone_id}/web3/hostnames/{identifier}/ipfs_universal_path/content_list/entries/{content_list_entry_identifier}">client.web3.hostnames.ipfsUniversalPaths.contentLists.entries.<a href="./src/resources/web3/hostnames/ipfs-universal-paths/content-lists/entries.ts">get</a>(identifier, contentListEntryIdentifier, { ...params }) -> EntryGetResponse</code>

# Workers

Types:

- <code><a href="./src/resources/workers/workers.ts">MigrationStep</a></code>
- <code><a href="./src/resources/workers/workers.ts">SingleStepMigration</a></code>
- <code><a href="./src/resources/workers/workers.ts">WorkerMetadata</a></code>

## Routes

Types:

- <code><a href="./src/resources/workers/routes.ts">RouteCreateResponse</a></code>
- <code><a href="./src/resources/workers/routes.ts">RouteUpdateResponse</a></code>
- <code><a href="./src/resources/workers/routes.ts">RouteListResponse</a></code>
- <code><a href="./src/resources/workers/routes.ts">RouteDeleteResponse</a></code>
- <code><a href="./src/resources/workers/routes.ts">RouteGetResponse</a></code>

Methods:

- <code title="post /zones/{zone_id}/workers/routes">client.workers.routes.<a href="./src/resources/workers/routes.ts">create</a>({ ...params }) -> RouteCreateResponse</code>
- <code title="put /zones/{zone_id}/workers/routes/{route_id}">client.workers.routes.<a href="./src/resources/workers/routes.ts">update</a>(routeId, { ...params }) -> RouteUpdateResponse</code>
- <code title="get /zones/{zone_id}/workers/routes">client.workers.routes.<a href="./src/resources/workers/routes.ts">list</a>({ ...params }) -> RouteListResponsesSinglePage</code>
- <code title="delete /zones/{zone_id}/workers/routes/{route_id}">client.workers.routes.<a href="./src/resources/workers/routes.ts">delete</a>(routeId, { ...params }) -> RouteDeleteResponse</code>
- <code title="get /zones/{zone_id}/workers/routes/{route_id}">client.workers.routes.<a href="./src/resources/workers/routes.ts">get</a>(routeId, { ...params }) -> RouteGetResponse</code>

## Assets

### Upload

Types:

- <code><a href="./src/resources/workers/assets/upload.ts">UploadCreateResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/workers/assets/upload">client.workers.assets.upload.<a href="./src/resources/workers/assets/upload.ts">create</a>({ ...params }) -> UploadCreateResponse</code>

## Scripts

Types:

- <code><a href="./src/resources/workers/scripts/scripts.ts">Script</a></code>
- <code><a href="./src/resources/workers/scripts/scripts.ts">ScriptSetting</a></code>
- <code><a href="./src/resources/workers/scripts/scripts.ts">ScriptUpdateResponse</a></code>
- <code><a href="./src/resources/workers/scripts/scripts.ts">ScriptDeleteResponse</a></code>
- <code><a href="./src/resources/workers/scripts/scripts.ts">ScriptGetResponse</a></code>

Methods:

- <code title="put /accounts/{account_id}/workers/scripts/{script_name}">client.workers.scripts.<a href="./src/resources/workers/scripts/scripts.ts">update</a>(scriptName, { ...params }) -> ScriptUpdateResponse</code>
- <code title="get /accounts/{account_id}/workers/scripts">client.workers.scripts.<a href="./src/resources/workers/scripts/scripts.ts">list</a>({ ...params }) -> ScriptsSinglePage</code>
- <code title="delete /accounts/{account_id}/workers/scripts/{script_name}">client.workers.scripts.<a href="./src/resources/workers/scripts/scripts.ts">delete</a>(scriptName, { ...params }) -> ScriptDeleteResponse | null</code>
- <code title="get /accounts/{account_id}/workers/scripts/{script_name}">client.workers.scripts.<a href="./src/resources/workers/scripts/scripts.ts">get</a>(scriptName, { ...params }) -> string</code>

### Assets

#### Upload

Types:

- <code><a href="./src/resources/workers/scripts/assets/upload.ts">UploadCreateResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/workers/scripts/{script_name}/assets-upload-session">client.workers.scripts.assets.upload.<a href="./src/resources/workers/scripts/assets/upload.ts">create</a>(scriptName, { ...params }) -> UploadCreateResponse</code>

### Subdomain

Types:

- <code><a href="./src/resources/workers/scripts/subdomain.ts">SubdomainCreateResponse</a></code>
- <code><a href="./src/resources/workers/scripts/subdomain.ts">SubdomainDeleteResponse</a></code>
- <code><a href="./src/resources/workers/scripts/subdomain.ts">SubdomainGetResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/workers/scripts/{script_name}/subdomain">client.workers.scripts.subdomain.<a href="./src/resources/workers/scripts/subdomain.ts">create</a>(scriptName, { ...params }) -> SubdomainCreateResponse</code>
- <code title="delete /accounts/{account_id}/workers/scripts/{script_name}/subdomain">client.workers.scripts.subdomain.<a href="./src/resources/workers/scripts/subdomain.ts">delete</a>(scriptName, { ...params }) -> SubdomainDeleteResponse</code>
- <code title="get /accounts/{account_id}/workers/scripts/{script_name}/subdomain">client.workers.scripts.subdomain.<a href="./src/resources/workers/scripts/subdomain.ts">get</a>(scriptName, { ...params }) -> SubdomainGetResponse</code>

### Schedules

Types:

- <code><a href="./src/resources/workers/scripts/schedules.ts">ScheduleUpdateResponse</a></code>
- <code><a href="./src/resources/workers/scripts/schedules.ts">ScheduleGetResponse</a></code>

Methods:

- <code title="put /accounts/{account_id}/workers/scripts/{script_name}/schedules">client.workers.scripts.schedules.<a href="./src/resources/workers/scripts/schedules.ts">update</a>(scriptName, [ ...body ]) -> ScheduleUpdateResponse</code>
- <code title="get /accounts/{account_id}/workers/scripts/{script_name}/schedules">client.workers.scripts.schedules.<a href="./src/resources/workers/scripts/schedules.ts">get</a>(scriptName, { ...params }) -> ScheduleGetResponse</code>

### Tail

Types:

- <code><a href="./src/resources/workers/scripts/tail.ts">ConsumerScript</a></code>
- <code><a href="./src/resources/workers/scripts/tail.ts">TailCreateResponse</a></code>
- <code><a href="./src/resources/workers/scripts/tail.ts">TailDeleteResponse</a></code>
- <code><a href="./src/resources/workers/scripts/tail.ts">TailGetResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/workers/scripts/{script_name}/tails">client.workers.scripts.tail.<a href="./src/resources/workers/scripts/tail.ts">create</a>(scriptName, { ...params }) -> TailCreateResponse</code>
- <code title="delete /accounts/{account_id}/workers/scripts/{script_name}/tails/{id}">client.workers.scripts.tail.<a href="./src/resources/workers/scripts/tail.ts">delete</a>(scriptName, id, { ...params }) -> TailDeleteResponse</code>
- <code title="get /accounts/{account_id}/workers/scripts/{script_name}/tails">client.workers.scripts.tail.<a href="./src/resources/workers/scripts/tail.ts">get</a>(scriptName, { ...params }) -> TailGetResponse</code>

### Content

Methods:

- <code title="put /accounts/{account_id}/workers/scripts/{script_name}/content">client.workers.scripts.content.<a href="./src/resources/workers/scripts/content.ts">update</a>(scriptName, { ...params }) -> Script</code>
- <code title="get /accounts/{account_id}/workers/scripts/{script_name}/content/v2">client.workers.scripts.content.<a href="./src/resources/workers/scripts/content.ts">get</a>(scriptName, { ...params }) -> Response</code>

### Settings

Methods:

- <code title="patch /accounts/{account_id}/workers/scripts/{script_name}/script-settings">client.workers.scripts.settings.<a href="./src/resources/workers/scripts/settings.ts">edit</a>(scriptName, { ...params }) -> ScriptSetting</code>
- <code title="get /accounts/{account_id}/workers/scripts/{script_name}/script-settings">client.workers.scripts.settings.<a href="./src/resources/workers/scripts/settings.ts">get</a>(scriptName, { ...params }) -> ScriptSetting</code>

### Deployments

Types:

- <code><a href="./src/resources/workers/scripts/deployments.ts">Deployment</a></code>
- <code><a href="./src/resources/workers/scripts/deployments.ts">DeploymentCreateResponse</a></code>
- <code><a href="./src/resources/workers/scripts/deployments.ts">DeploymentGetResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/workers/scripts/{script_name}/deployments">client.workers.scripts.deployments.<a href="./src/resources/workers/scripts/deployments.ts">create</a>(scriptName, { ...params }) -> DeploymentCreateResponse</code>
- <code title="get /accounts/{account_id}/workers/scripts/{script_name}/deployments">client.workers.scripts.deployments.<a href="./src/resources/workers/scripts/deployments.ts">get</a>(scriptName, { ...params }) -> DeploymentGetResponse</code>

### Versions

Types:

- <code><a href="./src/resources/workers/scripts/versions.ts">VersionCreateResponse</a></code>
- <code><a href="./src/resources/workers/scripts/versions.ts">VersionListResponse</a></code>
- <code><a href="./src/resources/workers/scripts/versions.ts">VersionGetResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/workers/scripts/{script_name}/versions">client.workers.scripts.versions.<a href="./src/resources/workers/scripts/versions.ts">create</a>(scriptName, { ...params }) -> VersionCreateResponse</code>
- <code title="get /accounts/{account_id}/workers/scripts/{script_name}/versions">client.workers.scripts.versions.<a href="./src/resources/workers/scripts/versions.ts">list</a>(scriptName, { ...params }) -> VersionListResponsesV4PagePagination</code>
- <code title="get /accounts/{account_id}/workers/scripts/{script_name}/versions/{version_id}">client.workers.scripts.versions.<a href="./src/resources/workers/scripts/versions.ts">get</a>(scriptName, versionId, { ...params }) -> VersionGetResponse</code>

### Secrets

Types:

- <code><a href="./src/resources/workers/scripts/secrets.ts">SecretUpdateResponse</a></code>
- <code><a href="./src/resources/workers/scripts/secrets.ts">SecretListResponse</a></code>
- <code><a href="./src/resources/workers/scripts/secrets.ts">SecretDeleteResponse</a></code>
- <code><a href="./src/resources/workers/scripts/secrets.ts">SecretGetResponse</a></code>

Methods:

- <code title="put /accounts/{account_id}/workers/scripts/{script_name}/secrets">client.workers.scripts.secrets.<a href="./src/resources/workers/scripts/secrets.ts">update</a>(scriptName, { ...params }) -> SecretUpdateResponse</code>
- <code title="get /accounts/{account_id}/workers/scripts/{script_name}/secrets">client.workers.scripts.secrets.<a href="./src/resources/workers/scripts/secrets.ts">list</a>(scriptName, { ...params }) -> SecretListResponsesSinglePage</code>
- <code title="delete /accounts/{account_id}/workers/scripts/{script_name}/secrets/{secret_name}">client.workers.scripts.secrets.<a href="./src/resources/workers/scripts/secrets.ts">delete</a>(scriptName, secretName, { ...params }) -> SecretDeleteResponse | null</code>
- <code title="get /accounts/{account_id}/workers/scripts/{script_name}/secrets/{secret_name}">client.workers.scripts.secrets.<a href="./src/resources/workers/scripts/secrets.ts">get</a>(scriptName, secretName, { ...params }) -> SecretGetResponse</code>

### ScriptAndVersionSettings

Types:

- <code><a href="./src/resources/workers/scripts/script-and-version-settings.ts">ScriptAndVersionSettingEditResponse</a></code>
- <code><a href="./src/resources/workers/scripts/script-and-version-settings.ts">ScriptAndVersionSettingGetResponse</a></code>

Methods:

- <code title="patch /accounts/{account_id}/workers/scripts/{script_name}/settings">client.workers.scripts.scriptAndVersionSettings.<a href="./src/resources/workers/scripts/script-and-version-settings.ts">edit</a>(scriptName, { ...params }) -> ScriptAndVersionSettingEditResponse</code>
- <code title="get /accounts/{account_id}/workers/scripts/{script_name}/settings">client.workers.scripts.scriptAndVersionSettings.<a href="./src/resources/workers/scripts/script-and-version-settings.ts">get</a>(scriptName, { ...params }) -> ScriptAndVersionSettingGetResponse</code>

## AccountSettings

Types:

- <code><a href="./src/resources/workers/account-settings.ts">AccountSettingUpdateResponse</a></code>
- <code><a href="./src/resources/workers/account-settings.ts">AccountSettingGetResponse</a></code>

Methods:

- <code title="put /accounts/{account_id}/workers/account-settings">client.workers.accountSettings.<a href="./src/resources/workers/account-settings.ts">update</a>({ ...params }) -> AccountSettingUpdateResponse</code>
- <code title="get /accounts/{account_id}/workers/account-settings">client.workers.accountSettings.<a href="./src/resources/workers/account-settings.ts">get</a>({ ...params }) -> AccountSettingGetResponse</code>

## Domains

Types:

- <code><a href="./src/resources/workers/domains.ts">Domain</a></code>

Methods:

- <code title="put /accounts/{account_id}/workers/domains">client.workers.domains.<a href="./src/resources/workers/domains.ts">update</a>({ ...params }) -> Domain</code>
- <code title="get /accounts/{account_id}/workers/domains">client.workers.domains.<a href="./src/resources/workers/domains.ts">list</a>({ ...params }) -> DomainsSinglePage</code>
- <code title="delete /accounts/{account_id}/workers/domains/{domain_id}">client.workers.domains.<a href="./src/resources/workers/domains.ts">delete</a>(domainId, { ...params }) -> void</code>
- <code title="get /accounts/{account_id}/workers/domains/{domain_id}">client.workers.domains.<a href="./src/resources/workers/domains.ts">get</a>(domainId, { ...params }) -> Domain</code>

## Subdomains

Types:

- <code><a href="./src/resources/workers/subdomains.ts">SubdomainUpdateResponse</a></code>
- <code><a href="./src/resources/workers/subdomains.ts">SubdomainGetResponse</a></code>

Methods:

- <code title="put /accounts/{account_id}/workers/subdomain">client.workers.subdomains.<a href="./src/resources/workers/subdomains.ts">update</a>({ ...params }) -> SubdomainUpdateResponse</code>
- <code title="get /accounts/{account_id}/workers/subdomain">client.workers.subdomains.<a href="./src/resources/workers/subdomains.ts">get</a>({ ...params }) -> SubdomainGetResponse</code>

## Observability

### Telemetry

Types:

- <code><a href="./src/resources/workers/observability/telemetry.ts">TelemetryKeysResponse</a></code>
- <code><a href="./src/resources/workers/observability/telemetry.ts">TelemetryQueryResponse</a></code>
- <code><a href="./src/resources/workers/observability/telemetry.ts">TelemetryValuesResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/workers/observability/telemetry/keys">client.workers.observability.telemetry.<a href="./src/resources/workers/observability/telemetry.ts">keys</a>({ ...params }) -> TelemetryKeysResponsesSinglePage</code>
- <code title="post /accounts/{account_id}/workers/observability/telemetry/query">client.workers.observability.telemetry.<a href="./src/resources/workers/observability/telemetry.ts">query</a>({ ...params }) -> TelemetryQueryResponse</code>
- <code title="post /accounts/{account_id}/workers/observability/telemetry/values">client.workers.observability.telemetry.<a href="./src/resources/workers/observability/telemetry.ts">values</a>({ ...params }) -> TelemetryValuesResponsesSinglePage</code>

# KV

## Namespaces

Types:

- <code><a href="./src/resources/kv/namespaces/namespaces.ts">Namespace</a></code>
- <code><a href="./src/resources/kv/namespaces/namespaces.ts">NamespaceDeleteResponse</a></code>
- <code><a href="./src/resources/kv/namespaces/namespaces.ts">NamespaceBulkDeleteResponse</a></code>
- <code><a href="./src/resources/kv/namespaces/namespaces.ts">NamespaceBulkGetResponse</a></code>
- <code><a href="./src/resources/kv/namespaces/namespaces.ts">NamespaceBulkUpdateResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/storage/kv/namespaces">client.kv.namespaces.<a href="./src/resources/kv/namespaces/namespaces.ts">create</a>({ ...params }) -> Namespace</code>
- <code title="put /accounts/{account_id}/storage/kv/namespaces/{namespace_id}">client.kv.namespaces.<a href="./src/resources/kv/namespaces/namespaces.ts">update</a>(namespaceId, { ...params }) -> Namespace</code>
- <code title="get /accounts/{account_id}/storage/kv/namespaces">client.kv.namespaces.<a href="./src/resources/kv/namespaces/namespaces.ts">list</a>({ ...params }) -> NamespacesV4PagePaginationArray</code>
- <code title="delete /accounts/{account_id}/storage/kv/namespaces/{namespace_id}">client.kv.namespaces.<a href="./src/resources/kv/namespaces/namespaces.ts">delete</a>(namespaceId, { ...params }) -> NamespaceDeleteResponse | null</code>
- <code title="post /accounts/{account_id}/storage/kv/namespaces/{namespace_id}/bulk/delete">client.kv.namespaces.<a href="./src/resources/kv/namespaces/namespaces.ts">bulkDelete</a>(namespaceId, [ ...body ]) -> NamespaceBulkDeleteResponse | null</code>
- <code title="post /accounts/{account_id}/storage/kv/namespaces/{namespace_id}/bulk/get">client.kv.namespaces.<a href="./src/resources/kv/namespaces/namespaces.ts">bulkGet</a>(namespaceId, { ...params }) -> NamespaceBulkGetResponse | null</code>
- <code title="put /accounts/{account_id}/storage/kv/namespaces/{namespace_id}/bulk">client.kv.namespaces.<a href="./src/resources/kv/namespaces/namespaces.ts">bulkUpdate</a>(namespaceId, [ ...body ]) -> NamespaceBulkUpdateResponse | null</code>
- <code title="get /accounts/{account_id}/storage/kv/namespaces/{namespace_id}">client.kv.namespaces.<a href="./src/resources/kv/namespaces/namespaces.ts">get</a>(namespaceId, { ...params }) -> Namespace</code>

### Keys

Types:

- <code><a href="./src/resources/kv/namespaces/keys.ts">Key</a></code>
- <code><a href="./src/resources/kv/namespaces/keys.ts">KeyBulkDeleteResponse</a></code>
- <code><a href="./src/resources/kv/namespaces/keys.ts">KeyBulkGetResponse</a></code>
- <code><a href="./src/resources/kv/namespaces/keys.ts">KeyBulkUpdateResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/storage/kv/namespaces/{namespace_id}/keys">client.kv.namespaces.keys.<a href="./src/resources/kv/namespaces/keys.ts">list</a>(namespaceId, { ...params }) -> KeysCursorLimitPagination</code>
- <code title="post /accounts/{account_id}/storage/kv/namespaces/{namespace_id}/bulk/delete">client.kv.namespaces.keys.<a href="./src/resources/kv/namespaces/keys.ts">bulkDelete</a>(namespaceId, [ ...body ]) -> KeyBulkDeleteResponse | null</code>
- <code title="post /accounts/{account_id}/storage/kv/namespaces/{namespace_id}/bulk/get">client.kv.namespaces.keys.<a href="./src/resources/kv/namespaces/keys.ts">bulkGet</a>(namespaceId, { ...params }) -> KeyBulkGetResponse | null</code>
- <code title="put /accounts/{account_id}/storage/kv/namespaces/{namespace_id}/bulk">client.kv.namespaces.keys.<a href="./src/resources/kv/namespaces/keys.ts">bulkUpdate</a>(namespaceId, [ ...body ]) -> KeyBulkUpdateResponse | null</code>

### Metadata

Types:

- <code><a href="./src/resources/kv/namespaces/metadata.ts">MetadataGetResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/storage/kv/namespaces/{namespace_id}/metadata/{key_name}">client.kv.namespaces.metadata.<a href="./src/resources/kv/namespaces/metadata.ts">get</a>(namespaceId, keyName, { ...params }) -> MetadataGetResponse</code>

### Values

Types:

- <code><a href="./src/resources/kv/namespaces/values.ts">ValueUpdateResponse</a></code>
- <code><a href="./src/resources/kv/namespaces/values.ts">ValueDeleteResponse</a></code>

Methods:

- <code title="put /accounts/{account_id}/storage/kv/namespaces/{namespace_id}/values/{key_name}">client.kv.namespaces.values.<a href="./src/resources/kv/namespaces/values.ts">update</a>(namespaceId, keyName, { ...params }) -> ValueUpdateResponse | null</code>
- <code title="delete /accounts/{account_id}/storage/kv/namespaces/{namespace_id}/values/{key_name}">client.kv.namespaces.values.<a href="./src/resources/kv/namespaces/values.ts">delete</a>(namespaceId, keyName, { ...params }) -> ValueDeleteResponse | null</code>
- <code title="get /accounts/{account_id}/storage/kv/namespaces/{namespace_id}/values/{key_name}">client.kv.namespaces.values.<a href="./src/resources/kv/namespaces/values.ts">get</a>(namespaceId, keyName, { ...params }) -> Response</code>

# DurableObjects

## Namespaces

Types:

- <code><a href="./src/resources/durable-objects/namespaces/namespaces.ts">Namespace</a></code>

Methods:

- <code title="get /accounts/{account_id}/workers/durable_objects/namespaces">client.durableObjects.namespaces.<a href="./src/resources/durable-objects/namespaces/namespaces.ts">list</a>({ ...params }) -> NamespacesSinglePage</code>

### Objects

Types:

- <code><a href="./src/resources/durable-objects/namespaces/objects.ts">DurableObject</a></code>

Methods:

- <code title="get /accounts/{account_id}/workers/durable_objects/namespaces/{id}/objects">client.durableObjects.namespaces.objects.<a href="./src/resources/durable-objects/namespaces/objects.ts">list</a>(id, { ...params }) -> DurableObjectsCursorLimitPagination</code>

# Queues

Types:

- <code><a href="./src/resources/queues/queues.ts">Queue</a></code>
- <code><a href="./src/resources/queues/queues.ts">QueueDeleteResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/queues">client.queues.<a href="./src/resources/queues/queues.ts">create</a>({ ...params }) -> Queue</code>
- <code title="put /accounts/{account_id}/queues/{queue_id}">client.queues.<a href="./src/resources/queues/queues.ts">update</a>(queueId, { ...params }) -> Queue</code>
- <code title="get /accounts/{account_id}/queues">client.queues.<a href="./src/resources/queues/queues.ts">list</a>({ ...params }) -> QueuesSinglePage</code>
- <code title="delete /accounts/{account_id}/queues/{queue_id}">client.queues.<a href="./src/resources/queues/queues.ts">delete</a>(queueId, { ...params }) -> QueueDeleteResponse</code>
- <code title="patch /accounts/{account_id}/queues/{queue_id}">client.queues.<a href="./src/resources/queues/queues.ts">edit</a>(queueId, { ...params }) -> Queue</code>
- <code title="get /accounts/{account_id}/queues/{queue_id}">client.queues.<a href="./src/resources/queues/queues.ts">get</a>(queueId, { ...params }) -> Queue</code>

## Consumers

Types:

- <code><a href="./src/resources/queues/consumers.ts">Consumer</a></code>
- <code><a href="./src/resources/queues/consumers.ts">ConsumerDeleteResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/queues/{queue_id}/consumers">client.queues.consumers.<a href="./src/resources/queues/consumers.ts">create</a>(queueId, { ...params }) -> Consumer</code>
- <code title="put /accounts/{account_id}/queues/{queue_id}/consumers/{consumer_id}">client.queues.consumers.<a href="./src/resources/queues/consumers.ts">update</a>(queueId, consumerId, { ...params }) -> Consumer</code>
- <code title="delete /accounts/{account_id}/queues/{queue_id}/consumers/{consumer_id}">client.queues.consumers.<a href="./src/resources/queues/consumers.ts">delete</a>(queueId, consumerId, { ...params }) -> ConsumerDeleteResponse</code>
- <code title="get /accounts/{account_id}/queues/{queue_id}/consumers">client.queues.consumers.<a href="./src/resources/queues/consumers.ts">get</a>(queueId, { ...params }) -> ConsumersSinglePage</code>

## Messages

Types:

- <code><a href="./src/resources/queues/messages.ts">MessageAckResponse</a></code>
- <code><a href="./src/resources/queues/messages.ts">MessageBulkPushResponse</a></code>
- <code><a href="./src/resources/queues/messages.ts">MessagePullResponse</a></code>
- <code><a href="./src/resources/queues/messages.ts">MessagePushResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/queues/{queue_id}/messages/ack">client.queues.messages.<a href="./src/resources/queues/messages.ts">ack</a>(queueId, { ...params }) -> MessageAckResponse</code>
- <code title="post /accounts/{account_id}/queues/{queue_id}/messages/batch">client.queues.messages.<a href="./src/resources/queues/messages.ts">bulkPush</a>(queueId, { ...params }) -> MessageBulkPushResponse</code>
- <code title="post /accounts/{account_id}/queues/{queue_id}/messages/pull">client.queues.messages.<a href="./src/resources/queues/messages.ts">pull</a>(queueId, { ...params }) -> MessagePullResponse</code>
- <code title="post /accounts/{account_id}/queues/{queue_id}/messages">client.queues.messages.<a href="./src/resources/queues/messages.ts">push</a>(queueId, { ...params }) -> MessagePushResponse</code>

## Purge

Types:

- <code><a href="./src/resources/queues/purge.ts">PurgeStatusResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/queues/{queue_id}/purge">client.queues.purge.<a href="./src/resources/queues/purge.ts">start</a>(queueId, { ...params }) -> Queue</code>
- <code title="get /accounts/{account_id}/queues/{queue_id}/purge">client.queues.purge.<a href="./src/resources/queues/purge.ts">status</a>(queueId, { ...params }) -> PurgeStatusResponse</code>

# APIGateway

## Configurations

Types:

- <code><a href="./src/resources/api-gateway/configurations.ts">Configuration</a></code>
- <code><a href="./src/resources/api-gateway/configurations.ts">ConfigurationUpdateResponse</a></code>

Methods:

- <code title="put /zones/{zone_id}/api_gateway/configuration">client.apiGateway.configurations.<a href="./src/resources/api-gateway/configurations.ts">update</a>({ ...params }) -> ConfigurationUpdateResponse</code>
- <code title="get /zones/{zone_id}/api_gateway/configuration">client.apiGateway.configurations.<a href="./src/resources/api-gateway/configurations.ts">get</a>({ ...params }) -> Configuration</code>

## Discovery

Types:

- <code><a href="./src/resources/api-gateway/discovery/discovery.ts">DiscoveryOperation</a></code>
- <code><a href="./src/resources/api-gateway/discovery/discovery.ts">DiscoveryGetResponse</a></code>

Methods:

- <code title="get /zones/{zone_id}/api_gateway/discovery">client.apiGateway.discovery.<a href="./src/resources/api-gateway/discovery/discovery.ts">get</a>({ ...params }) -> DiscoveryGetResponse</code>

### Operations

Types:

- <code><a href="./src/resources/api-gateway/discovery/operations.ts">OperationBulkEditResponse</a></code>
- <code><a href="./src/resources/api-gateway/discovery/operations.ts">OperationEditResponse</a></code>

Methods:

- <code title="get /zones/{zone_id}/api_gateway/discovery/operations">client.apiGateway.discovery.operations.<a href="./src/resources/api-gateway/discovery/operations.ts">list</a>({ ...params }) -> DiscoveryOperationsV4PagePaginationArray</code>
- <code title="patch /zones/{zone_id}/api_gateway/discovery/operations">client.apiGateway.discovery.operations.<a href="./src/resources/api-gateway/discovery/operations.ts">bulkEdit</a>({ ...params }) -> OperationBulkEditResponse</code>
- <code title="patch /zones/{zone_id}/api_gateway/discovery/operations/{operation_id}">client.apiGateway.discovery.operations.<a href="./src/resources/api-gateway/discovery/operations.ts">edit</a>(operationId, { ...params }) -> OperationEditResponse</code>

## Operations

Types:

- <code><a href="./src/resources/api-gateway/operations/operations.ts">APIShield</a></code>
- <code><a href="./src/resources/api-gateway/operations/operations.ts">OperationCreateResponse</a></code>
- <code><a href="./src/resources/api-gateway/operations/operations.ts">OperationListResponse</a></code>
- <code><a href="./src/resources/api-gateway/operations/operations.ts">OperationDeleteResponse</a></code>
- <code><a href="./src/resources/api-gateway/operations/operations.ts">OperationBulkCreateResponse</a></code>
- <code><a href="./src/resources/api-gateway/operations/operations.ts">OperationBulkDeleteResponse</a></code>
- <code><a href="./src/resources/api-gateway/operations/operations.ts">OperationGetResponse</a></code>

Methods:

- <code title="post /zones/{zone_id}/api_gateway/operations/item">client.apiGateway.operations.<a href="./src/resources/api-gateway/operations/operations.ts">create</a>({ ...params }) -> OperationCreateResponse</code>
- <code title="get /zones/{zone_id}/api_gateway/operations">client.apiGateway.operations.<a href="./src/resources/api-gateway/operations/operations.ts">list</a>({ ...params }) -> OperationListResponsesV4PagePaginationArray</code>
- <code title="delete /zones/{zone_id}/api_gateway/operations/{operation_id}">client.apiGateway.operations.<a href="./src/resources/api-gateway/operations/operations.ts">delete</a>(operationId, { ...params }) -> OperationDeleteResponse</code>
- <code title="post /zones/{zone_id}/api_gateway/operations">client.apiGateway.operations.<a href="./src/resources/api-gateway/operations/operations.ts">bulkCreate</a>([ ...body ]) -> OperationBulkCreateResponsesSinglePage</code>
- <code title="delete /zones/{zone_id}/api_gateway/operations">client.apiGateway.operations.<a href="./src/resources/api-gateway/operations/operations.ts">bulkDelete</a>({ ...params }) -> OperationBulkDeleteResponse</code>
- <code title="get /zones/{zone_id}/api_gateway/operations/{operation_id}">client.apiGateway.operations.<a href="./src/resources/api-gateway/operations/operations.ts">get</a>(operationId, { ...params }) -> OperationGetResponse</code>

### SchemaValidation

Types:

- <code><a href="./src/resources/api-gateway/operations/schema-validation.ts">SettingsMultipleRequest</a></code>
- <code><a href="./src/resources/api-gateway/operations/schema-validation.ts">SchemaValidationUpdateResponse</a></code>
- <code><a href="./src/resources/api-gateway/operations/schema-validation.ts">SchemaValidationGetResponse</a></code>

Methods:

- <code title="put /zones/{zone_id}/api_gateway/operations/{operation_id}/schema_validation">client.apiGateway.operations.schemaValidation.<a href="./src/resources/api-gateway/operations/schema-validation.ts">update</a>(operationId, { ...params }) -> SchemaValidationUpdateResponse</code>
- <code title="patch /zones/{zone_id}/api_gateway/operations/schema_validation">client.apiGateway.operations.schemaValidation.<a href="./src/resources/api-gateway/operations/schema-validation.ts">edit</a>({ ...params }) -> SettingsMultipleRequest</code>
- <code title="get /zones/{zone_id}/api_gateway/operations/{operation_id}/schema_validation">client.apiGateway.operations.schemaValidation.<a href="./src/resources/api-gateway/operations/schema-validation.ts">get</a>(operationId, { ...params }) -> SchemaValidationGetResponse</code>

## Schemas

Types:

- <code><a href="./src/resources/api-gateway/schemas.ts">SchemaListResponse</a></code>

Methods:

- <code title="get /zones/{zone_id}/api_gateway/schemas">client.apiGateway.schemas.<a href="./src/resources/api-gateway/schemas.ts">list</a>({ ...params }) -> SchemaListResponse</code>

## Settings

Types:

- <code><a href="./src/resources/api-gateway/settings/settings.ts">Settings</a></code>

### SchemaValidation

Methods:

- <code title="put /zones/{zone_id}/api_gateway/settings/schema_validation">client.apiGateway.settings.schemaValidation.<a href="./src/resources/api-gateway/settings/schema-validation.ts">update</a>({ ...params }) -> Settings</code>
- <code title="patch /zones/{zone_id}/api_gateway/settings/schema_validation">client.apiGateway.settings.schemaValidation.<a href="./src/resources/api-gateway/settings/schema-validation.ts">edit</a>({ ...params }) -> Settings</code>
- <code title="get /zones/{zone_id}/api_gateway/settings/schema_validation">client.apiGateway.settings.schemaValidation.<a href="./src/resources/api-gateway/settings/schema-validation.ts">get</a>({ ...params }) -> Settings</code>

## UserSchemas

Types:

- <code><a href="./src/resources/api-gateway/user-schemas/user-schemas.ts">Message</a></code>
- <code><a href="./src/resources/api-gateway/user-schemas/user-schemas.ts">PublicSchema</a></code>
- <code><a href="./src/resources/api-gateway/user-schemas/user-schemas.ts">SchemaUpload</a></code>
- <code><a href="./src/resources/api-gateway/user-schemas/user-schemas.ts">UserSchemaDeleteResponse</a></code>

Methods:

- <code title="post /zones/{zone_id}/api_gateway/user_schemas">client.apiGateway.userSchemas.<a href="./src/resources/api-gateway/user-schemas/user-schemas.ts">create</a>({ ...params }) -> SchemaUpload</code>
- <code title="get /zones/{zone_id}/api_gateway/user_schemas">client.apiGateway.userSchemas.<a href="./src/resources/api-gateway/user-schemas/user-schemas.ts">list</a>({ ...params }) -> PublicSchemasV4PagePaginationArray</code>
- <code title="delete /zones/{zone_id}/api_gateway/user_schemas/{schema_id}">client.apiGateway.userSchemas.<a href="./src/resources/api-gateway/user-schemas/user-schemas.ts">delete</a>(schemaId, { ...params }) -> UserSchemaDeleteResponse</code>
- <code title="patch /zones/{zone_id}/api_gateway/user_schemas/{schema_id}">client.apiGateway.userSchemas.<a href="./src/resources/api-gateway/user-schemas/user-schemas.ts">edit</a>(schemaId, { ...params }) -> PublicSchema</code>
- <code title="get /zones/{zone_id}/api_gateway/user_schemas/{schema_id}">client.apiGateway.userSchemas.<a href="./src/resources/api-gateway/user-schemas/user-schemas.ts">get</a>(schemaId, { ...params }) -> PublicSchema</code>

### Operations

Types:

- <code><a href="./src/resources/api-gateway/user-schemas/operations.ts">OperationListResponse</a></code>

Methods:

- <code title="get /zones/{zone_id}/api_gateway/user_schemas/{schema_id}/operations">client.apiGateway.userSchemas.operations.<a href="./src/resources/api-gateway/user-schemas/operations.ts">list</a>(schemaId, { ...params }) -> OperationListResponsesV4PagePaginationArray</code>

### Hosts

Types:

- <code><a href="./src/resources/api-gateway/user-schemas/hosts.ts">HostListResponse</a></code>

Methods:

- <code title="get /zones/{zone_id}/api_gateway/user_schemas/hosts">client.apiGateway.userSchemas.hosts.<a href="./src/resources/api-gateway/user-schemas/hosts.ts">list</a>({ ...params }) -> HostListResponsesV4PagePaginationArray</code>

## ExpressionTemplate

### Fallthrough

Types:

- <code><a href="./src/resources/api-gateway/expression-template/fallthrough.ts">FallthroughCreateResponse</a></code>

Methods:

- <code title="post /zones/{zone_id}/api_gateway/expression-template/fallthrough">client.apiGateway.expressionTemplate.fallthrough.<a href="./src/resources/api-gateway/expression-template/fallthrough.ts">create</a>({ ...params }) -> FallthroughCreateResponse</code>

# ManagedTransforms

Types:

- <code><a href="./src/resources/managed-transforms.ts">ManagedTransformListResponse</a></code>
- <code><a href="./src/resources/managed-transforms.ts">ManagedTransformEditResponse</a></code>

Methods:

- <code title="get /zones/{zone_id}/managed_headers">client.managedTransforms.<a href="./src/resources/managed-transforms.ts">list</a>({ ...params }) -> ManagedTransformListResponse</code>
- <code title="delete /zones/{zone_id}/managed_headers">client.managedTransforms.<a href="./src/resources/managed-transforms.ts">delete</a>({ ...params }) -> void</code>
- <code title="patch /zones/{zone_id}/managed_headers">client.managedTransforms.<a href="./src/resources/managed-transforms.ts">edit</a>({ ...params }) -> ManagedTransformEditResponse</code>

# PageShield

Types:

- <code><a href="./src/resources/page-shield/page-shield.ts">Setting</a></code>
- <code><a href="./src/resources/page-shield/page-shield.ts">PageShieldUpdateResponse</a></code>

Methods:

- <code title="put /zones/{zone_id}/page_shield">client.pageShield.<a href="./src/resources/page-shield/page-shield.ts">update</a>({ ...params }) -> PageShieldUpdateResponse</code>
- <code title="get /zones/{zone_id}/page_shield">client.pageShield.<a href="./src/resources/page-shield/page-shield.ts">get</a>({ ...params }) -> Setting | null</code>

## Policies

Types:

- <code><a href="./src/resources/page-shield/policies.ts">Policy</a></code>
- <code><a href="./src/resources/page-shield/policies.ts">PolicyCreateResponse</a></code>
- <code><a href="./src/resources/page-shield/policies.ts">PolicyUpdateResponse</a></code>
- <code><a href="./src/resources/page-shield/policies.ts">PolicyListResponse</a></code>
- <code><a href="./src/resources/page-shield/policies.ts">PolicyGetResponse</a></code>

Methods:

- <code title="post /zones/{zone_id}/page_shield/policies">client.pageShield.policies.<a href="./src/resources/page-shield/policies.ts">create</a>({ ...params }) -> PolicyCreateResponse | null</code>
- <code title="put /zones/{zone_id}/page_shield/policies/{policy_id}">client.pageShield.policies.<a href="./src/resources/page-shield/policies.ts">update</a>(policyId, { ...params }) -> PolicyUpdateResponse | null</code>
- <code title="get /zones/{zone_id}/page_shield/policies">client.pageShield.policies.<a href="./src/resources/page-shield/policies.ts">list</a>({ ...params }) -> PolicyListResponsesSinglePage</code>
- <code title="delete /zones/{zone_id}/page_shield/policies/{policy_id}">client.pageShield.policies.<a href="./src/resources/page-shield/policies.ts">delete</a>(policyId, { ...params }) -> void</code>
- <code title="get /zones/{zone_id}/page_shield/policies/{policy_id}">client.pageShield.policies.<a href="./src/resources/page-shield/policies.ts">get</a>(policyId, { ...params }) -> PolicyGetResponse | null</code>

## Connections

Types:

- <code><a href="./src/resources/page-shield/connections.ts">Connection</a></code>

Methods:

- <code title="get /zones/{zone_id}/page_shield/connections">client.pageShield.connections.<a href="./src/resources/page-shield/connections.ts">list</a>({ ...params }) -> ConnectionsSinglePage</code>
- <code title="get /zones/{zone_id}/page_shield/connections/{connection_id}">client.pageShield.connections.<a href="./src/resources/page-shield/connections.ts">get</a>(connectionId, { ...params }) -> Connection | null</code>

## Scripts

Types:

- <code><a href="./src/resources/page-shield/scripts.ts">Script</a></code>
- <code><a href="./src/resources/page-shield/scripts.ts">ScriptGetResponse</a></code>

Methods:

- <code title="get /zones/{zone_id}/page_shield/scripts">client.pageShield.scripts.<a href="./src/resources/page-shield/scripts.ts">list</a>({ ...params }) -> ScriptsSinglePage</code>
- <code title="get /zones/{zone_id}/page_shield/scripts/{script_id}">client.pageShield.scripts.<a href="./src/resources/page-shield/scripts.ts">get</a>(scriptId, { ...params }) -> ScriptGetResponse | null</code>

## Cookies

Types:

- <code><a href="./src/resources/page-shield/cookies.ts">CookieListResponse</a></code>
- <code><a href="./src/resources/page-shield/cookies.ts">CookieGetResponse</a></code>

Methods:

- <code title="get /zones/{zone_id}/page_shield/cookies">client.pageShield.cookies.<a href="./src/resources/page-shield/cookies.ts">list</a>({ ...params }) -> CookieListResponsesSinglePage</code>
- <code title="get /zones/{zone_id}/page_shield/cookies/{cookie_id}">client.pageShield.cookies.<a href="./src/resources/page-shield/cookies.ts">get</a>(cookieId, { ...params }) -> CookieGetResponse | null</code>

# Rulesets

Types:

- <code><a href="./src/resources/rulesets/rulesets.ts">Kind</a></code>
- <code><a href="./src/resources/rulesets/rulesets.ts">Phase</a></code>
- <code><a href="./src/resources/rulesets/rulesets.ts">Ruleset</a></code>
- <code><a href="./src/resources/rulesets/rulesets.ts">RulesetCreateResponse</a></code>
- <code><a href="./src/resources/rulesets/rulesets.ts">RulesetUpdateResponse</a></code>
- <code><a href="./src/resources/rulesets/rulesets.ts">RulesetListResponse</a></code>
- <code><a href="./src/resources/rulesets/rulesets.ts">RulesetGetResponse</a></code>

Methods:

- <code title="post /{accounts_or_zones}/{account_or_zone_id}/rulesets">client.rulesets.<a href="./src/resources/rulesets/rulesets.ts">create</a>({ ...params }) -> RulesetCreateResponse</code>
- <code title="put /{accounts_or_zones}/{account_or_zone_id}/rulesets/{ruleset_id}">client.rulesets.<a href="./src/resources/rulesets/rulesets.ts">update</a>(rulesetId, { ...params }) -> RulesetUpdateResponse</code>
- <code title="get /{accounts_or_zones}/{account_or_zone_id}/rulesets">client.rulesets.<a href="./src/resources/rulesets/rulesets.ts">list</a>({ ...params }) -> RulesetListResponsesCursorPagination</code>
- <code title="delete /{accounts_or_zones}/{account_or_zone_id}/rulesets/{ruleset_id}">client.rulesets.<a href="./src/resources/rulesets/rulesets.ts">delete</a>(rulesetId, { ...params }) -> void</code>
- <code title="get /{accounts_or_zones}/{account_or_zone_id}/rulesets/{ruleset_id}">client.rulesets.<a href="./src/resources/rulesets/rulesets.ts">get</a>(rulesetId, { ...params }) -> RulesetGetResponse</code>

## Phases

Types:

- <code><a href="./src/resources/rulesets/phases/phases.ts">PhaseUpdateResponse</a></code>
- <code><a href="./src/resources/rulesets/phases/phases.ts">PhaseGetResponse</a></code>

Methods:

- <code title="put /{accounts_or_zones}/{account_or_zone_id}/rulesets/phases/{ruleset_phase}/entrypoint">client.rulesets.phases.<a href="./src/resources/rulesets/phases/phases.ts">update</a>(rulesetPhase, { ...params }) -> PhaseUpdateResponse</code>
- <code title="get /{accounts_or_zones}/{account_or_zone_id}/rulesets/phases/{ruleset_phase}/entrypoint">client.rulesets.phases.<a href="./src/resources/rulesets/phases/phases.ts">get</a>(rulesetPhase, { ...params }) -> PhaseGetResponse</code>

### Versions

Types:

- <code><a href="./src/resources/rulesets/phases/versions.ts">VersionListResponse</a></code>
- <code><a href="./src/resources/rulesets/phases/versions.ts">VersionGetResponse</a></code>

Methods:

- <code title="get /{accounts_or_zones}/{account_or_zone_id}/rulesets/phases/{ruleset_phase}/entrypoint/versions">client.rulesets.phases.versions.<a href="./src/resources/rulesets/phases/versions.ts">list</a>(rulesetPhase, { ...params }) -> VersionListResponsesSinglePage</code>
- <code title="get /{accounts_or_zones}/{account_or_zone_id}/rulesets/phases/{ruleset_phase}/entrypoint/versions/{ruleset_version}">client.rulesets.phases.versions.<a href="./src/resources/rulesets/phases/versions.ts">get</a>(rulesetPhase, rulesetVersion, { ...params }) -> VersionGetResponse</code>

## Rules

Types:

- <code><a href="./src/resources/rulesets/rules.ts">BlockRule</a></code>
- <code><a href="./src/resources/rulesets/rules.ts">CompressResponseRule</a></code>
- <code><a href="./src/resources/rulesets/rules.ts">DDoSDynamicRule</a></code>
- <code><a href="./src/resources/rulesets/rules.ts">ExecuteRule</a></code>
- <code><a href="./src/resources/rulesets/rules.ts">ForceConnectionCloseRule</a></code>
- <code><a href="./src/resources/rulesets/rules.ts">LogCustomFieldRule</a></code>
- <code><a href="./src/resources/rulesets/rules.ts">LogRule</a></code>
- <code><a href="./src/resources/rulesets/rules.ts">Logging</a></code>
- <code><a href="./src/resources/rulesets/rules.ts">ManagedChallengeRule</a></code>
- <code><a href="./src/resources/rulesets/rules.ts">RedirectRule</a></code>
- <code><a href="./src/resources/rulesets/rules.ts">RewriteRule</a></code>
- <code><a href="./src/resources/rulesets/rules.ts">RewriteURIPart</a></code>
- <code><a href="./src/resources/rulesets/rules.ts">RouteRule</a></code>
- <code><a href="./src/resources/rulesets/rules.ts">RulesetRule</a></code>
- <code><a href="./src/resources/rulesets/rules.ts">ScoreRule</a></code>
- <code><a href="./src/resources/rulesets/rules.ts">ServeErrorRule</a></code>
- <code><a href="./src/resources/rulesets/rules.ts">SetCacheSettingsRule</a></code>
- <code><a href="./src/resources/rulesets/rules.ts">SetConfigRule</a></code>
- <code><a href="./src/resources/rulesets/rules.ts">SkipRule</a></code>
- <code><a href="./src/resources/rulesets/rules.ts">RuleCreateResponse</a></code>
- <code><a href="./src/resources/rulesets/rules.ts">RuleDeleteResponse</a></code>
- <code><a href="./src/resources/rulesets/rules.ts">RuleEditResponse</a></code>

Methods:

- <code title="post /{accounts_or_zones}/{account_or_zone_id}/rulesets/{ruleset_id}/rules">client.rulesets.rules.<a href="./src/resources/rulesets/rules.ts">create</a>(rulesetId, { ...params }) -> RuleCreateResponse</code>
- <code title="delete /{accounts_or_zones}/{account_or_zone_id}/rulesets/{ruleset_id}/rules/{rule_id}">client.rulesets.rules.<a href="./src/resources/rulesets/rules.ts">delete</a>(rulesetId, ruleId, { ...params }) -> RuleDeleteResponse</code>
- <code title="patch /{accounts_or_zones}/{account_or_zone_id}/rulesets/{ruleset_id}/rules/{rule_id}">client.rulesets.rules.<a href="./src/resources/rulesets/rules.ts">edit</a>(rulesetId, ruleId, { ...params }) -> RuleEditResponse</code>

## Versions

Types:

- <code><a href="./src/resources/rulesets/versions.ts">VersionListResponse</a></code>
- <code><a href="./src/resources/rulesets/versions.ts">VersionGetResponse</a></code>

Methods:

- <code title="get /{accounts_or_zones}/{account_or_zone_id}/rulesets/{ruleset_id}/versions">client.rulesets.versions.<a href="./src/resources/rulesets/versions.ts">list</a>(rulesetId, { ...params }) -> VersionListResponsesSinglePage</code>
- <code title="delete /{accounts_or_zones}/{account_or_zone_id}/rulesets/{ruleset_id}/versions/{ruleset_version}">client.rulesets.versions.<a href="./src/resources/rulesets/versions.ts">delete</a>(rulesetId, rulesetVersion, { ...params }) -> void</code>
- <code title="get /{accounts_or_zones}/{account_or_zone_id}/rulesets/{ruleset_id}/versions/{ruleset_version}">client.rulesets.versions.<a href="./src/resources/rulesets/versions.ts">get</a>(rulesetId, rulesetVersion, { ...params }) -> VersionGetResponse</code>

# URLNormalization

Types:

- <code><a href="./src/resources/url-normalization.ts">URLNormalizationUpdateResponse</a></code>
- <code><a href="./src/resources/url-normalization.ts">URLNormalizationGetResponse</a></code>

Methods:

- <code title="put /zones/{zone_id}/url_normalization">client.urlNormalization.<a href="./src/resources/url-normalization.ts">update</a>({ ...params }) -> URLNormalizationUpdateResponse</code>
- <code title="delete /zones/{zone_id}/url_normalization">client.urlNormalization.<a href="./src/resources/url-normalization.ts">delete</a>({ ...params }) -> void</code>
- <code title="get /zones/{zone_id}/url_normalization">client.urlNormalization.<a href="./src/resources/url-normalization.ts">get</a>({ ...params }) -> URLNormalizationGetResponse</code>

# Spectrum

Types:

- <code><a href="./src/resources/spectrum/spectrum.ts">DNS</a></code>
- <code><a href="./src/resources/spectrum/spectrum.ts">EdgeIPs</a></code>
- <code><a href="./src/resources/spectrum/spectrum.ts">OriginDNS</a></code>
- <code><a href="./src/resources/spectrum/spectrum.ts">OriginPort</a></code>

## Analytics

### Aggregates

#### Currents

Types:

- <code><a href="./src/resources/spectrum/analytics/aggregates/currents.ts">CurrentGetResponse</a></code>

Methods:

- <code title="get /zones/{zone_id}/spectrum/analytics/aggregate/current">client.spectrum.analytics.aggregates.currents.<a href="./src/resources/spectrum/analytics/aggregates/currents.ts">get</a>({ ...params }) -> CurrentGetResponse</code>

### Events

Types:

- <code><a href="./src/resources/spectrum/analytics/events/events.ts">Dimension</a></code>

#### Bytimes

Types:

- <code><a href="./src/resources/spectrum/analytics/events/bytimes.ts">BytimeGetResponse</a></code>

Methods:

- <code title="get /zones/{zone_id}/spectrum/analytics/events/bytime">client.spectrum.analytics.events.bytimes.<a href="./src/resources/spectrum/analytics/events/bytimes.ts">get</a>({ ...params }) -> BytimeGetResponse</code>

#### Summaries

Types:

- <code><a href="./src/resources/spectrum/analytics/events/summaries.ts">SummaryGetResponse</a></code>

Methods:

- <code title="get /zones/{zone_id}/spectrum/analytics/events/summary">client.spectrum.analytics.events.summaries.<a href="./src/resources/spectrum/analytics/events/summaries.ts">get</a>({ ...params }) -> SummaryGetResponse</code>

## Apps

Types:

- <code><a href="./src/resources/spectrum/apps.ts">AppCreateResponse</a></code>
- <code><a href="./src/resources/spectrum/apps.ts">AppUpdateResponse</a></code>
- <code><a href="./src/resources/spectrum/apps.ts">AppListResponse</a></code>
- <code><a href="./src/resources/spectrum/apps.ts">AppDeleteResponse</a></code>
- <code><a href="./src/resources/spectrum/apps.ts">AppGetResponse</a></code>

Methods:

- <code title="post /zones/{zone_id}/spectrum/apps">client.spectrum.apps.<a href="./src/resources/spectrum/apps.ts">create</a>({ ...params }) -> AppCreateResponse</code>
- <code title="put /zones/{zone_id}/spectrum/apps/{app_id}">client.spectrum.apps.<a href="./src/resources/spectrum/apps.ts">update</a>(appId, { ...params }) -> AppUpdateResponse</code>
- <code title="get /zones/{zone_id}/spectrum/apps">client.spectrum.apps.<a href="./src/resources/spectrum/apps.ts">list</a>({ ...params }) -> AppListResponsesV4PagePaginationArray</code>
- <code title="delete /zones/{zone_id}/spectrum/apps/{app_id}">client.spectrum.apps.<a href="./src/resources/spectrum/apps.ts">delete</a>(appId, { ...params }) -> AppDeleteResponse | null</code>
- <code title="get /zones/{zone_id}/spectrum/apps/{app_id}">client.spectrum.apps.<a href="./src/resources/spectrum/apps.ts">get</a>(appId, { ...params }) -> AppGetResponse</code>

# Addressing

## RegionalHostnames

Types:

- <code><a href="./src/resources/addressing/regional-hostnames/regional-hostnames.ts">RegionalHostnameCreateResponse</a></code>
- <code><a href="./src/resources/addressing/regional-hostnames/regional-hostnames.ts">RegionalHostnameListResponse</a></code>
- <code><a href="./src/resources/addressing/regional-hostnames/regional-hostnames.ts">RegionalHostnameDeleteResponse</a></code>
- <code><a href="./src/resources/addressing/regional-hostnames/regional-hostnames.ts">RegionalHostnameEditResponse</a></code>
- <code><a href="./src/resources/addressing/regional-hostnames/regional-hostnames.ts">RegionalHostnameGetResponse</a></code>

Methods:

- <code title="post /zones/{zone_id}/addressing/regional_hostnames">client.addressing.regionalHostnames.<a href="./src/resources/addressing/regional-hostnames/regional-hostnames.ts">create</a>({ ...params }) -> RegionalHostnameCreateResponse</code>
- <code title="get /zones/{zone_id}/addressing/regional_hostnames">client.addressing.regionalHostnames.<a href="./src/resources/addressing/regional-hostnames/regional-hostnames.ts">list</a>({ ...params }) -> RegionalHostnameListResponsesSinglePage</code>
- <code title="delete /zones/{zone_id}/addressing/regional_hostnames/{hostname}">client.addressing.regionalHostnames.<a href="./src/resources/addressing/regional-hostnames/regional-hostnames.ts">delete</a>(hostname, { ...params }) -> RegionalHostnameDeleteResponse</code>
- <code title="patch /zones/{zone_id}/addressing/regional_hostnames/{hostname}">client.addressing.regionalHostnames.<a href="./src/resources/addressing/regional-hostnames/regional-hostnames.ts">edit</a>(hostname, { ...params }) -> RegionalHostnameEditResponse</code>
- <code title="get /zones/{zone_id}/addressing/regional_hostnames/{hostname}">client.addressing.regionalHostnames.<a href="./src/resources/addressing/regional-hostnames/regional-hostnames.ts">get</a>(hostname, { ...params }) -> RegionalHostnameGetResponse</code>

### Regions

Types:

- <code><a href="./src/resources/addressing/regional-hostnames/regions.ts">RegionListResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/addressing/regional_hostnames/regions">client.addressing.regionalHostnames.regions.<a href="./src/resources/addressing/regional-hostnames/regions.ts">list</a>({ ...params }) -> RegionListResponsesSinglePage</code>

## Services

Types:

- <code><a href="./src/resources/addressing/services.ts">ServiceListResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/addressing/services">client.addressing.services.<a href="./src/resources/addressing/services.ts">list</a>({ ...params }) -> ServiceListResponsesSinglePage</code>

## AddressMaps

Types:

- <code><a href="./src/resources/addressing/address-maps/address-maps.ts">AddressMap</a></code>
- <code><a href="./src/resources/addressing/address-maps/address-maps.ts">Kind</a></code>
- <code><a href="./src/resources/addressing/address-maps/address-maps.ts">AddressMapCreateResponse</a></code>
- <code><a href="./src/resources/addressing/address-maps/address-maps.ts">AddressMapDeleteResponse</a></code>
- <code><a href="./src/resources/addressing/address-maps/address-maps.ts">AddressMapGetResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/addressing/address_maps">client.addressing.addressMaps.<a href="./src/resources/addressing/address-maps/address-maps.ts">create</a>({ ...params }) -> AddressMapCreateResponse</code>
- <code title="get /accounts/{account_id}/addressing/address_maps">client.addressing.addressMaps.<a href="./src/resources/addressing/address-maps/address-maps.ts">list</a>({ ...params }) -> AddressMapsSinglePage</code>
- <code title="delete /accounts/{account_id}/addressing/address_maps/{address_map_id}">client.addressing.addressMaps.<a href="./src/resources/addressing/address-maps/address-maps.ts">delete</a>(addressMapId, { ...params }) -> AddressMapDeleteResponse</code>
- <code title="patch /accounts/{account_id}/addressing/address_maps/{address_map_id}">client.addressing.addressMaps.<a href="./src/resources/addressing/address-maps/address-maps.ts">edit</a>(addressMapId, { ...params }) -> AddressMap</code>
- <code title="get /accounts/{account_id}/addressing/address_maps/{address_map_id}">client.addressing.addressMaps.<a href="./src/resources/addressing/address-maps/address-maps.ts">get</a>(addressMapId, { ...params }) -> AddressMapGetResponse</code>

### Accounts

Types:

- <code><a href="./src/resources/addressing/address-maps/accounts.ts">AccountUpdateResponse</a></code>
- <code><a href="./src/resources/addressing/address-maps/accounts.ts">AccountDeleteResponse</a></code>

Methods:

- <code title="put /accounts/{account_id}/addressing/address_maps/{address_map_id}/accounts/{account_id}">client.addressing.addressMaps.accounts.<a href="./src/resources/addressing/address-maps/accounts.ts">update</a>(addressMapId, { ...params }) -> AccountUpdateResponse</code>
- <code title="delete /accounts/{account_id}/addressing/address_maps/{address_map_id}/accounts/{account_id}">client.addressing.addressMaps.accounts.<a href="./src/resources/addressing/address-maps/accounts.ts">delete</a>(addressMapId, { ...params }) -> AccountDeleteResponse</code>

### IPs

Types:

- <code><a href="./src/resources/addressing/address-maps/ips.ts">IPUpdateResponse</a></code>
- <code><a href="./src/resources/addressing/address-maps/ips.ts">IPDeleteResponse</a></code>

Methods:

- <code title="put /accounts/{account_id}/addressing/address_maps/{address_map_id}/ips/{ip_address}">client.addressing.addressMaps.ips.<a href="./src/resources/addressing/address-maps/ips.ts">update</a>(addressMapId, ipAddress, { ...params }) -> IPUpdateResponse</code>
- <code title="delete /accounts/{account_id}/addressing/address_maps/{address_map_id}/ips/{ip_address}">client.addressing.addressMaps.ips.<a href="./src/resources/addressing/address-maps/ips.ts">delete</a>(addressMapId, ipAddress, { ...params }) -> IPDeleteResponse</code>

### Zones

Types:

- <code><a href="./src/resources/addressing/address-maps/zones.ts">ZoneUpdateResponse</a></code>
- <code><a href="./src/resources/addressing/address-maps/zones.ts">ZoneDeleteResponse</a></code>

Methods:

- <code title="put /accounts/{account_id}/addressing/address_maps/{address_map_id}/zones/{zone_id}">client.addressing.addressMaps.zones.<a href="./src/resources/addressing/address-maps/zones.ts">update</a>(addressMapId, { ...params }) -> ZoneUpdateResponse</code>
- <code title="delete /accounts/{account_id}/addressing/address_maps/{address_map_id}/zones/{zone_id}">client.addressing.addressMaps.zones.<a href="./src/resources/addressing/address-maps/zones.ts">delete</a>(addressMapId, { ...params }) -> ZoneDeleteResponse</code>

## LOADocuments

Types:

- <code><a href="./src/resources/addressing/loa-documents.ts">LOADocumentCreateResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/addressing/loa_documents">client.addressing.loaDocuments.<a href="./src/resources/addressing/loa-documents.ts">create</a>({ ...params }) -> LOADocumentCreateResponse</code>
- <code title="get /accounts/{account_id}/addressing/loa_documents/{loa_document_id}/download">client.addressing.loaDocuments.<a href="./src/resources/addressing/loa-documents.ts">get</a>(loaDocumentId, { ...params }) -> Response</code>

## Prefixes

Types:

- <code><a href="./src/resources/addressing/prefixes/prefixes.ts">Prefix</a></code>
- <code><a href="./src/resources/addressing/prefixes/prefixes.ts">PrefixDeleteResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/addressing/prefixes">client.addressing.prefixes.<a href="./src/resources/addressing/prefixes/prefixes.ts">create</a>({ ...params }) -> Prefix</code>
- <code title="get /accounts/{account_id}/addressing/prefixes">client.addressing.prefixes.<a href="./src/resources/addressing/prefixes/prefixes.ts">list</a>({ ...params }) -> PrefixesSinglePage</code>
- <code title="delete /accounts/{account_id}/addressing/prefixes/{prefix_id}">client.addressing.prefixes.<a href="./src/resources/addressing/prefixes/prefixes.ts">delete</a>(prefixId, { ...params }) -> PrefixDeleteResponse</code>
- <code title="patch /accounts/{account_id}/addressing/prefixes/{prefix_id}">client.addressing.prefixes.<a href="./src/resources/addressing/prefixes/prefixes.ts">edit</a>(prefixId, { ...params }) -> Prefix</code>
- <code title="get /accounts/{account_id}/addressing/prefixes/{prefix_id}">client.addressing.prefixes.<a href="./src/resources/addressing/prefixes/prefixes.ts">get</a>(prefixId, { ...params }) -> Prefix</code>

### ServiceBindings

Types:

- <code><a href="./src/resources/addressing/prefixes/service-bindings.ts">ServiceBinding</a></code>
- <code><a href="./src/resources/addressing/prefixes/service-bindings.ts">ServiceBindingDeleteResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/addressing/prefixes/{prefix_id}/bindings">client.addressing.prefixes.serviceBindings.<a href="./src/resources/addressing/prefixes/service-bindings.ts">create</a>(prefixId, { ...params }) -> ServiceBinding</code>
- <code title="get /accounts/{account_id}/addressing/prefixes/{prefix_id}/bindings">client.addressing.prefixes.serviceBindings.<a href="./src/resources/addressing/prefixes/service-bindings.ts">list</a>(prefixId, { ...params }) -> ServiceBindingsSinglePage</code>
- <code title="delete /accounts/{account_id}/addressing/prefixes/{prefix_id}/bindings/{binding_id}">client.addressing.prefixes.serviceBindings.<a href="./src/resources/addressing/prefixes/service-bindings.ts">delete</a>(prefixId, bindingId, { ...params }) -> ServiceBindingDeleteResponse</code>
- <code title="get /accounts/{account_id}/addressing/prefixes/{prefix_id}/bindings/{binding_id}">client.addressing.prefixes.serviceBindings.<a href="./src/resources/addressing/prefixes/service-bindings.ts">get</a>(prefixId, bindingId, { ...params }) -> ServiceBinding</code>

### BGPPrefixes

Types:

- <code><a href="./src/resources/addressing/prefixes/bgp-prefixes.ts">BGPPrefix</a></code>

Methods:

- <code title="post /accounts/{account_id}/addressing/prefixes/{prefix_id}/bgp/prefixes">client.addressing.prefixes.bgpPrefixes.<a href="./src/resources/addressing/prefixes/bgp-prefixes.ts">create</a>(prefixId, { ...params }) -> BGPPrefix</code>
- <code title="get /accounts/{account_id}/addressing/prefixes/{prefix_id}/bgp/prefixes">client.addressing.prefixes.bgpPrefixes.<a href="./src/resources/addressing/prefixes/bgp-prefixes.ts">list</a>(prefixId, { ...params }) -> BGPPrefixesSinglePage</code>
- <code title="patch /accounts/{account_id}/addressing/prefixes/{prefix_id}/bgp/prefixes/{bgp_prefix_id}">client.addressing.prefixes.bgpPrefixes.<a href="./src/resources/addressing/prefixes/bgp-prefixes.ts">edit</a>(prefixId, bgpPrefixId, { ...params }) -> BGPPrefix</code>
- <code title="get /accounts/{account_id}/addressing/prefixes/{prefix_id}/bgp/prefixes/{bgp_prefix_id}">client.addressing.prefixes.bgpPrefixes.<a href="./src/resources/addressing/prefixes/bgp-prefixes.ts">get</a>(prefixId, bgpPrefixId, { ...params }) -> BGPPrefix</code>

### AdvertisementStatus

Types:

- <code><a href="./src/resources/addressing/prefixes/advertisement-status.ts">AdvertisementStatusEditResponse</a></code>
- <code><a href="./src/resources/addressing/prefixes/advertisement-status.ts">AdvertisementStatusGetResponse</a></code>

Methods:

- <code title="patch /accounts/{account_id}/addressing/prefixes/{prefix_id}/bgp/status">client.addressing.prefixes.advertisementStatus.<a href="./src/resources/addressing/prefixes/advertisement-status.ts">edit</a>(prefixId, { ...params }) -> AdvertisementStatusEditResponse</code>
- <code title="get /accounts/{account_id}/addressing/prefixes/{prefix_id}/bgp/status">client.addressing.prefixes.advertisementStatus.<a href="./src/resources/addressing/prefixes/advertisement-status.ts">get</a>(prefixId, { ...params }) -> AdvertisementStatusGetResponse</code>

### Delegations

Types:

- <code><a href="./src/resources/addressing/prefixes/delegations.ts">Delegations</a></code>
- <code><a href="./src/resources/addressing/prefixes/delegations.ts">DelegationDeleteResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/addressing/prefixes/{prefix_id}/delegations">client.addressing.prefixes.delegations.<a href="./src/resources/addressing/prefixes/delegations.ts">create</a>(prefixId, { ...params }) -> Delegations</code>
- <code title="get /accounts/{account_id}/addressing/prefixes/{prefix_id}/delegations">client.addressing.prefixes.delegations.<a href="./src/resources/addressing/prefixes/delegations.ts">list</a>(prefixId, { ...params }) -> DelegationsSinglePage</code>
- <code title="delete /accounts/{account_id}/addressing/prefixes/{prefix_id}/delegations/{delegation_id}">client.addressing.prefixes.delegations.<a href="./src/resources/addressing/prefixes/delegations.ts">delete</a>(prefixId, delegationId, { ...params }) -> DelegationDeleteResponse</code>

# AuditLogs

Methods:

- <code title="get /accounts/{account_id}/audit_logs">client.auditLogs.<a href="./src/resources/audit-logs.ts">list</a>({ ...params }) -> AuditLogsV4PagePaginationArray</code>

# Billing

## Profiles

Types:

- <code><a href="./src/resources/billing/profiles.ts">ProfileGetResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/billing/profile">client.billing.profiles.<a href="./src/resources/billing/profiles.ts">get</a>({ ...params }) -> ProfileGetResponse</code>

# BrandProtection

Types:

- <code><a href="./src/resources/brand-protection/brand-protection.ts">Info</a></code>
- <code><a href="./src/resources/brand-protection/brand-protection.ts">RuleMatch</a></code>
- <code><a href="./src/resources/brand-protection/brand-protection.ts">ScanStatus</a></code>
- <code><a href="./src/resources/brand-protection/brand-protection.ts">Submit</a></code>
- <code><a href="./src/resources/brand-protection/brand-protection.ts">URLInfoModelResults</a></code>

Methods:

- <code title="post /accounts/{account_id}/brand-protection/submit">client.brandProtection.<a href="./src/resources/brand-protection/brand-protection.ts">submit</a>({ ...params }) -> Submit</code>
- <code title="get /accounts/{account_id}/brand-protection/url-info">client.brandProtection.<a href="./src/resources/brand-protection/brand-protection.ts">urlInfo</a>({ ...params }) -> Info</code>

## Queries

## Matches

## Logos

## LogoMatches

# Diagnostics

## Traceroutes

Types:

- <code><a href="./src/resources/diagnostics/traceroutes.ts">Traceroute</a></code>

Methods:

- <code title="post /accounts/{account_id}/diagnostics/traceroute">client.diagnostics.traceroutes.<a href="./src/resources/diagnostics/traceroutes.ts">create</a>({ ...params }) -> TraceroutesSinglePage</code>

# Images

## V1

Types:

- <code><a href="./src/resources/images/v1/v1.ts">Image</a></code>
- <code><a href="./src/resources/images/v1/v1.ts">V1ListResponse</a></code>
- <code><a href="./src/resources/images/v1/v1.ts">V1DeleteResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/images/v1">client.images.v1.<a href="./src/resources/images/v1/v1.ts">create</a>({ ...params }) -> Image</code>
- <code title="get /accounts/{account_id}/images/v1">client.images.v1.<a href="./src/resources/images/v1/v1.ts">list</a>({ ...params }) -> V1ListResponsesV4PagePagination</code>
- <code title="delete /accounts/{account_id}/images/v1/{image_id}">client.images.v1.<a href="./src/resources/images/v1/v1.ts">delete</a>(imageId, { ...params }) -> V1DeleteResponse</code>
- <code title="patch /accounts/{account_id}/images/v1/{image_id}">client.images.v1.<a href="./src/resources/images/v1/v1.ts">edit</a>(imageId, { ...params }) -> Image</code>
- <code title="get /accounts/{account_id}/images/v1/{image_id}">client.images.v1.<a href="./src/resources/images/v1/v1.ts">get</a>(imageId, { ...params }) -> Image</code>

### Keys

Types:

- <code><a href="./src/resources/images/v1/keys.ts">Key</a></code>
- <code><a href="./src/resources/images/v1/keys.ts">KeyUpdateResponse</a></code>
- <code><a href="./src/resources/images/v1/keys.ts">KeyListResponse</a></code>
- <code><a href="./src/resources/images/v1/keys.ts">KeyDeleteResponse</a></code>

Methods:

- <code title="put /accounts/{account_id}/images/v1/keys/{signing_key_name}">client.images.v1.keys.<a href="./src/resources/images/v1/keys.ts">update</a>(signingKeyName, { ...params }) -> KeyUpdateResponse</code>
- <code title="get /accounts/{account_id}/images/v1/keys">client.images.v1.keys.<a href="./src/resources/images/v1/keys.ts">list</a>({ ...params }) -> KeyListResponse</code>
- <code title="delete /accounts/{account_id}/images/v1/keys/{signing_key_name}">client.images.v1.keys.<a href="./src/resources/images/v1/keys.ts">delete</a>(signingKeyName, { ...params }) -> KeyDeleteResponse</code>

### Stats

Types:

- <code><a href="./src/resources/images/v1/stats.ts">Stat</a></code>

Methods:

- <code title="get /accounts/{account_id}/images/v1/stats">client.images.v1.stats.<a href="./src/resources/images/v1/stats.ts">get</a>({ ...params }) -> Stat</code>

### Variants

Types:

- <code><a href="./src/resources/images/v1/variants.ts">Variant</a></code>
- <code><a href="./src/resources/images/v1/variants.ts">VariantCreateResponse</a></code>
- <code><a href="./src/resources/images/v1/variants.ts">VariantDeleteResponse</a></code>
- <code><a href="./src/resources/images/v1/variants.ts">VariantEditResponse</a></code>
- <code><a href="./src/resources/images/v1/variants.ts">VariantGetResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/images/v1/variants">client.images.v1.variants.<a href="./src/resources/images/v1/variants.ts">create</a>({ ...params }) -> VariantCreateResponse</code>
- <code title="get /accounts/{account_id}/images/v1/variants">client.images.v1.variants.<a href="./src/resources/images/v1/variants.ts">list</a>({ ...params }) -> Variant</code>
- <code title="delete /accounts/{account_id}/images/v1/variants/{variant_id}">client.images.v1.variants.<a href="./src/resources/images/v1/variants.ts">delete</a>(variantId, { ...params }) -> VariantDeleteResponse</code>
- <code title="patch /accounts/{account_id}/images/v1/variants/{variant_id}">client.images.v1.variants.<a href="./src/resources/images/v1/variants.ts">edit</a>(variantId, { ...params }) -> VariantEditResponse</code>
- <code title="get /accounts/{account_id}/images/v1/variants/{variant_id}">client.images.v1.variants.<a href="./src/resources/images/v1/variants.ts">get</a>(variantId, { ...params }) -> VariantGetResponse</code>

### Blobs

Methods:

- <code title="get /accounts/{account_id}/images/v1/{image_id}/blob">client.images.v1.blobs.<a href="./src/resources/images/v1/blobs.ts">get</a>(imageId, { ...params }) -> Response</code>

## V2

Types:

- <code><a href="./src/resources/images/v2/v2.ts">V2ListResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/images/v2">client.images.v2.<a href="./src/resources/images/v2/v2.ts">list</a>({ ...params }) -> V2ListResponse</code>

### DirectUploads

Types:

- <code><a href="./src/resources/images/v2/direct-uploads.ts">DirectUploadCreateResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/images/v2/direct_upload">client.images.v2.directUploads.<a href="./src/resources/images/v2/direct-uploads.ts">create</a>({ ...params }) -> DirectUploadCreateResponse</code>

# Intel

## ASN

Methods:

- <code title="get /accounts/{account_id}/intel/asn/{asn}">client.intel.asn.<a href="./src/resources/intel/asn/asn.ts">get</a>(asn, { ...params }) -> ASN</code>

### Subnets

Types:

- <code><a href="./src/resources/intel/asn/subnets.ts">SubnetGetResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/intel/asn/{asn}/subnets">client.intel.asn.subnets.<a href="./src/resources/intel/asn/subnets.ts">get</a>(asn, { ...params }) -> SubnetGetResponse</code>

## DNS

Types:

- <code><a href="./src/resources/intel/dns.ts">DNS</a></code>

Methods:

- <code title="get /accounts/{account_id}/intel/dns">client.intel.dns.<a href="./src/resources/intel/dns.ts">list</a>({ ...params }) -> DNSV4PagePagination</code>

## Domains

Types:

- <code><a href="./src/resources/intel/domains/domains.ts">Domain</a></code>

Methods:

- <code title="get /accounts/{account_id}/intel/domain">client.intel.domains.<a href="./src/resources/intel/domains/domains.ts">get</a>({ ...params }) -> Domain</code>

### Bulks

Types:

- <code><a href="./src/resources/intel/domains/bulks.ts">BulkGetResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/intel/domain/bulk">client.intel.domains.bulks.<a href="./src/resources/intel/domains/bulks.ts">get</a>({ ...params }) -> BulkGetResponse | null</code>

## DomainHistory

Types:

- <code><a href="./src/resources/intel/domain-history.ts">DomainHistory</a></code>
- <code><a href="./src/resources/intel/domain-history.ts">DomainHistoryGetResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/intel/domain-history">client.intel.domainHistory.<a href="./src/resources/intel/domain-history.ts">get</a>({ ...params }) -> DomainHistoryGetResponse | null</code>

## IPs

Types:

- <code><a href="./src/resources/intel/ips.ts">IP</a></code>
- <code><a href="./src/resources/intel/ips.ts">IPGetResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/intel/ip">client.intel.ips.<a href="./src/resources/intel/ips.ts">get</a>({ ...params }) -> IPGetResponse | null</code>

## IPLists

Types:

- <code><a href="./src/resources/intel/ip-lists.ts">IPList</a></code>

Methods:

- <code title="get /accounts/{account_id}/intel/ip-list">client.intel.ipLists.<a href="./src/resources/intel/ip-lists.ts">get</a>({ ...params }) -> IPListsSinglePage</code>

## Miscategorizations

Types:

- <code><a href="./src/resources/intel/miscategorizations.ts">MiscategorizationCreateResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/intel/miscategorization">client.intel.miscategorizations.<a href="./src/resources/intel/miscategorizations.ts">create</a>({ ...params }) -> MiscategorizationCreateResponse</code>

## Whois

Types:

- <code><a href="./src/resources/intel/whois.ts">Whois</a></code>
- <code><a href="./src/resources/intel/whois.ts">WhoisGetResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/intel/whois">client.intel.whois.<a href="./src/resources/intel/whois.ts">get</a>({ ...params }) -> WhoisGetResponse</code>

## IndicatorFeeds

Types:

- <code><a href="./src/resources/intel/indicator-feeds/indicator-feeds.ts">IndicatorFeedCreateResponse</a></code>
- <code><a href="./src/resources/intel/indicator-feeds/indicator-feeds.ts">IndicatorFeedUpdateResponse</a></code>
- <code><a href="./src/resources/intel/indicator-feeds/indicator-feeds.ts">IndicatorFeedListResponse</a></code>
- <code><a href="./src/resources/intel/indicator-feeds/indicator-feeds.ts">IndicatorFeedDataResponse</a></code>
- <code><a href="./src/resources/intel/indicator-feeds/indicator-feeds.ts">IndicatorFeedGetResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/intel/indicator-feeds">client.intel.indicatorFeeds.<a href="./src/resources/intel/indicator-feeds/indicator-feeds.ts">create</a>({ ...params }) -> IndicatorFeedCreateResponse</code>
- <code title="put /accounts/{account_id}/intel/indicator-feeds/{feed_id}">client.intel.indicatorFeeds.<a href="./src/resources/intel/indicator-feeds/indicator-feeds.ts">update</a>(feedId, { ...params }) -> IndicatorFeedUpdateResponse</code>
- <code title="get /accounts/{account_id}/intel/indicator-feeds">client.intel.indicatorFeeds.<a href="./src/resources/intel/indicator-feeds/indicator-feeds.ts">list</a>({ ...params }) -> IndicatorFeedListResponsesSinglePage</code>
- <code title="get /accounts/{account_id}/intel/indicator-feeds/{feed_id}/data">client.intel.indicatorFeeds.<a href="./src/resources/intel/indicator-feeds/indicator-feeds.ts">data</a>(feedId, { ...params }) -> string</code>
- <code title="get /accounts/{account_id}/intel/indicator-feeds/{feed_id}">client.intel.indicatorFeeds.<a href="./src/resources/intel/indicator-feeds/indicator-feeds.ts">get</a>(feedId, { ...params }) -> IndicatorFeedGetResponse</code>

### Snapshots

Types:

- <code><a href="./src/resources/intel/indicator-feeds/snapshots.ts">SnapshotUpdateResponse</a></code>

Methods:

- <code title="put /accounts/{account_id}/intel/indicator-feeds/{feed_id}/snapshot">client.intel.indicatorFeeds.snapshots.<a href="./src/resources/intel/indicator-feeds/snapshots.ts">update</a>(feedId, { ...params }) -> SnapshotUpdateResponse</code>

### Permissions

Types:

- <code><a href="./src/resources/intel/indicator-feeds/permissions.ts">PermissionCreateResponse</a></code>
- <code><a href="./src/resources/intel/indicator-feeds/permissions.ts">PermissionListResponse</a></code>
- <code><a href="./src/resources/intel/indicator-feeds/permissions.ts">PermissionDeleteResponse</a></code>

Methods:

- <code title="put /accounts/{account_id}/intel/indicator-feeds/permissions/add">client.intel.indicatorFeeds.permissions.<a href="./src/resources/intel/indicator-feeds/permissions.ts">create</a>({ ...params }) -> PermissionCreateResponse</code>
- <code title="get /accounts/{account_id}/intel/indicator-feeds/permissions/view">client.intel.indicatorFeeds.permissions.<a href="./src/resources/intel/indicator-feeds/permissions.ts">list</a>({ ...params }) -> PermissionListResponse</code>
- <code title="put /accounts/{account_id}/intel/indicator-feeds/permissions/remove">client.intel.indicatorFeeds.permissions.<a href="./src/resources/intel/indicator-feeds/permissions.ts">delete</a>({ ...params }) -> PermissionDeleteResponse</code>

### Downloads

Types:

- <code><a href="./src/resources/intel/indicator-feeds/downloads.ts">DownloadGetResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/intel/indicator_feeds/{feed_id}/download">client.intel.indicatorFeeds.downloads.<a href="./src/resources/intel/indicator-feeds/downloads.ts">get</a>(feedId, { ...params }) -> DownloadGetResponse</code>

## Sinkholes

Types:

- <code><a href="./src/resources/intel/sinkholes.ts">Sinkhole</a></code>

Methods:

- <code title="get /accounts/{account_id}/intel/sinkholes">client.intel.sinkholes.<a href="./src/resources/intel/sinkholes.ts">list</a>({ ...params }) -> SinkholesSinglePage</code>

## AttackSurfaceReport

### IssueTypes

Types:

- <code><a href="./src/resources/intel/attack-surface-report/issue-types.ts">IssueTypeGetResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/intel/attack-surface-report/issue-types">client.intel.attackSurfaceReport.issueTypes.<a href="./src/resources/intel/attack-surface-report/issue-types.ts">get</a>({ ...params }) -> IssueTypeGetResponsesSinglePage</code>

### Issues

Types:

- <code><a href="./src/resources/intel/attack-surface-report/issues.ts">IssueType</a></code>
- <code><a href="./src/resources/intel/attack-surface-report/issues.ts">SeverityQueryParam</a></code>
- <code><a href="./src/resources/intel/attack-surface-report/issues.ts">IssueListResponse</a></code>
- <code><a href="./src/resources/intel/attack-surface-report/issues.ts">IssueClassResponse</a></code>
- <code><a href="./src/resources/intel/attack-surface-report/issues.ts">IssueDismissResponse</a></code>
- <code><a href="./src/resources/intel/attack-surface-report/issues.ts">IssueSeverityResponse</a></code>
- <code><a href="./src/resources/intel/attack-surface-report/issues.ts">IssueTypeResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/intel/attack-surface-report/issues">client.intel.attackSurfaceReport.issues.<a href="./src/resources/intel/attack-surface-report/issues.ts">list</a>({ ...params }) -> IssueListResponsesV4PagePagination</code>
- <code title="get /accounts/{account_id}/intel/attack-surface-report/issues/class">client.intel.attackSurfaceReport.issues.<a href="./src/resources/intel/attack-surface-report/issues.ts">class</a>({ ...params }) -> IssueClassResponse</code>
- <code title="put /accounts/{account_id}/intel/attack-surface-report/{issue_id}/dismiss">client.intel.attackSurfaceReport.issues.<a href="./src/resources/intel/attack-surface-report/issues.ts">dismiss</a>(issueId, { ...params }) -> IssueDismissResponse</code>
- <code title="get /accounts/{account_id}/intel/attack-surface-report/issues/severity">client.intel.attackSurfaceReport.issues.<a href="./src/resources/intel/attack-surface-report/issues.ts">severity</a>({ ...params }) -> IssueSeverityResponse</code>
- <code title="get /accounts/{account_id}/intel/attack-surface-report/issues/type">client.intel.attackSurfaceReport.issues.<a href="./src/resources/intel/attack-surface-report/issues.ts">type</a>({ ...params }) -> IssueTypeResponse</code>

# MagicTransit

Types:

- <code><a href="./src/resources/magic-transit/magic-transit.ts">HealthCheck</a></code>
- <code><a href="./src/resources/magic-transit/magic-transit.ts">HealthCheckRate</a></code>
- <code><a href="./src/resources/magic-transit/magic-transit.ts">HealthCheckType</a></code>

## Apps

Types:

- <code><a href="./src/resources/magic-transit/apps.ts">AppCreateResponse</a></code>
- <code><a href="./src/resources/magic-transit/apps.ts">AppUpdateResponse</a></code>
- <code><a href="./src/resources/magic-transit/apps.ts">AppListResponse</a></code>
- <code><a href="./src/resources/magic-transit/apps.ts">AppDeleteResponse</a></code>
- <code><a href="./src/resources/magic-transit/apps.ts">AppEditResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/magic/apps">client.magicTransit.apps.<a href="./src/resources/magic-transit/apps.ts">create</a>({ ...params }) -> AppCreateResponse | null</code>
- <code title="put /accounts/{account_id}/magic/apps/{account_app_id}">client.magicTransit.apps.<a href="./src/resources/magic-transit/apps.ts">update</a>(accountAppId, { ...params }) -> AppUpdateResponse | null</code>
- <code title="get /accounts/{account_id}/magic/apps">client.magicTransit.apps.<a href="./src/resources/magic-transit/apps.ts">list</a>({ ...params }) -> AppListResponsesSinglePage</code>
- <code title="delete /accounts/{account_id}/magic/apps/{account_app_id}">client.magicTransit.apps.<a href="./src/resources/magic-transit/apps.ts">delete</a>(accountAppId, { ...params }) -> AppDeleteResponse | null</code>
- <code title="patch /accounts/{account_id}/magic/apps/{account_app_id}">client.magicTransit.apps.<a href="./src/resources/magic-transit/apps.ts">edit</a>(accountAppId, { ...params }) -> AppEditResponse | null</code>

## CfInterconnects

Types:

- <code><a href="./src/resources/magic-transit/cf-interconnects.ts">CfInterconnectUpdateResponse</a></code>
- <code><a href="./src/resources/magic-transit/cf-interconnects.ts">CfInterconnectListResponse</a></code>
- <code><a href="./src/resources/magic-transit/cf-interconnects.ts">CfInterconnectBulkUpdateResponse</a></code>
- <code><a href="./src/resources/magic-transit/cf-interconnects.ts">CfInterconnectGetResponse</a></code>

Methods:

- <code title="put /accounts/{account_id}/magic/cf_interconnects/{cf_interconnect_id}">client.magicTransit.cfInterconnects.<a href="./src/resources/magic-transit/cf-interconnects.ts">update</a>(cfInterconnectId, { ...params }) -> CfInterconnectUpdateResponse</code>
- <code title="get /accounts/{account_id}/magic/cf_interconnects">client.magicTransit.cfInterconnects.<a href="./src/resources/magic-transit/cf-interconnects.ts">list</a>({ ...params }) -> CfInterconnectListResponse</code>
- <code title="put /accounts/{account_id}/magic/cf_interconnects">client.magicTransit.cfInterconnects.<a href="./src/resources/magic-transit/cf-interconnects.ts">bulkUpdate</a>({ ...params }) -> CfInterconnectBulkUpdateResponse</code>
- <code title="get /accounts/{account_id}/magic/cf_interconnects/{cf_interconnect_id}">client.magicTransit.cfInterconnects.<a href="./src/resources/magic-transit/cf-interconnects.ts">get</a>(cfInterconnectId, { ...params }) -> CfInterconnectGetResponse</code>

## GRETunnels

Types:

- <code><a href="./src/resources/magic-transit/gre-tunnels.ts">GRETunnelCreateResponse</a></code>
- <code><a href="./src/resources/magic-transit/gre-tunnels.ts">GRETunnelUpdateResponse</a></code>
- <code><a href="./src/resources/magic-transit/gre-tunnels.ts">GRETunnelListResponse</a></code>
- <code><a href="./src/resources/magic-transit/gre-tunnels.ts">GRETunnelDeleteResponse</a></code>
- <code><a href="./src/resources/magic-transit/gre-tunnels.ts">GRETunnelBulkUpdateResponse</a></code>
- <code><a href="./src/resources/magic-transit/gre-tunnels.ts">GRETunnelGetResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/magic/gre_tunnels">client.magicTransit.greTunnels.<a href="./src/resources/magic-transit/gre-tunnels.ts">create</a>({ ...params }) -> GRETunnelCreateResponse</code>
- <code title="put /accounts/{account_id}/magic/gre_tunnels/{gre_tunnel_id}">client.magicTransit.greTunnels.<a href="./src/resources/magic-transit/gre-tunnels.ts">update</a>(greTunnelId, { ...params }) -> GRETunnelUpdateResponse</code>
- <code title="get /accounts/{account_id}/magic/gre_tunnels">client.magicTransit.greTunnels.<a href="./src/resources/magic-transit/gre-tunnels.ts">list</a>({ ...params }) -> GRETunnelListResponse</code>
- <code title="delete /accounts/{account_id}/magic/gre_tunnels/{gre_tunnel_id}">client.magicTransit.greTunnels.<a href="./src/resources/magic-transit/gre-tunnels.ts">delete</a>(greTunnelId, { ...params }) -> GRETunnelDeleteResponse</code>
- <code title="put /accounts/{account_id}/magic/gre_tunnels">client.magicTransit.greTunnels.<a href="./src/resources/magic-transit/gre-tunnels.ts">bulkUpdate</a>({ ...params }) -> GRETunnelBulkUpdateResponse</code>
- <code title="get /accounts/{account_id}/magic/gre_tunnels/{gre_tunnel_id}">client.magicTransit.greTunnels.<a href="./src/resources/magic-transit/gre-tunnels.ts">get</a>(greTunnelId, { ...params }) -> GRETunnelGetResponse</code>

## IPSECTunnels

Types:

- <code><a href="./src/resources/magic-transit/ipsec-tunnels.ts">PSKMetadata</a></code>
- <code><a href="./src/resources/magic-transit/ipsec-tunnels.ts">IPSECTunnelCreateResponse</a></code>
- <code><a href="./src/resources/magic-transit/ipsec-tunnels.ts">IPSECTunnelUpdateResponse</a></code>
- <code><a href="./src/resources/magic-transit/ipsec-tunnels.ts">IPSECTunnelListResponse</a></code>
- <code><a href="./src/resources/magic-transit/ipsec-tunnels.ts">IPSECTunnelDeleteResponse</a></code>
- <code><a href="./src/resources/magic-transit/ipsec-tunnels.ts">IPSECTunnelBulkUpdateResponse</a></code>
- <code><a href="./src/resources/magic-transit/ipsec-tunnels.ts">IPSECTunnelGetResponse</a></code>
- <code><a href="./src/resources/magic-transit/ipsec-tunnels.ts">IPSECTunnelPSKGenerateResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/magic/ipsec_tunnels">client.magicTransit.ipsecTunnels.<a href="./src/resources/magic-transit/ipsec-tunnels.ts">create</a>({ ...params }) -> IPSECTunnelCreateResponse</code>
- <code title="put /accounts/{account_id}/magic/ipsec_tunnels/{ipsec_tunnel_id}">client.magicTransit.ipsecTunnels.<a href="./src/resources/magic-transit/ipsec-tunnels.ts">update</a>(ipsecTunnelId, { ...params }) -> IPSECTunnelUpdateResponse</code>
- <code title="get /accounts/{account_id}/magic/ipsec_tunnels">client.magicTransit.ipsecTunnels.<a href="./src/resources/magic-transit/ipsec-tunnels.ts">list</a>({ ...params }) -> IPSECTunnelListResponse</code>
- <code title="delete /accounts/{account_id}/magic/ipsec_tunnels/{ipsec_tunnel_id}">client.magicTransit.ipsecTunnels.<a href="./src/resources/magic-transit/ipsec-tunnels.ts">delete</a>(ipsecTunnelId, { ...params }) -> IPSECTunnelDeleteResponse</code>
- <code title="put /accounts/{account_id}/magic/ipsec_tunnels">client.magicTransit.ipsecTunnels.<a href="./src/resources/magic-transit/ipsec-tunnels.ts">bulkUpdate</a>({ ...params }) -> IPSECTunnelBulkUpdateResponse</code>
- <code title="get /accounts/{account_id}/magic/ipsec_tunnels/{ipsec_tunnel_id}">client.magicTransit.ipsecTunnels.<a href="./src/resources/magic-transit/ipsec-tunnels.ts">get</a>(ipsecTunnelId, { ...params }) -> IPSECTunnelGetResponse</code>
- <code title="post /accounts/{account_id}/magic/ipsec_tunnels/{ipsec_tunnel_id}/psk_generate">client.magicTransit.ipsecTunnels.<a href="./src/resources/magic-transit/ipsec-tunnels.ts">pskGenerate</a>(ipsecTunnelId, { ...params }) -> IPSECTunnelPSKGenerateResponse</code>

## Routes

Types:

- <code><a href="./src/resources/magic-transit/routes.ts">Scope</a></code>
- <code><a href="./src/resources/magic-transit/routes.ts">RouteCreateResponse</a></code>
- <code><a href="./src/resources/magic-transit/routes.ts">RouteUpdateResponse</a></code>
- <code><a href="./src/resources/magic-transit/routes.ts">RouteListResponse</a></code>
- <code><a href="./src/resources/magic-transit/routes.ts">RouteDeleteResponse</a></code>
- <code><a href="./src/resources/magic-transit/routes.ts">RouteBulkUpdateResponse</a></code>
- <code><a href="./src/resources/magic-transit/routes.ts">RouteEmptyResponse</a></code>
- <code><a href="./src/resources/magic-transit/routes.ts">RouteGetResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/magic/routes">client.magicTransit.routes.<a href="./src/resources/magic-transit/routes.ts">create</a>({ ...params }) -> RouteCreateResponse</code>
- <code title="put /accounts/{account_id}/magic/routes/{route_id}">client.magicTransit.routes.<a href="./src/resources/magic-transit/routes.ts">update</a>(routeId, { ...params }) -> RouteUpdateResponse</code>
- <code title="get /accounts/{account_id}/magic/routes">client.magicTransit.routes.<a href="./src/resources/magic-transit/routes.ts">list</a>({ ...params }) -> RouteListResponse</code>
- <code title="delete /accounts/{account_id}/magic/routes/{route_id}">client.magicTransit.routes.<a href="./src/resources/magic-transit/routes.ts">delete</a>(routeId, { ...params }) -> RouteDeleteResponse</code>
- <code title="put /accounts/{account_id}/magic/routes">client.magicTransit.routes.<a href="./src/resources/magic-transit/routes.ts">bulkUpdate</a>({ ...params }) -> RouteBulkUpdateResponse</code>
- <code title="delete /accounts/{account_id}/magic/routes">client.magicTransit.routes.<a href="./src/resources/magic-transit/routes.ts">empty</a>({ ...params }) -> RouteEmptyResponse</code>
- <code title="get /accounts/{account_id}/magic/routes/{route_id}">client.magicTransit.routes.<a href="./src/resources/magic-transit/routes.ts">get</a>(routeId, { ...params }) -> RouteGetResponse</code>

## Sites

Types:

- <code><a href="./src/resources/magic-transit/sites/sites.ts">Site</a></code>
- <code><a href="./src/resources/magic-transit/sites/sites.ts">SiteLocation</a></code>

Methods:

- <code title="post /accounts/{account_id}/magic/sites">client.magicTransit.sites.<a href="./src/resources/magic-transit/sites/sites.ts">create</a>({ ...params }) -> Site</code>
- <code title="put /accounts/{account_id}/magic/sites/{site_id}">client.magicTransit.sites.<a href="./src/resources/magic-transit/sites/sites.ts">update</a>(siteId, { ...params }) -> Site</code>
- <code title="get /accounts/{account_id}/magic/sites">client.magicTransit.sites.<a href="./src/resources/magic-transit/sites/sites.ts">list</a>({ ...params }) -> SitesSinglePage</code>
- <code title="delete /accounts/{account_id}/magic/sites/{site_id}">client.magicTransit.sites.<a href="./src/resources/magic-transit/sites/sites.ts">delete</a>(siteId, { ...params }) -> Site</code>
- <code title="patch /accounts/{account_id}/magic/sites/{site_id}">client.magicTransit.sites.<a href="./src/resources/magic-transit/sites/sites.ts">edit</a>(siteId, { ...params }) -> Site</code>
- <code title="get /accounts/{account_id}/magic/sites/{site_id}">client.magicTransit.sites.<a href="./src/resources/magic-transit/sites/sites.ts">get</a>(siteId, { ...params }) -> Site</code>

### ACLs

Types:

- <code><a href="./src/resources/magic-transit/sites/acls.ts">ACL</a></code>
- <code><a href="./src/resources/magic-transit/sites/acls.ts">ACLConfiguration</a></code>
- <code><a href="./src/resources/magic-transit/sites/acls.ts">AllowedProtocol</a></code>
- <code><a href="./src/resources/magic-transit/sites/acls.ts">Subnet</a></code>

Methods:

- <code title="post /accounts/{account_id}/magic/sites/{site_id}/acls">client.magicTransit.sites.acls.<a href="./src/resources/magic-transit/sites/acls.ts">create</a>(siteId, { ...params }) -> ACL</code>
- <code title="put /accounts/{account_id}/magic/sites/{site_id}/acls/{acl_id}">client.magicTransit.sites.acls.<a href="./src/resources/magic-transit/sites/acls.ts">update</a>(siteId, aclId, { ...params }) -> ACL</code>
- <code title="get /accounts/{account_id}/magic/sites/{site_id}/acls">client.magicTransit.sites.acls.<a href="./src/resources/magic-transit/sites/acls.ts">list</a>(siteId, { ...params }) -> ACLsSinglePage</code>
- <code title="delete /accounts/{account_id}/magic/sites/{site_id}/acls/{acl_id}">client.magicTransit.sites.acls.<a href="./src/resources/magic-transit/sites/acls.ts">delete</a>(siteId, aclId, { ...params }) -> ACL</code>
- <code title="patch /accounts/{account_id}/magic/sites/{site_id}/acls/{acl_id}">client.magicTransit.sites.acls.<a href="./src/resources/magic-transit/sites/acls.ts">edit</a>(siteId, aclId, { ...params }) -> ACL</code>
- <code title="get /accounts/{account_id}/magic/sites/{site_id}/acls/{acl_id}">client.magicTransit.sites.acls.<a href="./src/resources/magic-transit/sites/acls.ts">get</a>(siteId, aclId, { ...params }) -> ACL</code>

### LANs

Types:

- <code><a href="./src/resources/magic-transit/sites/lans.ts">DHCPRelay</a></code>
- <code><a href="./src/resources/magic-transit/sites/lans.ts">DHCPServer</a></code>
- <code><a href="./src/resources/magic-transit/sites/lans.ts">LAN</a></code>
- <code><a href="./src/resources/magic-transit/sites/lans.ts">LANStaticAddressing</a></code>
- <code><a href="./src/resources/magic-transit/sites/lans.ts">Nat</a></code>
- <code><a href="./src/resources/magic-transit/sites/lans.ts">RoutedSubnet</a></code>

Methods:

- <code title="post /accounts/{account_id}/magic/sites/{site_id}/lans">client.magicTransit.sites.lans.<a href="./src/resources/magic-transit/sites/lans.ts">create</a>(siteId, { ...params }) -> LANsSinglePage</code>
- <code title="put /accounts/{account_id}/magic/sites/{site_id}/lans/{lan_id}">client.magicTransit.sites.lans.<a href="./src/resources/magic-transit/sites/lans.ts">update</a>(siteId, lanId, { ...params }) -> LAN</code>
- <code title="get /accounts/{account_id}/magic/sites/{site_id}/lans">client.magicTransit.sites.lans.<a href="./src/resources/magic-transit/sites/lans.ts">list</a>(siteId, { ...params }) -> LANsSinglePage</code>
- <code title="delete /accounts/{account_id}/magic/sites/{site_id}/lans/{lan_id}">client.magicTransit.sites.lans.<a href="./src/resources/magic-transit/sites/lans.ts">delete</a>(siteId, lanId, { ...params }) -> LAN</code>
- <code title="patch /accounts/{account_id}/magic/sites/{site_id}/lans/{lan_id}">client.magicTransit.sites.lans.<a href="./src/resources/magic-transit/sites/lans.ts">edit</a>(siteId, lanId, { ...params }) -> LAN</code>
- <code title="get /accounts/{account_id}/magic/sites/{site_id}/lans/{lan_id}">client.magicTransit.sites.lans.<a href="./src/resources/magic-transit/sites/lans.ts">get</a>(siteId, lanId, { ...params }) -> LAN</code>

### WANs

Types:

- <code><a href="./src/resources/magic-transit/sites/wans.ts">WAN</a></code>
- <code><a href="./src/resources/magic-transit/sites/wans.ts">WANStaticAddressing</a></code>

Methods:

- <code title="post /accounts/{account_id}/magic/sites/{site_id}/wans">client.magicTransit.sites.wans.<a href="./src/resources/magic-transit/sites/wans.ts">create</a>(siteId, { ...params }) -> WANsSinglePage</code>
- <code title="put /accounts/{account_id}/magic/sites/{site_id}/wans/{wan_id}">client.magicTransit.sites.wans.<a href="./src/resources/magic-transit/sites/wans.ts">update</a>(siteId, wanId, { ...params }) -> WAN</code>
- <code title="get /accounts/{account_id}/magic/sites/{site_id}/wans">client.magicTransit.sites.wans.<a href="./src/resources/magic-transit/sites/wans.ts">list</a>(siteId, { ...params }) -> WANsSinglePage</code>
- <code title="delete /accounts/{account_id}/magic/sites/{site_id}/wans/{wan_id}">client.magicTransit.sites.wans.<a href="./src/resources/magic-transit/sites/wans.ts">delete</a>(siteId, wanId, { ...params }) -> WAN</code>
- <code title="patch /accounts/{account_id}/magic/sites/{site_id}/wans/{wan_id}">client.magicTransit.sites.wans.<a href="./src/resources/magic-transit/sites/wans.ts">edit</a>(siteId, wanId, { ...params }) -> WAN</code>
- <code title="get /accounts/{account_id}/magic/sites/{site_id}/wans/{wan_id}">client.magicTransit.sites.wans.<a href="./src/resources/magic-transit/sites/wans.ts">get</a>(siteId, wanId, { ...params }) -> WAN</code>

## Connectors

Types:

- <code><a href="./src/resources/magic-transit/connectors/connectors.ts">ConnectorCreateResponse</a></code>
- <code><a href="./src/resources/magic-transit/connectors/connectors.ts">ConnectorUpdateResponse</a></code>
- <code><a href="./src/resources/magic-transit/connectors/connectors.ts">ConnectorListResponse</a></code>
- <code><a href="./src/resources/magic-transit/connectors/connectors.ts">ConnectorDeleteResponse</a></code>
- <code><a href="./src/resources/magic-transit/connectors/connectors.ts">ConnectorEditResponse</a></code>
- <code><a href="./src/resources/magic-transit/connectors/connectors.ts">ConnectorGetResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/magic/connectors">client.magicTransit.connectors.<a href="./src/resources/magic-transit/connectors/connectors.ts">create</a>({ ...params }) -> ConnectorCreateResponse</code>
- <code title="put /accounts/{account_id}/magic/connectors/{connector_id}">client.magicTransit.connectors.<a href="./src/resources/magic-transit/connectors/connectors.ts">update</a>(connectorId, { ...params }) -> ConnectorUpdateResponse</code>
- <code title="get /accounts/{account_id}/magic/connectors">client.magicTransit.connectors.<a href="./src/resources/magic-transit/connectors/connectors.ts">list</a>({ ...params }) -> ConnectorListResponsesSinglePage</code>
- <code title="delete /accounts/{account_id}/magic/connectors/{connector_id}">client.magicTransit.connectors.<a href="./src/resources/magic-transit/connectors/connectors.ts">delete</a>(connectorId, { ...params }) -> ConnectorDeleteResponse</code>
- <code title="patch /accounts/{account_id}/magic/connectors/{connector_id}">client.magicTransit.connectors.<a href="./src/resources/magic-transit/connectors/connectors.ts">edit</a>(connectorId, { ...params }) -> ConnectorEditResponse</code>
- <code title="get /accounts/{account_id}/magic/connectors/{connector_id}">client.magicTransit.connectors.<a href="./src/resources/magic-transit/connectors/connectors.ts">get</a>(connectorId, { ...params }) -> ConnectorGetResponse</code>

### Events

Types:

- <code><a href="./src/resources/magic-transit/connectors/events/events.ts">EventListResponse</a></code>
- <code><a href="./src/resources/magic-transit/connectors/events/events.ts">EventGetResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/magic/connectors/{connector_id}/telemetry/events">client.magicTransit.connectors.events.<a href="./src/resources/magic-transit/connectors/events/events.ts">list</a>(connectorId, { ...params }) -> EventListResponse</code>
- <code title="get /accounts/{account_id}/magic/connectors/{connector_id}/telemetry/events/{event_t}.{event_n}">client.magicTransit.connectors.events.<a href="./src/resources/magic-transit/connectors/events/events.ts">get</a>(connectorId, eventT, eventN, { ...params }) -> EventGetResponse</code>

#### Latest

Types:

- <code><a href="./src/resources/magic-transit/connectors/events/latest.ts">LatestListResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/magic/connectors/{connector_id}/telemetry/events/latest">client.magicTransit.connectors.events.latest.<a href="./src/resources/magic-transit/connectors/events/latest.ts">list</a>(connectorId, { ...params }) -> LatestListResponse</code>

### Snapshots

Types:

- <code><a href="./src/resources/magic-transit/connectors/snapshots/snapshots.ts">SnapshotListResponse</a></code>
- <code><a href="./src/resources/magic-transit/connectors/snapshots/snapshots.ts">SnapshotGetResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/magic/connectors/{connector_id}/telemetry/snapshots">client.magicTransit.connectors.snapshots.<a href="./src/resources/magic-transit/connectors/snapshots/snapshots.ts">list</a>(connectorId, { ...params }) -> SnapshotListResponse</code>
- <code title="get /accounts/{account_id}/magic/connectors/{connector_id}/telemetry/snapshots/{snapshot_t}">client.magicTransit.connectors.snapshots.<a href="./src/resources/magic-transit/connectors/snapshots/snapshots.ts">get</a>(connectorId, snapshotT, { ...params }) -> SnapshotGetResponse</code>

#### Latest

Types:

- <code><a href="./src/resources/magic-transit/connectors/snapshots/latest.ts">LatestListResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/magic/connectors/{connector_id}/telemetry/snapshots/latest">client.magicTransit.connectors.snapshots.latest.<a href="./src/resources/magic-transit/connectors/snapshots/latest.ts">list</a>(connectorId, { ...params }) -> LatestListResponse</code>

## PCAPs

Types:

- <code><a href="./src/resources/magic-transit/pcaps/pcaps.ts">PCAP</a></code>
- <code><a href="./src/resources/magic-transit/pcaps/pcaps.ts">PCAPFilter</a></code>
- <code><a href="./src/resources/magic-transit/pcaps/pcaps.ts">PCAPCreateResponse</a></code>
- <code><a href="./src/resources/magic-transit/pcaps/pcaps.ts">PCAPListResponse</a></code>
- <code><a href="./src/resources/magic-transit/pcaps/pcaps.ts">PCAPGetResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/pcaps">client.magicTransit.pcaps.<a href="./src/resources/magic-transit/pcaps/pcaps.ts">create</a>({ ...params }) -> PCAPCreateResponse</code>
- <code title="get /accounts/{account_id}/pcaps">client.magicTransit.pcaps.<a href="./src/resources/magic-transit/pcaps/pcaps.ts">list</a>({ ...params }) -> PCAPListResponsesSinglePage</code>
- <code title="get /accounts/{account_id}/pcaps/{pcap_id}">client.magicTransit.pcaps.<a href="./src/resources/magic-transit/pcaps/pcaps.ts">get</a>(pcapId, { ...params }) -> PCAPGetResponse</code>
- <code title="put /accounts/{account_id}/pcaps/{pcap_id}/stop">client.magicTransit.pcaps.<a href="./src/resources/magic-transit/pcaps/pcaps.ts">stop</a>(pcapId, { ...params }) -> void</code>

### Ownership

Types:

- <code><a href="./src/resources/magic-transit/pcaps/ownership.ts">Ownership</a></code>

Methods:

- <code title="post /accounts/{account_id}/pcaps/ownership">client.magicTransit.pcaps.ownership.<a href="./src/resources/magic-transit/pcaps/ownership.ts">create</a>({ ...params }) -> Ownership</code>
- <code title="delete /accounts/{account_id}/pcaps/ownership/{ownership_id}">client.magicTransit.pcaps.ownership.<a href="./src/resources/magic-transit/pcaps/ownership.ts">delete</a>(ownershipId, { ...params }) -> void</code>
- <code title="get /accounts/{account_id}/pcaps/ownership">client.magicTransit.pcaps.ownership.<a href="./src/resources/magic-transit/pcaps/ownership.ts">get</a>({ ...params }) -> OwnershipsSinglePage</code>
- <code title="post /accounts/{account_id}/pcaps/ownership/validate">client.magicTransit.pcaps.ownership.<a href="./src/resources/magic-transit/pcaps/ownership.ts">validate</a>({ ...params }) -> Ownership</code>

### Download

Methods:

- <code title="get /accounts/{account_id}/pcaps/{pcap_id}/download">client.magicTransit.pcaps.download.<a href="./src/resources/magic-transit/pcaps/download.ts">get</a>(pcapId, { ...params }) -> Response</code>

# MagicNetworkMonitoring

## VPCFlows

### Tokens

Types:

- <code><a href="./src/resources/magic-network-monitoring/vpc-flows/tokens.ts">TokenCreateResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/mnm/vpc-flows/token">client.magicNetworkMonitoring.vpcFlows.tokens.<a href="./src/resources/magic-network-monitoring/vpc-flows/tokens.ts">create</a>({ ...params }) -> TokenCreateResponse</code>

## Configs

Types:

- <code><a href="./src/resources/magic-network-monitoring/configs/configs.ts">Configuration</a></code>

Methods:

- <code title="post /accounts/{account_id}/mnm/config">client.magicNetworkMonitoring.configs.<a href="./src/resources/magic-network-monitoring/configs/configs.ts">create</a>({ ...params }) -> Configuration</code>
- <code title="put /accounts/{account_id}/mnm/config">client.magicNetworkMonitoring.configs.<a href="./src/resources/magic-network-monitoring/configs/configs.ts">update</a>({ ...params }) -> Configuration</code>
- <code title="delete /accounts/{account_id}/mnm/config">client.magicNetworkMonitoring.configs.<a href="./src/resources/magic-network-monitoring/configs/configs.ts">delete</a>({ ...params }) -> Configuration</code>
- <code title="patch /accounts/{account_id}/mnm/config">client.magicNetworkMonitoring.configs.<a href="./src/resources/magic-network-monitoring/configs/configs.ts">edit</a>({ ...params }) -> Configuration</code>
- <code title="get /accounts/{account_id}/mnm/config">client.magicNetworkMonitoring.configs.<a href="./src/resources/magic-network-monitoring/configs/configs.ts">get</a>({ ...params }) -> Configuration</code>

### Full

Methods:

- <code title="get /accounts/{account_id}/mnm/config/full">client.magicNetworkMonitoring.configs.full.<a href="./src/resources/magic-network-monitoring/configs/full.ts">get</a>({ ...params }) -> Configuration</code>

## Rules

Types:

- <code><a href="./src/resources/magic-network-monitoring/rules/rules.ts">MagicNetworkMonitoringRule</a></code>

Methods:

- <code title="post /accounts/{account_id}/mnm/rules">client.magicNetworkMonitoring.rules.<a href="./src/resources/magic-network-monitoring/rules/rules.ts">create</a>({ ...params }) -> MagicNetworkMonitoringRule | null</code>
- <code title="put /accounts/{account_id}/mnm/rules">client.magicNetworkMonitoring.rules.<a href="./src/resources/magic-network-monitoring/rules/rules.ts">update</a>({ ...params }) -> MagicNetworkMonitoringRule | null</code>
- <code title="get /accounts/{account_id}/mnm/rules">client.magicNetworkMonitoring.rules.<a href="./src/resources/magic-network-monitoring/rules/rules.ts">list</a>({ ...params }) -> MagicNetworkMonitoringRulesSinglePage</code>
- <code title="delete /accounts/{account_id}/mnm/rules/{rule_id}">client.magicNetworkMonitoring.rules.<a href="./src/resources/magic-network-monitoring/rules/rules.ts">delete</a>(ruleId, { ...params }) -> MagicNetworkMonitoringRule | null</code>
- <code title="patch /accounts/{account_id}/mnm/rules/{rule_id}">client.magicNetworkMonitoring.rules.<a href="./src/resources/magic-network-monitoring/rules/rules.ts">edit</a>(ruleId, { ...params }) -> MagicNetworkMonitoringRule | null</code>
- <code title="get /accounts/{account_id}/mnm/rules/{rule_id}">client.magicNetworkMonitoring.rules.<a href="./src/resources/magic-network-monitoring/rules/rules.ts">get</a>(ruleId, { ...params }) -> MagicNetworkMonitoringRule | null</code>

### Advertisements

Types:

- <code><a href="./src/resources/magic-network-monitoring/rules/advertisements.ts">Advertisement</a></code>

Methods:

- <code title="patch /accounts/{account_id}/mnm/rules/{rule_id}/advertisement">client.magicNetworkMonitoring.rules.advertisements.<a href="./src/resources/magic-network-monitoring/rules/advertisements.ts">edit</a>(ruleId, { ...params }) -> Advertisement | null</code>

# MagicCloudNetworking

## CatalogSyncs

Types:

- <code><a href="./src/resources/magic-cloud-networking/catalog-syncs/catalog-syncs.ts">CatalogSyncCreateResponse</a></code>
- <code><a href="./src/resources/magic-cloud-networking/catalog-syncs/catalog-syncs.ts">CatalogSyncUpdateResponse</a></code>
- <code><a href="./src/resources/magic-cloud-networking/catalog-syncs/catalog-syncs.ts">CatalogSyncListResponse</a></code>
- <code><a href="./src/resources/magic-cloud-networking/catalog-syncs/catalog-syncs.ts">CatalogSyncDeleteResponse</a></code>
- <code><a href="./src/resources/magic-cloud-networking/catalog-syncs/catalog-syncs.ts">CatalogSyncEditResponse</a></code>
- <code><a href="./src/resources/magic-cloud-networking/catalog-syncs/catalog-syncs.ts">CatalogSyncGetResponse</a></code>
- <code><a href="./src/resources/magic-cloud-networking/catalog-syncs/catalog-syncs.ts">CatalogSyncRefreshResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/magic/cloud/catalog-syncs">client.magicCloudNetworking.catalogSyncs.<a href="./src/resources/magic-cloud-networking/catalog-syncs/catalog-syncs.ts">create</a>({ ...params }) -> CatalogSyncCreateResponse</code>
- <code title="put /accounts/{account_id}/magic/cloud/catalog-syncs/{sync_id}">client.magicCloudNetworking.catalogSyncs.<a href="./src/resources/magic-cloud-networking/catalog-syncs/catalog-syncs.ts">update</a>(syncId, { ...params }) -> CatalogSyncUpdateResponse</code>
- <code title="get /accounts/{account_id}/magic/cloud/catalog-syncs">client.magicCloudNetworking.catalogSyncs.<a href="./src/resources/magic-cloud-networking/catalog-syncs/catalog-syncs.ts">list</a>({ ...params }) -> CatalogSyncListResponsesSinglePage</code>
- <code title="delete /accounts/{account_id}/magic/cloud/catalog-syncs/{sync_id}">client.magicCloudNetworking.catalogSyncs.<a href="./src/resources/magic-cloud-networking/catalog-syncs/catalog-syncs.ts">delete</a>(syncId, { ...params }) -> CatalogSyncDeleteResponse</code>
- <code title="patch /accounts/{account_id}/magic/cloud/catalog-syncs/{sync_id}">client.magicCloudNetworking.catalogSyncs.<a href="./src/resources/magic-cloud-networking/catalog-syncs/catalog-syncs.ts">edit</a>(syncId, { ...params }) -> CatalogSyncEditResponse</code>
- <code title="get /accounts/{account_id}/magic/cloud/catalog-syncs/{sync_id}">client.magicCloudNetworking.catalogSyncs.<a href="./src/resources/magic-cloud-networking/catalog-syncs/catalog-syncs.ts">get</a>(syncId, { ...params }) -> CatalogSyncGetResponse</code>
- <code title="post /accounts/{account_id}/magic/cloud/catalog-syncs/{sync_id}/refresh">client.magicCloudNetworking.catalogSyncs.<a href="./src/resources/magic-cloud-networking/catalog-syncs/catalog-syncs.ts">refresh</a>(syncId, { ...params }) -> CatalogSyncRefreshResponse</code>

### PrebuiltPolicies

Types:

- <code><a href="./src/resources/magic-cloud-networking/catalog-syncs/prebuilt-policies.ts">PrebuiltPolicyListResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/magic/cloud/catalog-syncs/prebuilt-policies">client.magicCloudNetworking.catalogSyncs.prebuiltPolicies.<a href="./src/resources/magic-cloud-networking/catalog-syncs/prebuilt-policies.ts">list</a>({ ...params }) -> PrebuiltPolicyListResponsesSinglePage</code>

## OnRamps

Types:

- <code><a href="./src/resources/magic-cloud-networking/on-ramps/on-ramps.ts">OnRampCreateResponse</a></code>
- <code><a href="./src/resources/magic-cloud-networking/on-ramps/on-ramps.ts">OnRampUpdateResponse</a></code>
- <code><a href="./src/resources/magic-cloud-networking/on-ramps/on-ramps.ts">OnRampListResponse</a></code>
- <code><a href="./src/resources/magic-cloud-networking/on-ramps/on-ramps.ts">OnRampDeleteResponse</a></code>
- <code><a href="./src/resources/magic-cloud-networking/on-ramps/on-ramps.ts">OnRampApplyResponse</a></code>
- <code><a href="./src/resources/magic-cloud-networking/on-ramps/on-ramps.ts">OnRampEditResponse</a></code>
- <code><a href="./src/resources/magic-cloud-networking/on-ramps/on-ramps.ts">OnRampGetResponse</a></code>
- <code><a href="./src/resources/magic-cloud-networking/on-ramps/on-ramps.ts">OnRampPlanResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/magic/cloud/onramps">client.magicCloudNetworking.onRamps.<a href="./src/resources/magic-cloud-networking/on-ramps/on-ramps.ts">create</a>({ ...params }) -> OnRampCreateResponse</code>
- <code title="put /accounts/{account_id}/magic/cloud/onramps/{onramp_id}">client.magicCloudNetworking.onRamps.<a href="./src/resources/magic-cloud-networking/on-ramps/on-ramps.ts">update</a>(onrampId, { ...params }) -> OnRampUpdateResponse</code>
- <code title="get /accounts/{account_id}/magic/cloud/onramps">client.magicCloudNetworking.onRamps.<a href="./src/resources/magic-cloud-networking/on-ramps/on-ramps.ts">list</a>({ ...params }) -> OnRampListResponsesSinglePage</code>
- <code title="delete /accounts/{account_id}/magic/cloud/onramps/{onramp_id}">client.magicCloudNetworking.onRamps.<a href="./src/resources/magic-cloud-networking/on-ramps/on-ramps.ts">delete</a>(onrampId, { ...params }) -> OnRampDeleteResponse</code>
- <code title="post /accounts/{account_id}/magic/cloud/onramps/{onramp_id}/apply">client.magicCloudNetworking.onRamps.<a href="./src/resources/magic-cloud-networking/on-ramps/on-ramps.ts">apply</a>(onrampId, { ...params }) -> OnRampApplyResponse</code>
- <code title="patch /accounts/{account_id}/magic/cloud/onramps/{onramp_id}">client.magicCloudNetworking.onRamps.<a href="./src/resources/magic-cloud-networking/on-ramps/on-ramps.ts">edit</a>(onrampId, { ...params }) -> OnRampEditResponse</code>
- <code title="post /accounts/{account_id}/magic/cloud/onramps/{onramp_id}/export">client.magicCloudNetworking.onRamps.<a href="./src/resources/magic-cloud-networking/on-ramps/on-ramps.ts">export</a>(onrampId, { ...params }) -> Response</code>
- <code title="get /accounts/{account_id}/magic/cloud/onramps/{onramp_id}">client.magicCloudNetworking.onRamps.<a href="./src/resources/magic-cloud-networking/on-ramps/on-ramps.ts">get</a>(onrampId, { ...params }) -> OnRampGetResponse</code>
- <code title="post /accounts/{account_id}/magic/cloud/onramps/{onramp_id}/plan">client.magicCloudNetworking.onRamps.<a href="./src/resources/magic-cloud-networking/on-ramps/on-ramps.ts">plan</a>(onrampId, { ...params }) -> OnRampPlanResponse</code>

### AddressSpaces

Types:

- <code><a href="./src/resources/magic-cloud-networking/on-ramps/address-spaces.ts">AddressSpaceUpdateResponse</a></code>
- <code><a href="./src/resources/magic-cloud-networking/on-ramps/address-spaces.ts">AddressSpaceListResponse</a></code>
- <code><a href="./src/resources/magic-cloud-networking/on-ramps/address-spaces.ts">AddressSpaceEditResponse</a></code>

Methods:

- <code title="put /accounts/{account_id}/magic/cloud/onramps/magic_wan_address_space">client.magicCloudNetworking.onRamps.addressSpaces.<a href="./src/resources/magic-cloud-networking/on-ramps/address-spaces.ts">update</a>({ ...params }) -> AddressSpaceUpdateResponse</code>
- <code title="get /accounts/{account_id}/magic/cloud/onramps/magic_wan_address_space">client.magicCloudNetworking.onRamps.addressSpaces.<a href="./src/resources/magic-cloud-networking/on-ramps/address-spaces.ts">list</a>({ ...params }) -> AddressSpaceListResponse</code>
- <code title="patch /accounts/{account_id}/magic/cloud/onramps/magic_wan_address_space">client.magicCloudNetworking.onRamps.addressSpaces.<a href="./src/resources/magic-cloud-networking/on-ramps/address-spaces.ts">edit</a>({ ...params }) -> AddressSpaceEditResponse</code>

## CloudIntegrations

Types:

- <code><a href="./src/resources/magic-cloud-networking/cloud-integrations.ts">CloudIntegrationCreateResponse</a></code>
- <code><a href="./src/resources/magic-cloud-networking/cloud-integrations.ts">CloudIntegrationUpdateResponse</a></code>
- <code><a href="./src/resources/magic-cloud-networking/cloud-integrations.ts">CloudIntegrationListResponse</a></code>
- <code><a href="./src/resources/magic-cloud-networking/cloud-integrations.ts">CloudIntegrationDeleteResponse</a></code>
- <code><a href="./src/resources/magic-cloud-networking/cloud-integrations.ts">CloudIntegrationDiscoverResponse</a></code>
- <code><a href="./src/resources/magic-cloud-networking/cloud-integrations.ts">CloudIntegrationDiscoverAllResponse</a></code>
- <code><a href="./src/resources/magic-cloud-networking/cloud-integrations.ts">CloudIntegrationEditResponse</a></code>
- <code><a href="./src/resources/magic-cloud-networking/cloud-integrations.ts">CloudIntegrationGetResponse</a></code>
- <code><a href="./src/resources/magic-cloud-networking/cloud-integrations.ts">CloudIntegrationInitialSetupResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/magic/cloud/providers">client.magicCloudNetworking.cloudIntegrations.<a href="./src/resources/magic-cloud-networking/cloud-integrations.ts">create</a>({ ...params }) -> CloudIntegrationCreateResponse</code>
- <code title="put /accounts/{account_id}/magic/cloud/providers/{provider_id}">client.magicCloudNetworking.cloudIntegrations.<a href="./src/resources/magic-cloud-networking/cloud-integrations.ts">update</a>(providerId, { ...params }) -> CloudIntegrationUpdateResponse</code>
- <code title="get /accounts/{account_id}/magic/cloud/providers">client.magicCloudNetworking.cloudIntegrations.<a href="./src/resources/magic-cloud-networking/cloud-integrations.ts">list</a>({ ...params }) -> CloudIntegrationListResponsesSinglePage</code>
- <code title="delete /accounts/{account_id}/magic/cloud/providers/{provider_id}">client.magicCloudNetworking.cloudIntegrations.<a href="./src/resources/magic-cloud-networking/cloud-integrations.ts">delete</a>(providerId, { ...params }) -> CloudIntegrationDeleteResponse</code>
- <code title="post /accounts/{account_id}/magic/cloud/providers/{provider_id}/discover">client.magicCloudNetworking.cloudIntegrations.<a href="./src/resources/magic-cloud-networking/cloud-integrations.ts">discover</a>(providerId, { ...params }) -> CloudIntegrationDiscoverResponse</code>
- <code title="post /accounts/{account_id}/magic/cloud/providers/discover">client.magicCloudNetworking.cloudIntegrations.<a href="./src/resources/magic-cloud-networking/cloud-integrations.ts">discoverAll</a>({ ...params }) -> CloudIntegrationDiscoverAllResponse</code>
- <code title="patch /accounts/{account_id}/magic/cloud/providers/{provider_id}">client.magicCloudNetworking.cloudIntegrations.<a href="./src/resources/magic-cloud-networking/cloud-integrations.ts">edit</a>(providerId, { ...params }) -> CloudIntegrationEditResponse</code>
- <code title="get /accounts/{account_id}/magic/cloud/providers/{provider_id}">client.magicCloudNetworking.cloudIntegrations.<a href="./src/resources/magic-cloud-networking/cloud-integrations.ts">get</a>(providerId, { ...params }) -> CloudIntegrationGetResponse</code>
- <code title="get /accounts/{account_id}/magic/cloud/providers/{provider_id}/initial_setup">client.magicCloudNetworking.cloudIntegrations.<a href="./src/resources/magic-cloud-networking/cloud-integrations.ts">initialSetup</a>(providerId, { ...params }) -> CloudIntegrationInitialSetupResponse</code>

## Resources

Types:

- <code><a href="./src/resources/magic-cloud-networking/resources.ts">ResourceListResponse</a></code>
- <code><a href="./src/resources/magic-cloud-networking/resources.ts">ResourceGetResponse</a></code>
- <code><a href="./src/resources/magic-cloud-networking/resources.ts">ResourcePolicyPreviewResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/magic/cloud/resources">client.magicCloudNetworking.resources.<a href="./src/resources/magic-cloud-networking/resources.ts">list</a>({ ...params }) -> ResourceListResponsesV4PagePaginationArray</code>
- <code title="get /accounts/{account_id}/magic/cloud/resources/export">client.magicCloudNetworking.resources.<a href="./src/resources/magic-cloud-networking/resources.ts">export</a>({ ...params }) -> Response</code>
- <code title="get /accounts/{account_id}/magic/cloud/resources/{resource_id}">client.magicCloudNetworking.resources.<a href="./src/resources/magic-cloud-networking/resources.ts">get</a>(resourceId, { ...params }) -> ResourceGetResponse</code>
- <code title="post /accounts/{account_id}/magic/cloud/resources/policy-preview">client.magicCloudNetworking.resources.<a href="./src/resources/magic-cloud-networking/resources.ts">policyPreview</a>({ ...params }) -> ResourcePolicyPreviewResponse</code>

# NetworkInterconnects

## CNIs

Types:

- <code><a href="./src/resources/network-interconnects/cnis.ts">CNICreateResponse</a></code>
- <code><a href="./src/resources/network-interconnects/cnis.ts">CNIUpdateResponse</a></code>
- <code><a href="./src/resources/network-interconnects/cnis.ts">CNIListResponse</a></code>
- <code><a href="./src/resources/network-interconnects/cnis.ts">CNIGetResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/cni/cnis">client.networkInterconnects.cnis.<a href="./src/resources/network-interconnects/cnis.ts">create</a>({ ...params }) -> CNICreateResponse</code>
- <code title="put /accounts/{account_id}/cni/cnis/{cni}">client.networkInterconnects.cnis.<a href="./src/resources/network-interconnects/cnis.ts">update</a>(cni, { ...params }) -> CNIUpdateResponse</code>
- <code title="get /accounts/{account_id}/cni/cnis">client.networkInterconnects.cnis.<a href="./src/resources/network-interconnects/cnis.ts">list</a>({ ...params }) -> CNIListResponse</code>
- <code title="delete /accounts/{account_id}/cni/cnis/{cni}">client.networkInterconnects.cnis.<a href="./src/resources/network-interconnects/cnis.ts">delete</a>(cni, { ...params }) -> void</code>
- <code title="get /accounts/{account_id}/cni/cnis/{cni}">client.networkInterconnects.cnis.<a href="./src/resources/network-interconnects/cnis.ts">get</a>(cni, { ...params }) -> CNIGetResponse</code>

## Interconnects

Types:

- <code><a href="./src/resources/network-interconnects/interconnects.ts">InterconnectCreateResponse</a></code>
- <code><a href="./src/resources/network-interconnects/interconnects.ts">InterconnectListResponse</a></code>
- <code><a href="./src/resources/network-interconnects/interconnects.ts">InterconnectGetResponse</a></code>
- <code><a href="./src/resources/network-interconnects/interconnects.ts">InterconnectStatusResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/cni/interconnects">client.networkInterconnects.interconnects.<a href="./src/resources/network-interconnects/interconnects.ts">create</a>({ ...params }) -> InterconnectCreateResponse</code>
- <code title="get /accounts/{account_id}/cni/interconnects">client.networkInterconnects.interconnects.<a href="./src/resources/network-interconnects/interconnects.ts">list</a>({ ...params }) -> InterconnectListResponse</code>
- <code title="delete /accounts/{account_id}/cni/interconnects/{icon}">client.networkInterconnects.interconnects.<a href="./src/resources/network-interconnects/interconnects.ts">delete</a>(icon, { ...params }) -> void</code>
- <code title="get /accounts/{account_id}/cni/interconnects/{icon}">client.networkInterconnects.interconnects.<a href="./src/resources/network-interconnects/interconnects.ts">get</a>(icon, { ...params }) -> InterconnectGetResponse</code>
- <code title="get /accounts/{account_id}/cni/interconnects/{icon}/loa">client.networkInterconnects.interconnects.<a href="./src/resources/network-interconnects/interconnects.ts">loa</a>(icon, { ...params }) -> void</code>
- <code title="get /accounts/{account_id}/cni/interconnects/{icon}/status">client.networkInterconnects.interconnects.<a href="./src/resources/network-interconnects/interconnects.ts">status</a>(icon, { ...params }) -> InterconnectStatusResponse</code>

## Settings

Types:

- <code><a href="./src/resources/network-interconnects/settings.ts">SettingUpdateResponse</a></code>
- <code><a href="./src/resources/network-interconnects/settings.ts">SettingGetResponse</a></code>

Methods:

- <code title="put /accounts/{account_id}/cni/settings">client.networkInterconnects.settings.<a href="./src/resources/network-interconnects/settings.ts">update</a>({ ...params }) -> SettingUpdateResponse</code>
- <code title="get /accounts/{account_id}/cni/settings">client.networkInterconnects.settings.<a href="./src/resources/network-interconnects/settings.ts">get</a>({ ...params }) -> SettingGetResponse</code>

## Slots

Types:

- <code><a href="./src/resources/network-interconnects/slots.ts">SlotListResponse</a></code>
- <code><a href="./src/resources/network-interconnects/slots.ts">SlotGetResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/cni/slots">client.networkInterconnects.slots.<a href="./src/resources/network-interconnects/slots.ts">list</a>({ ...params }) -> SlotListResponse</code>
- <code title="get /accounts/{account_id}/cni/slots/{slot}">client.networkInterconnects.slots.<a href="./src/resources/network-interconnects/slots.ts">get</a>(slot, { ...params }) -> SlotGetResponse</code>

# MTLSCertificates

Types:

- <code><a href="./src/resources/mtls-certificates/mtls-certificates.ts">MTLSCertificate</a></code>
- <code><a href="./src/resources/mtls-certificates/mtls-certificates.ts">MTLSCertificateCreateResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/mtls_certificates">client.mtlsCertificates.<a href="./src/resources/mtls-certificates/mtls-certificates.ts">create</a>({ ...params }) -> MTLSCertificateCreateResponse</code>
- <code title="get /accounts/{account_id}/mtls_certificates">client.mtlsCertificates.<a href="./src/resources/mtls-certificates/mtls-certificates.ts">list</a>({ ...params }) -> MTLSCertificatesSinglePage</code>
- <code title="delete /accounts/{account_id}/mtls_certificates/{mtls_certificate_id}">client.mtlsCertificates.<a href="./src/resources/mtls-certificates/mtls-certificates.ts">delete</a>(mtlsCertificateId, { ...params }) -> MTLSCertificate</code>
- <code title="get /accounts/{account_id}/mtls_certificates/{mtls_certificate_id}">client.mtlsCertificates.<a href="./src/resources/mtls-certificates/mtls-certificates.ts">get</a>(mtlsCertificateId, { ...params }) -> MTLSCertificate</code>

## Associations

Types:

- <code><a href="./src/resources/mtls-certificates/associations.ts">CertificateAsssociation</a></code>

Methods:

- <code title="get /accounts/{account_id}/mtls_certificates/{mtls_certificate_id}/associations">client.mtlsCertificates.associations.<a href="./src/resources/mtls-certificates/associations.ts">get</a>(mtlsCertificateId, { ...params }) -> CertificateAsssociationsSinglePage</code>

# Pages

## Projects

Types:

- <code><a href="./src/resources/pages/projects/projects.ts">Deployment</a></code>
- <code><a href="./src/resources/pages/projects/projects.ts">Project</a></code>
- <code><a href="./src/resources/pages/projects/projects.ts">Stage</a></code>
- <code><a href="./src/resources/pages/projects/projects.ts">ProjectDeleteResponse</a></code>
- <code><a href="./src/resources/pages/projects/projects.ts">ProjectPurgeBuildCacheResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/pages/projects">client.pages.projects.<a href="./src/resources/pages/projects/projects.ts">create</a>({ ...params }) -> Project</code>
- <code title="get /accounts/{account_id}/pages/projects">client.pages.projects.<a href="./src/resources/pages/projects/projects.ts">list</a>({ ...params }) -> DeploymentsSinglePage</code>
- <code title="delete /accounts/{account_id}/pages/projects/{project_name}">client.pages.projects.<a href="./src/resources/pages/projects/projects.ts">delete</a>(projectName, { ...params }) -> ProjectDeleteResponse | null</code>
- <code title="patch /accounts/{account_id}/pages/projects/{project_name}">client.pages.projects.<a href="./src/resources/pages/projects/projects.ts">edit</a>(projectName, { ...params }) -> Project</code>
- <code title="get /accounts/{account_id}/pages/projects/{project_name}">client.pages.projects.<a href="./src/resources/pages/projects/projects.ts">get</a>(projectName, { ...params }) -> Project</code>
- <code title="post /accounts/{account_id}/pages/projects/{project_name}/purge_build_cache">client.pages.projects.<a href="./src/resources/pages/projects/projects.ts">purgeBuildCache</a>(projectName, { ...params }) -> ProjectPurgeBuildCacheResponse | null</code>

### Deployments

Types:

- <code><a href="./src/resources/pages/projects/deployments/deployments.ts">DeploymentDeleteResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/pages/projects/{project_name}/deployments">client.pages.projects.deployments.<a href="./src/resources/pages/projects/deployments/deployments.ts">create</a>(projectName, { ...params }) -> Deployment</code>
- <code title="get /accounts/{account_id}/pages/projects/{project_name}/deployments">client.pages.projects.deployments.<a href="./src/resources/pages/projects/deployments/deployments.ts">list</a>(projectName, { ...params }) -> DeploymentsSinglePage</code>
- <code title="delete /accounts/{account_id}/pages/projects/{project_name}/deployments/{deployment_id}">client.pages.projects.deployments.<a href="./src/resources/pages/projects/deployments/deployments.ts">delete</a>(projectName, deploymentId, { ...params }) -> DeploymentDeleteResponse | null</code>
- <code title="get /accounts/{account_id}/pages/projects/{project_name}/deployments/{deployment_id}">client.pages.projects.deployments.<a href="./src/resources/pages/projects/deployments/deployments.ts">get</a>(projectName, deploymentId, { ...params }) -> Deployment</code>
- <code title="post /accounts/{account_id}/pages/projects/{project_name}/deployments/{deployment_id}/retry">client.pages.projects.deployments.<a href="./src/resources/pages/projects/deployments/deployments.ts">retry</a>(projectName, deploymentId, { ...params }) -> Deployment</code>
- <code title="post /accounts/{account_id}/pages/projects/{project_name}/deployments/{deployment_id}/rollback">client.pages.projects.deployments.<a href="./src/resources/pages/projects/deployments/deployments.ts">rollback</a>(projectName, deploymentId, { ...params }) -> Deployment</code>

#### History

##### Logs

Types:

- <code><a href="./src/resources/pages/projects/deployments/history/logs.ts">LogGetResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/pages/projects/{project_name}/deployments/{deployment_id}/history/logs">client.pages.projects.deployments.history.logs.<a href="./src/resources/pages/projects/deployments/history/logs.ts">get</a>(projectName, deploymentId, { ...params }) -> LogGetResponse</code>

### Domains

Types:

- <code><a href="./src/resources/pages/projects/domains.ts">DomainCreateResponse</a></code>
- <code><a href="./src/resources/pages/projects/domains.ts">DomainListResponse</a></code>
- <code><a href="./src/resources/pages/projects/domains.ts">DomainDeleteResponse</a></code>
- <code><a href="./src/resources/pages/projects/domains.ts">DomainEditResponse</a></code>
- <code><a href="./src/resources/pages/projects/domains.ts">DomainGetResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/pages/projects/{project_name}/domains">client.pages.projects.domains.<a href="./src/resources/pages/projects/domains.ts">create</a>(projectName, { ...params }) -> DomainCreateResponse | null</code>
- <code title="get /accounts/{account_id}/pages/projects/{project_name}/domains">client.pages.projects.domains.<a href="./src/resources/pages/projects/domains.ts">list</a>(projectName, { ...params }) -> DomainListResponsesSinglePage</code>
- <code title="delete /accounts/{account_id}/pages/projects/{project_name}/domains/{domain_name}">client.pages.projects.domains.<a href="./src/resources/pages/projects/domains.ts">delete</a>(projectName, domainName, { ...params }) -> DomainDeleteResponse | null</code>
- <code title="patch /accounts/{account_id}/pages/projects/{project_name}/domains/{domain_name}">client.pages.projects.domains.<a href="./src/resources/pages/projects/domains.ts">edit</a>(projectName, domainName, { ...params }) -> DomainEditResponse | null</code>
- <code title="get /accounts/{account_id}/pages/projects/{project_name}/domains/{domain_name}">client.pages.projects.domains.<a href="./src/resources/pages/projects/domains.ts">get</a>(projectName, domainName, { ...params }) -> DomainGetResponse | null</code>

# Registrar

## Domains

Types:

- <code><a href="./src/resources/registrar/domains.ts">Domain</a></code>
- <code><a href="./src/resources/registrar/domains.ts">DomainUpdateResponse</a></code>
- <code><a href="./src/resources/registrar/domains.ts">DomainGetResponse</a></code>

Methods:

- <code title="put /accounts/{account_id}/registrar/domains/{domain_name}">client.registrar.domains.<a href="./src/resources/registrar/domains.ts">update</a>(domainName, { ...params }) -> DomainUpdateResponse | null</code>
- <code title="get /accounts/{account_id}/registrar/domains">client.registrar.domains.<a href="./src/resources/registrar/domains.ts">list</a>({ ...params }) -> DomainsSinglePage</code>
- <code title="get /accounts/{account_id}/registrar/domains/{domain_name}">client.registrar.domains.<a href="./src/resources/registrar/domains.ts">get</a>(domainName, { ...params }) -> DomainGetResponse | null</code>

# RequestTracers

## Traces

Types:

- <code><a href="./src/resources/request-tracers/traces.ts">Trace</a></code>
- <code><a href="./src/resources/request-tracers/traces.ts">TraceItem</a></code>
- <code><a href="./src/resources/request-tracers/traces.ts">TraceCreateResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/request-tracer/trace">client.requestTracers.traces.<a href="./src/resources/request-tracers/traces.ts">create</a>({ ...params }) -> TraceCreateResponse</code>

# Rules

## Lists

Types:

- <code><a href="./src/resources/rules/lists/lists.ts">Hostname</a></code>
- <code><a href="./src/resources/rules/lists/lists.ts">ListsList</a></code>
- <code><a href="./src/resources/rules/lists/lists.ts">Redirect</a></code>
- <code><a href="./src/resources/rules/lists/lists.ts">ListCreateResponse</a></code>
- <code><a href="./src/resources/rules/lists/lists.ts">ListUpdateResponse</a></code>
- <code><a href="./src/resources/rules/lists/lists.ts">ListDeleteResponse</a></code>
- <code><a href="./src/resources/rules/lists/lists.ts">ListGetResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/rules/lists">client.rules.lists.<a href="./src/resources/rules/lists/lists.ts">create</a>({ ...params }) -> ListCreateResponse</code>
- <code title="put /accounts/{account_id}/rules/lists/{list_id}">client.rules.lists.<a href="./src/resources/rules/lists/lists.ts">update</a>(listId, { ...params }) -> ListUpdateResponse</code>
- <code title="get /accounts/{account_id}/rules/lists">client.rules.lists.<a href="./src/resources/rules/lists/lists.ts">list</a>({ ...params }) -> ListsListsSinglePage</code>
- <code title="delete /accounts/{account_id}/rules/lists/{list_id}">client.rules.lists.<a href="./src/resources/rules/lists/lists.ts">delete</a>(listId, { ...params }) -> ListDeleteResponse</code>
- <code title="get /accounts/{account_id}/rules/lists/{list_id}">client.rules.lists.<a href="./src/resources/rules/lists/lists.ts">get</a>(listId, { ...params }) -> ListGetResponse</code>

### BulkOperations

Types:

- <code><a href="./src/resources/rules/lists/bulk-operations.ts">BulkOperationGetResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/rules/lists/bulk_operations/{operation_id}">client.rules.lists.bulkOperations.<a href="./src/resources/rules/lists/bulk-operations.ts">get</a>(operationId, { ...params }) -> BulkOperationGetResponse</code>

### Items

Types:

- <code><a href="./src/resources/rules/lists/items.ts">ListCursor</a></code>
- <code><a href="./src/resources/rules/lists/items.ts">ListItem</a></code>
- <code><a href="./src/resources/rules/lists/items.ts">ItemCreateResponse</a></code>
- <code><a href="./src/resources/rules/lists/items.ts">ItemUpdateResponse</a></code>
- <code><a href="./src/resources/rules/lists/items.ts">ItemListResponse</a></code>
- <code><a href="./src/resources/rules/lists/items.ts">ItemDeleteResponse</a></code>
- <code><a href="./src/resources/rules/lists/items.ts">ItemGetResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/rules/lists/{list_id}/items">client.rules.lists.items.<a href="./src/resources/rules/lists/items.ts">create</a>(listId, [ ...body ]) -> ItemCreateResponse</code>
- <code title="put /accounts/{account_id}/rules/lists/{list_id}/items">client.rules.lists.items.<a href="./src/resources/rules/lists/items.ts">update</a>(listId, [ ...body ]) -> ItemUpdateResponse</code>
- <code title="get /accounts/{account_id}/rules/lists/{list_id}/items">client.rules.lists.items.<a href="./src/resources/rules/lists/items.ts">list</a>(listId, { ...params }) -> ItemListResponsesCursorPagination</code>
- <code title="delete /accounts/{account_id}/rules/lists/{list_id}/items">client.rules.lists.items.<a href="./src/resources/rules/lists/items.ts">delete</a>(listId, { ...params }) -> ItemDeleteResponse</code>
- <code title="get /accounts/{account_id}/rules/lists/{list_id}/items/{item_id}">client.rules.lists.items.<a href="./src/resources/rules/lists/items.ts">get</a>(listId, itemId, { ...params }) -> ItemGetResponse</code>

# Stream

Types:

- <code><a href="./src/resources/stream/stream.ts">AllowedOrigins</a></code>
- <code><a href="./src/resources/stream/stream.ts">Video</a></code>

Methods:

- <code title="post /accounts/{account_id}/stream">client.stream.<a href="./src/resources/stream/stream.ts">create</a>({ ...params }) -> void</code>
- <code title="get /accounts/{account_id}/stream">client.stream.<a href="./src/resources/stream/stream.ts">list</a>({ ...params }) -> VideosSinglePage</code>
- <code title="delete /accounts/{account_id}/stream/{identifier}">client.stream.<a href="./src/resources/stream/stream.ts">delete</a>(identifier, { ...params }) -> void</code>
- <code title="post /accounts/{account_id}/stream/{identifier}">client.stream.<a href="./src/resources/stream/stream.ts">edit</a>(identifier, { ...params }) -> Video</code>
- <code title="get /accounts/{account_id}/stream/{identifier}">client.stream.<a href="./src/resources/stream/stream.ts">get</a>(identifier, { ...params }) -> Video</code>

## AudioTracks

Types:

- <code><a href="./src/resources/stream/audio-tracks.ts">Audio</a></code>
- <code><a href="./src/resources/stream/audio-tracks.ts">AudioTrackDeleteResponse</a></code>

Methods:

- <code title="delete /accounts/{account_id}/stream/{identifier}/audio/{audio_identifier}">client.stream.audioTracks.<a href="./src/resources/stream/audio-tracks.ts">delete</a>(identifier, audioIdentifier, { ...params }) -> AudioTrackDeleteResponse</code>
- <code title="post /accounts/{account_id}/stream/{identifier}/audio/copy">client.stream.audioTracks.<a href="./src/resources/stream/audio-tracks.ts">copy</a>(identifier, { ...params }) -> Audio</code>
- <code title="patch /accounts/{account_id}/stream/{identifier}/audio/{audio_identifier}">client.stream.audioTracks.<a href="./src/resources/stream/audio-tracks.ts">edit</a>(identifier, audioIdentifier, { ...params }) -> Audio</code>
- <code title="get /accounts/{account_id}/stream/{identifier}/audio">client.stream.audioTracks.<a href="./src/resources/stream/audio-tracks.ts">get</a>(identifier, { ...params }) -> AudioSinglePage</code>

## Videos

Types:

- <code><a href="./src/resources/stream/videos.ts">VideoStorageUsageResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/stream/storage-usage">client.stream.videos.<a href="./src/resources/stream/videos.ts">storageUsage</a>({ ...params }) -> VideoStorageUsageResponse</code>

## Clip

Types:

- <code><a href="./src/resources/stream/clip.ts">Clip</a></code>

Methods:

- <code title="post /accounts/{account_id}/stream/clip">client.stream.clip.<a href="./src/resources/stream/clip.ts">create</a>({ ...params }) -> Clip</code>

## Copy

Methods:

- <code title="post /accounts/{account_id}/stream/copy">client.stream.copy.<a href="./src/resources/stream/copy.ts">create</a>({ ...params }) -> Video</code>

## DirectUpload

Types:

- <code><a href="./src/resources/stream/direct-upload.ts">DirectUploadCreateResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/stream/direct_upload">client.stream.directUpload.<a href="./src/resources/stream/direct-upload.ts">create</a>({ ...params }) -> DirectUploadCreateResponse</code>

## Keys

Types:

- <code><a href="./src/resources/stream/keys.ts">Keys</a></code>
- <code><a href="./src/resources/stream/keys.ts">KeyDeleteResponse</a></code>
- <code><a href="./src/resources/stream/keys.ts">KeyGetResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/stream/keys">client.stream.keys.<a href="./src/resources/stream/keys.ts">create</a>({ ...params }) -> Keys</code>
- <code title="delete /accounts/{account_id}/stream/keys/{identifier}">client.stream.keys.<a href="./src/resources/stream/keys.ts">delete</a>(identifier, { ...params }) -> KeyDeleteResponse</code>
- <code title="get /accounts/{account_id}/stream/keys">client.stream.keys.<a href="./src/resources/stream/keys.ts">get</a>({ ...params }) -> KeyGetResponsesSinglePage</code>

## LiveInputs

Types:

- <code><a href="./src/resources/stream/live-inputs/live-inputs.ts">LiveInput</a></code>
- <code><a href="./src/resources/stream/live-inputs/live-inputs.ts">LiveInputListResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/stream/live_inputs">client.stream.liveInputs.<a href="./src/resources/stream/live-inputs/live-inputs.ts">create</a>({ ...params }) -> LiveInput</code>
- <code title="put /accounts/{account_id}/stream/live_inputs/{live_input_identifier}">client.stream.liveInputs.<a href="./src/resources/stream/live-inputs/live-inputs.ts">update</a>(liveInputIdentifier, { ...params }) -> LiveInput</code>
- <code title="get /accounts/{account_id}/stream/live_inputs">client.stream.liveInputs.<a href="./src/resources/stream/live-inputs/live-inputs.ts">list</a>({ ...params }) -> LiveInputListResponse</code>
- <code title="delete /accounts/{account_id}/stream/live_inputs/{live_input_identifier}">client.stream.liveInputs.<a href="./src/resources/stream/live-inputs/live-inputs.ts">delete</a>(liveInputIdentifier, { ...params }) -> void</code>
- <code title="get /accounts/{account_id}/stream/live_inputs/{live_input_identifier}">client.stream.liveInputs.<a href="./src/resources/stream/live-inputs/live-inputs.ts">get</a>(liveInputIdentifier, { ...params }) -> LiveInput</code>

### Outputs

Types:

- <code><a href="./src/resources/stream/live-inputs/outputs.ts">Output</a></code>

Methods:

- <code title="post /accounts/{account_id}/stream/live_inputs/{live_input_identifier}/outputs">client.stream.liveInputs.outputs.<a href="./src/resources/stream/live-inputs/outputs.ts">create</a>(liveInputIdentifier, { ...params }) -> Output</code>
- <code title="put /accounts/{account_id}/stream/live_inputs/{live_input_identifier}/outputs/{output_identifier}">client.stream.liveInputs.outputs.<a href="./src/resources/stream/live-inputs/outputs.ts">update</a>(liveInputIdentifier, outputIdentifier, { ...params }) -> Output</code>
- <code title="get /accounts/{account_id}/stream/live_inputs/{live_input_identifier}/outputs">client.stream.liveInputs.outputs.<a href="./src/resources/stream/live-inputs/outputs.ts">list</a>(liveInputIdentifier, { ...params }) -> OutputsSinglePage</code>
- <code title="delete /accounts/{account_id}/stream/live_inputs/{live_input_identifier}/outputs/{output_identifier}">client.stream.liveInputs.outputs.<a href="./src/resources/stream/live-inputs/outputs.ts">delete</a>(liveInputIdentifier, outputIdentifier, { ...params }) -> void</code>

## Watermarks

Types:

- <code><a href="./src/resources/stream/watermarks.ts">Watermark</a></code>
- <code><a href="./src/resources/stream/watermarks.ts">WatermarkDeleteResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/stream/watermarks">client.stream.watermarks.<a href="./src/resources/stream/watermarks.ts">create</a>({ ...params }) -> Watermark</code>
- <code title="get /accounts/{account_id}/stream/watermarks">client.stream.watermarks.<a href="./src/resources/stream/watermarks.ts">list</a>({ ...params }) -> WatermarksSinglePage</code>
- <code title="delete /accounts/{account_id}/stream/watermarks/{identifier}">client.stream.watermarks.<a href="./src/resources/stream/watermarks.ts">delete</a>(identifier, { ...params }) -> WatermarkDeleteResponse</code>
- <code title="get /accounts/{account_id}/stream/watermarks/{identifier}">client.stream.watermarks.<a href="./src/resources/stream/watermarks.ts">get</a>(identifier, { ...params }) -> Watermark</code>

## Webhooks

Types:

- <code><a href="./src/resources/stream/webhooks.ts">WebhookUpdateResponse</a></code>
- <code><a href="./src/resources/stream/webhooks.ts">WebhookDeleteResponse</a></code>
- <code><a href="./src/resources/stream/webhooks.ts">WebhookGetResponse</a></code>

Methods:

- <code title="put /accounts/{account_id}/stream/webhook">client.stream.webhooks.<a href="./src/resources/stream/webhooks.ts">update</a>({ ...params }) -> WebhookUpdateResponse</code>
- <code title="delete /accounts/{account_id}/stream/webhook">client.stream.webhooks.<a href="./src/resources/stream/webhooks.ts">delete</a>({ ...params }) -> WebhookDeleteResponse</code>
- <code title="get /accounts/{account_id}/stream/webhook">client.stream.webhooks.<a href="./src/resources/stream/webhooks.ts">get</a>({ ...params }) -> WebhookGetResponse</code>

## Captions

Types:

- <code><a href="./src/resources/stream/captions/captions.ts">Caption</a></code>

Methods:

- <code title="get /accounts/{account_id}/stream/{identifier}/captions">client.stream.captions.<a href="./src/resources/stream/captions/captions.ts">get</a>(identifier, { ...params }) -> CaptionsSinglePage</code>

### Language

Types:

- <code><a href="./src/resources/stream/captions/language/language.ts">LanguageDeleteResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/stream/{identifier}/captions/{language}/generate">client.stream.captions.language.<a href="./src/resources/stream/captions/language/language.ts">create</a>(identifier, language, { ...params }) -> Caption</code>
- <code title="put /accounts/{account_id}/stream/{identifier}/captions/{language}">client.stream.captions.language.<a href="./src/resources/stream/captions/language/language.ts">update</a>(identifier, language, { ...params }) -> Caption</code>
- <code title="delete /accounts/{account_id}/stream/{identifier}/captions/{language}">client.stream.captions.language.<a href="./src/resources/stream/captions/language/language.ts">delete</a>(identifier, language, { ...params }) -> LanguageDeleteResponse</code>
- <code title="get /accounts/{account_id}/stream/{identifier}/captions/{language}">client.stream.captions.language.<a href="./src/resources/stream/captions/language/language.ts">get</a>(identifier, language, { ...params }) -> Caption</code>

#### Vtt

Types:

- <code><a href="./src/resources/stream/captions/language/vtt.ts">VttGetResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/stream/{identifier}/captions/{language}/vtt">client.stream.captions.language.vtt.<a href="./src/resources/stream/captions/language/vtt.ts">get</a>(identifier, language, { ...params }) -> string</code>

## Downloads

Types:

- <code><a href="./src/resources/stream/downloads.ts">DownloadCreateResponse</a></code>
- <code><a href="./src/resources/stream/downloads.ts">DownloadDeleteResponse</a></code>
- <code><a href="./src/resources/stream/downloads.ts">DownloadGetResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/stream/{identifier}/downloads">client.stream.downloads.<a href="./src/resources/stream/downloads.ts">create</a>(identifier, { ...params }) -> DownloadCreateResponse</code>
- <code title="delete /accounts/{account_id}/stream/{identifier}/downloads">client.stream.downloads.<a href="./src/resources/stream/downloads.ts">delete</a>(identifier, { ...params }) -> DownloadDeleteResponse</code>
- <code title="get /accounts/{account_id}/stream/{identifier}/downloads">client.stream.downloads.<a href="./src/resources/stream/downloads.ts">get</a>(identifier, { ...params }) -> DownloadGetResponse</code>

## Embed

Types:

- <code><a href="./src/resources/stream/embed.ts">EmbedGetResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/stream/{identifier}/embed">client.stream.embed.<a href="./src/resources/stream/embed.ts">get</a>(identifier, { ...params }) -> string</code>

## Token

Types:

- <code><a href="./src/resources/stream/token.ts">TokenCreateResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/stream/{identifier}/token">client.stream.token.<a href="./src/resources/stream/token.ts">create</a>(identifier, { ...params }) -> TokenCreateResponse</code>

# Alerting

## AvailableAlerts

Types:

- <code><a href="./src/resources/alerting/available-alerts.ts">AvailableAlertListResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/alerting/v3/available_alerts">client.alerting.availableAlerts.<a href="./src/resources/alerting/available-alerts.ts">list</a>({ ...params }) -> AvailableAlertListResponse</code>

## Destinations

### Eligible

Types:

- <code><a href="./src/resources/alerting/destinations/eligible.ts">EligibleGetResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/alerting/v3/destinations/eligible">client.alerting.destinations.eligible.<a href="./src/resources/alerting/destinations/eligible.ts">get</a>({ ...params }) -> EligibleGetResponse</code>

### Pagerduty

Types:

- <code><a href="./src/resources/alerting/destinations/pagerduty.ts">Pagerduty</a></code>
- <code><a href="./src/resources/alerting/destinations/pagerduty.ts">PagerdutyCreateResponse</a></code>
- <code><a href="./src/resources/alerting/destinations/pagerduty.ts">PagerdutyDeleteResponse</a></code>
- <code><a href="./src/resources/alerting/destinations/pagerduty.ts">PagerdutyLinkResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/alerting/v3/destinations/pagerduty/connect">client.alerting.destinations.pagerduty.<a href="./src/resources/alerting/destinations/pagerduty.ts">create</a>({ ...params }) -> PagerdutyCreateResponse</code>
- <code title="delete /accounts/{account_id}/alerting/v3/destinations/pagerduty">client.alerting.destinations.pagerduty.<a href="./src/resources/alerting/destinations/pagerduty.ts">delete</a>({ ...params }) -> PagerdutyDeleteResponse</code>
- <code title="get /accounts/{account_id}/alerting/v3/destinations/pagerduty">client.alerting.destinations.pagerduty.<a href="./src/resources/alerting/destinations/pagerduty.ts">get</a>({ ...params }) -> PagerdutiesSinglePage</code>
- <code title="get /accounts/{account_id}/alerting/v3/destinations/pagerduty/connect/{token_id}">client.alerting.destinations.pagerduty.<a href="./src/resources/alerting/destinations/pagerduty.ts">link</a>(tokenId, { ...params }) -> PagerdutyLinkResponse</code>

### Webhooks

Types:

- <code><a href="./src/resources/alerting/destinations/webhooks.ts">Webhooks</a></code>
- <code><a href="./src/resources/alerting/destinations/webhooks.ts">WebhookCreateResponse</a></code>
- <code><a href="./src/resources/alerting/destinations/webhooks.ts">WebhookUpdateResponse</a></code>
- <code><a href="./src/resources/alerting/destinations/webhooks.ts">WebhookDeleteResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/alerting/v3/destinations/webhooks">client.alerting.destinations.webhooks.<a href="./src/resources/alerting/destinations/webhooks.ts">create</a>({ ...params }) -> WebhookCreateResponse</code>
- <code title="put /accounts/{account_id}/alerting/v3/destinations/webhooks/{webhook_id}">client.alerting.destinations.webhooks.<a href="./src/resources/alerting/destinations/webhooks.ts">update</a>(webhookId, { ...params }) -> WebhookUpdateResponse</code>
- <code title="get /accounts/{account_id}/alerting/v3/destinations/webhooks">client.alerting.destinations.webhooks.<a href="./src/resources/alerting/destinations/webhooks.ts">list</a>({ ...params }) -> WebhooksSinglePage</code>
- <code title="delete /accounts/{account_id}/alerting/v3/destinations/webhooks/{webhook_id}">client.alerting.destinations.webhooks.<a href="./src/resources/alerting/destinations/webhooks.ts">delete</a>(webhookId, { ...params }) -> WebhookDeleteResponse</code>
- <code title="get /accounts/{account_id}/alerting/v3/destinations/webhooks/{webhook_id}">client.alerting.destinations.webhooks.<a href="./src/resources/alerting/destinations/webhooks.ts">get</a>(webhookId, { ...params }) -> Webhooks</code>

## History

Types:

- <code><a href="./src/resources/alerting/history.ts">History</a></code>

Methods:

- <code title="get /accounts/{account_id}/alerting/v3/history">client.alerting.history.<a href="./src/resources/alerting/history.ts">list</a>({ ...params }) -> HistoriesV4PagePaginationArray</code>

## Policies

Types:

- <code><a href="./src/resources/alerting/policies.ts">Mechanism</a></code>
- <code><a href="./src/resources/alerting/policies.ts">Policy</a></code>
- <code><a href="./src/resources/alerting/policies.ts">PolicyFilter</a></code>
- <code><a href="./src/resources/alerting/policies.ts">PolicyCreateResponse</a></code>
- <code><a href="./src/resources/alerting/policies.ts">PolicyUpdateResponse</a></code>
- <code><a href="./src/resources/alerting/policies.ts">PolicyDeleteResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/alerting/v3/policies">client.alerting.policies.<a href="./src/resources/alerting/policies.ts">create</a>({ ...params }) -> PolicyCreateResponse</code>
- <code title="put /accounts/{account_id}/alerting/v3/policies/{policy_id}">client.alerting.policies.<a href="./src/resources/alerting/policies.ts">update</a>(policyId, { ...params }) -> PolicyUpdateResponse</code>
- <code title="get /accounts/{account_id}/alerting/v3/policies">client.alerting.policies.<a href="./src/resources/alerting/policies.ts">list</a>({ ...params }) -> PoliciesSinglePage</code>
- <code title="delete /accounts/{account_id}/alerting/v3/policies/{policy_id}">client.alerting.policies.<a href="./src/resources/alerting/policies.ts">delete</a>(policyId, { ...params }) -> PolicyDeleteResponse</code>
- <code title="get /accounts/{account_id}/alerting/v3/policies/{policy_id}">client.alerting.policies.<a href="./src/resources/alerting/policies.ts">get</a>(policyId, { ...params }) -> Policy</code>

# D1

Types:

- <code><a href="./src/resources/d1/d1.ts">D1</a></code>

## Database

Types:

- <code><a href="./src/resources/d1/database.ts">QueryResult</a></code>
- <code><a href="./src/resources/d1/database.ts">DatabaseListResponse</a></code>
- <code><a href="./src/resources/d1/database.ts">DatabaseDeleteResponse</a></code>
- <code><a href="./src/resources/d1/database.ts">DatabaseExportResponse</a></code>
- <code><a href="./src/resources/d1/database.ts">DatabaseImportResponse</a></code>
- <code><a href="./src/resources/d1/database.ts">DatabaseRawResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/d1/database">client.d1.database.<a href="./src/resources/d1/database.ts">create</a>({ ...params }) -> D1</code>
- <code title="put /accounts/{account_id}/d1/database/{database_id}">client.d1.database.<a href="./src/resources/d1/database.ts">update</a>(databaseId, { ...params }) -> D1</code>
- <code title="get /accounts/{account_id}/d1/database">client.d1.database.<a href="./src/resources/d1/database.ts">list</a>({ ...params }) -> DatabaseListResponsesV4PagePaginationArray</code>
- <code title="delete /accounts/{account_id}/d1/database/{database_id}">client.d1.database.<a href="./src/resources/d1/database.ts">delete</a>(databaseId, { ...params }) -> DatabaseDeleteResponse | null</code>
- <code title="patch /accounts/{account_id}/d1/database/{database_id}">client.d1.database.<a href="./src/resources/d1/database.ts">edit</a>(databaseId, { ...params }) -> D1</code>
- <code title="post /accounts/{account_id}/d1/database/{database_id}/export">client.d1.database.<a href="./src/resources/d1/database.ts">export</a>(databaseId, { ...params }) -> DatabaseExportResponse</code>
- <code title="get /accounts/{account_id}/d1/database/{database_id}">client.d1.database.<a href="./src/resources/d1/database.ts">get</a>(databaseId, { ...params }) -> D1</code>
- <code title="post /accounts/{account_id}/d1/database/{database_id}/import">client.d1.database.<a href="./src/resources/d1/database.ts">import</a>(databaseId, { ...params }) -> DatabaseImportResponse</code>
- <code title="post /accounts/{account_id}/d1/database/{database_id}/query">client.d1.database.<a href="./src/resources/d1/database.ts">query</a>(databaseId, { ...params }) -> QueryResultsSinglePage</code>
- <code title="post /accounts/{account_id}/d1/database/{database_id}/raw">client.d1.database.<a href="./src/resources/d1/database.ts">raw</a>(databaseId, { ...params }) -> DatabaseRawResponsesSinglePage</code>

# R2

## Buckets

Types:

- <code><a href="./src/resources/r2/buckets/buckets.ts">Bucket</a></code>
- <code><a href="./src/resources/r2/buckets/buckets.ts">BucketListResponse</a></code>
- <code><a href="./src/resources/r2/buckets/buckets.ts">BucketDeleteResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/r2/buckets">client.r2.buckets.<a href="./src/resources/r2/buckets/buckets.ts">create</a>({ ...params }) -> Bucket</code>
- <code title="get /accounts/{account_id}/r2/buckets">client.r2.buckets.<a href="./src/resources/r2/buckets/buckets.ts">list</a>({ ...params }) -> BucketListResponse</code>
- <code title="delete /accounts/{account_id}/r2/buckets/{bucket_name}">client.r2.buckets.<a href="./src/resources/r2/buckets/buckets.ts">delete</a>(bucketName, { ...params }) -> BucketDeleteResponse</code>
- <code title="patch /accounts/{account_id}/r2/buckets/{bucket_name}">client.r2.buckets.<a href="./src/resources/r2/buckets/buckets.ts">edit</a>(bucketName, { ...params }) -> Bucket</code>
- <code title="get /accounts/{account_id}/r2/buckets/{bucket_name}">client.r2.buckets.<a href="./src/resources/r2/buckets/buckets.ts">get</a>(bucketName, { ...params }) -> Bucket</code>

### Lifecycle

Types:

- <code><a href="./src/resources/r2/buckets/lifecycle.ts">LifecycleUpdateResponse</a></code>
- <code><a href="./src/resources/r2/buckets/lifecycle.ts">LifecycleGetResponse</a></code>

Methods:

- <code title="put /accounts/{account_id}/r2/buckets/{bucket_name}/lifecycle">client.r2.buckets.lifecycle.<a href="./src/resources/r2/buckets/lifecycle.ts">update</a>(bucketName, { ...params }) -> LifecycleUpdateResponse</code>
- <code title="get /accounts/{account_id}/r2/buckets/{bucket_name}/lifecycle">client.r2.buckets.lifecycle.<a href="./src/resources/r2/buckets/lifecycle.ts">get</a>(bucketName, { ...params }) -> LifecycleGetResponse</code>

### CORS

Types:

- <code><a href="./src/resources/r2/buckets/cors.ts">CORSUpdateResponse</a></code>
- <code><a href="./src/resources/r2/buckets/cors.ts">CORSDeleteResponse</a></code>
- <code><a href="./src/resources/r2/buckets/cors.ts">CORSGetResponse</a></code>

Methods:

- <code title="put /accounts/{account_id}/r2/buckets/{bucket_name}/cors">client.r2.buckets.cors.<a href="./src/resources/r2/buckets/cors.ts">update</a>(bucketName, { ...params }) -> CORSUpdateResponse</code>
- <code title="delete /accounts/{account_id}/r2/buckets/{bucket_name}/cors">client.r2.buckets.cors.<a href="./src/resources/r2/buckets/cors.ts">delete</a>(bucketName, { ...params }) -> CORSDeleteResponse</code>
- <code title="get /accounts/{account_id}/r2/buckets/{bucket_name}/cors">client.r2.buckets.cors.<a href="./src/resources/r2/buckets/cors.ts">get</a>(bucketName, { ...params }) -> CORSGetResponse</code>

### Domains

#### Custom

Types:

- <code><a href="./src/resources/r2/buckets/domains/custom.ts">CustomCreateResponse</a></code>
- <code><a href="./src/resources/r2/buckets/domains/custom.ts">CustomUpdateResponse</a></code>
- <code><a href="./src/resources/r2/buckets/domains/custom.ts">CustomListResponse</a></code>
- <code><a href="./src/resources/r2/buckets/domains/custom.ts">CustomDeleteResponse</a></code>
- <code><a href="./src/resources/r2/buckets/domains/custom.ts">CustomGetResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/r2/buckets/{bucket_name}/domains/custom">client.r2.buckets.domains.custom.<a href="./src/resources/r2/buckets/domains/custom.ts">create</a>(bucketName, { ...params }) -> CustomCreateResponse</code>
- <code title="put /accounts/{account_id}/r2/buckets/{bucket_name}/domains/custom/{domain}">client.r2.buckets.domains.custom.<a href="./src/resources/r2/buckets/domains/custom.ts">update</a>(bucketName, domain, { ...params }) -> CustomUpdateResponse</code>
- <code title="get /accounts/{account_id}/r2/buckets/{bucket_name}/domains/custom">client.r2.buckets.domains.custom.<a href="./src/resources/r2/buckets/domains/custom.ts">list</a>(bucketName, { ...params }) -> CustomListResponse</code>
- <code title="delete /accounts/{account_id}/r2/buckets/{bucket_name}/domains/custom/{domain}">client.r2.buckets.domains.custom.<a href="./src/resources/r2/buckets/domains/custom.ts">delete</a>(bucketName, domain, { ...params }) -> CustomDeleteResponse</code>
- <code title="get /accounts/{account_id}/r2/buckets/{bucket_name}/domains/custom/{domain}">client.r2.buckets.domains.custom.<a href="./src/resources/r2/buckets/domains/custom.ts">get</a>(bucketName, domain, { ...params }) -> CustomGetResponse</code>

#### Managed

Types:

- <code><a href="./src/resources/r2/buckets/domains/managed.ts">ManagedUpdateResponse</a></code>
- <code><a href="./src/resources/r2/buckets/domains/managed.ts">ManagedListResponse</a></code>

Methods:

- <code title="put /accounts/{account_id}/r2/buckets/{bucket_name}/domains/managed">client.r2.buckets.domains.managed.<a href="./src/resources/r2/buckets/domains/managed.ts">update</a>(bucketName, { ...params }) -> ManagedUpdateResponse</code>
- <code title="get /accounts/{account_id}/r2/buckets/{bucket_name}/domains/managed">client.r2.buckets.domains.managed.<a href="./src/resources/r2/buckets/domains/managed.ts">list</a>(bucketName, { ...params }) -> ManagedListResponse</code>

### EventNotifications

Types:

- <code><a href="./src/resources/r2/buckets/event-notifications.ts">EventNotificationUpdateResponse</a></code>
- <code><a href="./src/resources/r2/buckets/event-notifications.ts">EventNotificationListResponse</a></code>
- <code><a href="./src/resources/r2/buckets/event-notifications.ts">EventNotificationDeleteResponse</a></code>
- <code><a href="./src/resources/r2/buckets/event-notifications.ts">EventNotificationGetResponse</a></code>

Methods:

- <code title="put /accounts/{account_id}/event_notifications/r2/{bucket_name}/configuration/queues/{queue_id}">client.r2.buckets.eventNotifications.<a href="./src/resources/r2/buckets/event-notifications.ts">update</a>(bucketName, queueId, { ...params }) -> EventNotificationUpdateResponse</code>
- <code title="get /accounts/{account_id}/event_notifications/r2/{bucket_name}/configuration">client.r2.buckets.eventNotifications.<a href="./src/resources/r2/buckets/event-notifications.ts">list</a>(bucketName, { ...params }) -> EventNotificationListResponse</code>
- <code title="delete /accounts/{account_id}/event_notifications/r2/{bucket_name}/configuration/queues/{queue_id}">client.r2.buckets.eventNotifications.<a href="./src/resources/r2/buckets/event-notifications.ts">delete</a>(bucketName, queueId, { ...params }) -> EventNotificationDeleteResponse</code>
- <code title="get /accounts/{account_id}/event_notifications/r2/{bucket_name}/configuration/queues/{queue_id}">client.r2.buckets.eventNotifications.<a href="./src/resources/r2/buckets/event-notifications.ts">get</a>(bucketName, queueId, { ...params }) -> EventNotificationGetResponse</code>

### Locks

Types:

- <code><a href="./src/resources/r2/buckets/locks.ts">LockUpdateResponse</a></code>
- <code><a href="./src/resources/r2/buckets/locks.ts">LockGetResponse</a></code>

Methods:

- <code title="put /accounts/{account_id}/r2/buckets/{bucket_name}/lock">client.r2.buckets.locks.<a href="./src/resources/r2/buckets/locks.ts">update</a>(bucketName, { ...params }) -> LockUpdateResponse</code>
- <code title="get /accounts/{account_id}/r2/buckets/{bucket_name}/lock">client.r2.buckets.locks.<a href="./src/resources/r2/buckets/locks.ts">get</a>(bucketName, { ...params }) -> LockGetResponse</code>

### Metrics

Types:

- <code><a href="./src/resources/r2/buckets/metrics.ts">MetricListResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/r2/metrics">client.r2.buckets.metrics.<a href="./src/resources/r2/buckets/metrics.ts">list</a>({ ...params }) -> MetricListResponse</code>

### Sippy

Types:

- <code><a href="./src/resources/r2/buckets/sippy.ts">Provider</a></code>
- <code><a href="./src/resources/r2/buckets/sippy.ts">Sippy</a></code>
- <code><a href="./src/resources/r2/buckets/sippy.ts">SippyDeleteResponse</a></code>

Methods:

- <code title="put /accounts/{account_id}/r2/buckets/{bucket_name}/sippy">client.r2.buckets.sippy.<a href="./src/resources/r2/buckets/sippy.ts">update</a>(bucketName, { ...params }) -> Sippy</code>
- <code title="delete /accounts/{account_id}/r2/buckets/{bucket_name}/sippy">client.r2.buckets.sippy.<a href="./src/resources/r2/buckets/sippy.ts">delete</a>(bucketName, { ...params }) -> SippyDeleteResponse</code>
- <code title="get /accounts/{account_id}/r2/buckets/{bucket_name}/sippy">client.r2.buckets.sippy.<a href="./src/resources/r2/buckets/sippy.ts">get</a>(bucketName, { ...params }) -> Sippy</code>

## TemporaryCredentials

Types:

- <code><a href="./src/resources/r2/temporary-credentials.ts">TemporaryCredential</a></code>
- <code><a href="./src/resources/r2/temporary-credentials.ts">TemporaryCredentialCreateResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/r2/temp-access-credentials">client.r2.temporaryCredentials.<a href="./src/resources/r2/temporary-credentials.ts">create</a>({ ...params }) -> TemporaryCredentialCreateResponse</code>

## SuperSlurper

### Jobs

Types:

- <code><a href="./src/resources/r2/super-slurper/jobs/jobs.ts">JobCreateResponse</a></code>
- <code><a href="./src/resources/r2/super-slurper/jobs/jobs.ts">JobListResponse</a></code>
- <code><a href="./src/resources/r2/super-slurper/jobs/jobs.ts">JobAbortResponse</a></code>
- <code><a href="./src/resources/r2/super-slurper/jobs/jobs.ts">JobAbortAllResponse</a></code>
- <code><a href="./src/resources/r2/super-slurper/jobs/jobs.ts">JobGetResponse</a></code>
- <code><a href="./src/resources/r2/super-slurper/jobs/jobs.ts">JobPauseResponse</a></code>
- <code><a href="./src/resources/r2/super-slurper/jobs/jobs.ts">JobProgressResponse</a></code>
- <code><a href="./src/resources/r2/super-slurper/jobs/jobs.ts">JobResumeResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/slurper/jobs">client.r2.superSlurper.jobs.<a href="./src/resources/r2/super-slurper/jobs/jobs.ts">create</a>({ ...params }) -> JobCreateResponse</code>
- <code title="get /accounts/{account_id}/slurper/jobs">client.r2.superSlurper.jobs.<a href="./src/resources/r2/super-slurper/jobs/jobs.ts">list</a>({ ...params }) -> JobListResponsesSinglePage</code>
- <code title="put /accounts/{account_id}/slurper/jobs/{job_id}/abort">client.r2.superSlurper.jobs.<a href="./src/resources/r2/super-slurper/jobs/jobs.ts">abort</a>(jobId, { ...params }) -> JobAbortResponse</code>
- <code title="put /accounts/{account_id}/slurper/jobs/abortAll">client.r2.superSlurper.jobs.<a href="./src/resources/r2/super-slurper/jobs/jobs.ts">abortAll</a>({ ...params }) -> JobAbortAllResponse</code>
- <code title="get /accounts/{account_id}/slurper/jobs/{job_id}">client.r2.superSlurper.jobs.<a href="./src/resources/r2/super-slurper/jobs/jobs.ts">get</a>(jobId, { ...params }) -> JobGetResponse</code>
- <code title="put /accounts/{account_id}/slurper/jobs/{job_id}/pause">client.r2.superSlurper.jobs.<a href="./src/resources/r2/super-slurper/jobs/jobs.ts">pause</a>(jobId, { ...params }) -> JobPauseResponse</code>
- <code title="get /accounts/{account_id}/slurper/jobs/{job_id}/progress">client.r2.superSlurper.jobs.<a href="./src/resources/r2/super-slurper/jobs/jobs.ts">progress</a>(jobId, { ...params }) -> JobProgressResponse</code>
- <code title="put /accounts/{account_id}/slurper/jobs/{job_id}/resume">client.r2.superSlurper.jobs.<a href="./src/resources/r2/super-slurper/jobs/jobs.ts">resume</a>(jobId, { ...params }) -> JobResumeResponse</code>

#### Logs

Types:

- <code><a href="./src/resources/r2/super-slurper/jobs/logs.ts">LogListResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/slurper/jobs/{job_id}/logs">client.r2.superSlurper.jobs.logs.<a href="./src/resources/r2/super-slurper/jobs/logs.ts">list</a>(jobId, { ...params }) -> LogListResponsesSinglePage</code>

### ConnectivityPrecheck

Types:

- <code><a href="./src/resources/r2/super-slurper/connectivity-precheck.ts">ConnectivityPrecheckSourceResponse</a></code>
- <code><a href="./src/resources/r2/super-slurper/connectivity-precheck.ts">ConnectivityPrecheckTargetResponse</a></code>

Methods:

- <code title="put /accounts/{account_id}/slurper/source/connectivity-precheck">client.r2.superSlurper.connectivityPrecheck.<a href="./src/resources/r2/super-slurper/connectivity-precheck.ts">source</a>({ ...params }) -> ConnectivityPrecheckSourceResponse</code>
- <code title="put /accounts/{account_id}/slurper/target/connectivity-precheck">client.r2.superSlurper.connectivityPrecheck.<a href="./src/resources/r2/super-slurper/connectivity-precheck.ts">target</a>({ ...params }) -> ConnectivityPrecheckTargetResponse</code>

# WorkersForPlatforms

## Dispatch

### Namespaces

Types:

- <code><a href="./src/resources/workers-for-platforms/dispatch/namespaces/namespaces.ts">NamespaceCreateResponse</a></code>
- <code><a href="./src/resources/workers-for-platforms/dispatch/namespaces/namespaces.ts">NamespaceListResponse</a></code>
- <code><a href="./src/resources/workers-for-platforms/dispatch/namespaces/namespaces.ts">NamespaceDeleteResponse</a></code>
- <code><a href="./src/resources/workers-for-platforms/dispatch/namespaces/namespaces.ts">NamespaceGetResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/workers/dispatch/namespaces">client.workersForPlatforms.dispatch.namespaces.<a href="./src/resources/workers-for-platforms/dispatch/namespaces/namespaces.ts">create</a>({ ...params }) -> NamespaceCreateResponse</code>
- <code title="get /accounts/{account_id}/workers/dispatch/namespaces">client.workersForPlatforms.dispatch.namespaces.<a href="./src/resources/workers-for-platforms/dispatch/namespaces/namespaces.ts">list</a>({ ...params }) -> NamespaceListResponsesSinglePage</code>
- <code title="delete /accounts/{account_id}/workers/dispatch/namespaces/{dispatch_namespace}">client.workersForPlatforms.dispatch.namespaces.<a href="./src/resources/workers-for-platforms/dispatch/namespaces/namespaces.ts">delete</a>(dispatchNamespace, { ...params }) -> NamespaceDeleteResponse | null</code>
- <code title="get /accounts/{account_id}/workers/dispatch/namespaces/{dispatch_namespace}">client.workersForPlatforms.dispatch.namespaces.<a href="./src/resources/workers-for-platforms/dispatch/namespaces/namespaces.ts">get</a>(dispatchNamespace, { ...params }) -> NamespaceGetResponse</code>

#### Scripts

Types:

- <code><a href="./src/resources/workers-for-platforms/dispatch/namespaces/scripts/scripts.ts">Script</a></code>
- <code><a href="./src/resources/workers-for-platforms/dispatch/namespaces/scripts/scripts.ts">ScriptUpdateResponse</a></code>
- <code><a href="./src/resources/workers-for-platforms/dispatch/namespaces/scripts/scripts.ts">ScriptDeleteResponse</a></code>

Methods:

- <code title="put /accounts/{account_id}/workers/dispatch/namespaces/{dispatch_namespace}/scripts/{script_name}">client.workersForPlatforms.dispatch.namespaces.scripts.<a href="./src/resources/workers-for-platforms/dispatch/namespaces/scripts/scripts.ts">update</a>(dispatchNamespace, scriptName, { ...params }) -> ScriptUpdateResponse</code>
- <code title="delete /accounts/{account_id}/workers/dispatch/namespaces/{dispatch_namespace}/scripts/{script_name}">client.workersForPlatforms.dispatch.namespaces.scripts.<a href="./src/resources/workers-for-platforms/dispatch/namespaces/scripts/scripts.ts">delete</a>(dispatchNamespace, scriptName, { ...params }) -> ScriptDeleteResponse | null</code>
- <code title="get /accounts/{account_id}/workers/dispatch/namespaces/{dispatch_namespace}/scripts/{script_name}">client.workersForPlatforms.dispatch.namespaces.scripts.<a href="./src/resources/workers-for-platforms/dispatch/namespaces/scripts/scripts.ts">get</a>(dispatchNamespace, scriptName, { ...params }) -> Script</code>

##### AssetUpload

Types:

- <code><a href="./src/resources/workers-for-platforms/dispatch/namespaces/scripts/asset-upload.ts">AssetUploadCreateResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/workers/dispatch/namespaces/{dispatch_namespace}/scripts/{script_name}/assets-upload-session">client.workersForPlatforms.dispatch.namespaces.scripts.assetUpload.<a href="./src/resources/workers-for-platforms/dispatch/namespaces/scripts/asset-upload.ts">create</a>(dispatchNamespace, scriptName, { ...params }) -> AssetUploadCreateResponse</code>

##### Content

Methods:

- <code title="put /accounts/{account_id}/workers/dispatch/namespaces/{dispatch_namespace}/scripts/{script_name}/content">client.workersForPlatforms.dispatch.namespaces.scripts.content.<a href="./src/resources/workers-for-platforms/dispatch/namespaces/scripts/content.ts">update</a>(dispatchNamespace, scriptName, { ...params }) -> Script</code>
- <code title="get /accounts/{account_id}/workers/dispatch/namespaces/{dispatch_namespace}/scripts/{script_name}/content">client.workersForPlatforms.dispatch.namespaces.scripts.content.<a href="./src/resources/workers-for-platforms/dispatch/namespaces/scripts/content.ts">get</a>(dispatchNamespace, scriptName, { ...params }) -> Response</code>

##### Settings

Types:

- <code><a href="./src/resources/workers-for-platforms/dispatch/namespaces/scripts/settings.ts">SettingEditResponse</a></code>
- <code><a href="./src/resources/workers-for-platforms/dispatch/namespaces/scripts/settings.ts">SettingGetResponse</a></code>

Methods:

- <code title="patch /accounts/{account_id}/workers/dispatch/namespaces/{dispatch_namespace}/scripts/{script_name}/settings">client.workersForPlatforms.dispatch.namespaces.scripts.settings.<a href="./src/resources/workers-for-platforms/dispatch/namespaces/scripts/settings.ts">edit</a>(dispatchNamespace, scriptName, { ...params }) -> SettingEditResponse</code>
- <code title="get /accounts/{account_id}/workers/dispatch/namespaces/{dispatch_namespace}/scripts/{script_name}/settings">client.workersForPlatforms.dispatch.namespaces.scripts.settings.<a href="./src/resources/workers-for-platforms/dispatch/namespaces/scripts/settings.ts">get</a>(dispatchNamespace, scriptName, { ...params }) -> SettingGetResponse</code>

##### Bindings

Types:

- <code><a href="./src/resources/workers-for-platforms/dispatch/namespaces/scripts/bindings.ts">BindingGetResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/workers/dispatch/namespaces/{dispatch_namespace}/scripts/{script_name}/bindings">client.workersForPlatforms.dispatch.namespaces.scripts.bindings.<a href="./src/resources/workers-for-platforms/dispatch/namespaces/scripts/bindings.ts">get</a>(dispatchNamespace, scriptName, { ...params }) -> BindingGetResponsesSinglePage</code>

##### Secrets

Types:

- <code><a href="./src/resources/workers-for-platforms/dispatch/namespaces/scripts/secrets.ts">SecretUpdateResponse</a></code>
- <code><a href="./src/resources/workers-for-platforms/dispatch/namespaces/scripts/secrets.ts">SecretListResponse</a></code>
- <code><a href="./src/resources/workers-for-platforms/dispatch/namespaces/scripts/secrets.ts">SecretDeleteResponse</a></code>
- <code><a href="./src/resources/workers-for-platforms/dispatch/namespaces/scripts/secrets.ts">SecretGetResponse</a></code>

Methods:

- <code title="put /accounts/{account_id}/workers/dispatch/namespaces/{dispatch_namespace}/scripts/{script_name}/secrets">client.workersForPlatforms.dispatch.namespaces.scripts.secrets.<a href="./src/resources/workers-for-platforms/dispatch/namespaces/scripts/secrets.ts">update</a>(dispatchNamespace, scriptName, { ...params }) -> SecretUpdateResponse</code>
- <code title="get /accounts/{account_id}/workers/dispatch/namespaces/{dispatch_namespace}/scripts/{script_name}/secrets">client.workersForPlatforms.dispatch.namespaces.scripts.secrets.<a href="./src/resources/workers-for-platforms/dispatch/namespaces/scripts/secrets.ts">list</a>(dispatchNamespace, scriptName, { ...params }) -> SecretListResponsesSinglePage</code>
- <code title="delete /accounts/{account_id}/workers/dispatch/namespaces/{dispatch_namespace}/scripts/{script_name}/secrets/{secret_name}">client.workersForPlatforms.dispatch.namespaces.scripts.secrets.<a href="./src/resources/workers-for-platforms/dispatch/namespaces/scripts/secrets.ts">delete</a>(dispatchNamespace, scriptName, secretName, { ...params }) -> SecretDeleteResponse | null</code>
- <code title="get /accounts/{account_id}/workers/dispatch/namespaces/{dispatch_namespace}/scripts/{script_name}/secrets/{secret_name}">client.workersForPlatforms.dispatch.namespaces.scripts.secrets.<a href="./src/resources/workers-for-platforms/dispatch/namespaces/scripts/secrets.ts">get</a>(dispatchNamespace, scriptName, secretName, { ...params }) -> SecretGetResponse</code>

##### Tags

Types:

- <code><a href="./src/resources/workers-for-platforms/dispatch/namespaces/scripts/tags.ts">TagUpdateResponse</a></code>
- <code><a href="./src/resources/workers-for-platforms/dispatch/namespaces/scripts/tags.ts">TagListResponse</a></code>
- <code><a href="./src/resources/workers-for-platforms/dispatch/namespaces/scripts/tags.ts">TagDeleteResponse</a></code>

Methods:

- <code title="put /accounts/{account_id}/workers/dispatch/namespaces/{dispatch_namespace}/scripts/{script_name}/tags">client.workersForPlatforms.dispatch.namespaces.scripts.tags.<a href="./src/resources/workers-for-platforms/dispatch/namespaces/scripts/tags.ts">update</a>(dispatchNamespace, scriptName, [ ...body ]) -> TagUpdateResponsesSinglePage</code>
- <code title="get /accounts/{account_id}/workers/dispatch/namespaces/{dispatch_namespace}/scripts/{script_name}/tags">client.workersForPlatforms.dispatch.namespaces.scripts.tags.<a href="./src/resources/workers-for-platforms/dispatch/namespaces/scripts/tags.ts">list</a>(dispatchNamespace, scriptName, { ...params }) -> TagListResponsesSinglePage</code>
- <code title="delete /accounts/{account_id}/workers/dispatch/namespaces/{dispatch_namespace}/scripts/{script_name}/tags/{tag}">client.workersForPlatforms.dispatch.namespaces.scripts.tags.<a href="./src/resources/workers-for-platforms/dispatch/namespaces/scripts/tags.ts">delete</a>(dispatchNamespace, scriptName, tag, { ...params }) -> TagDeleteResponse | null</code>

# ZeroTrust

## Devices

Types:

- <code><a href="./src/resources/zero-trust/devices/devices.ts">Device</a></code>
- <code><a href="./src/resources/zero-trust/devices/devices.ts">DeviceGetResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/devices">client.zeroTrust.devices.<a href="./src/resources/zero-trust/devices/devices.ts">list</a>({ ...params }) -> DevicesSinglePage</code>
- <code title="get /accounts/{account_id}/devices/{device_id}">client.zeroTrust.devices.<a href="./src/resources/zero-trust/devices/devices.ts">get</a>(deviceId, { ...params }) -> DeviceGetResponse | null</code>

### Devices

Types:

- <code><a href="./src/resources/zero-trust/devices/devices_.ts">DeviceListResponse</a></code>
- <code><a href="./src/resources/zero-trust/devices/devices_.ts">DeviceDeleteResponse</a></code>
- <code><a href="./src/resources/zero-trust/devices/devices_.ts">DeviceGetResponse</a></code>
- <code><a href="./src/resources/zero-trust/devices/devices_.ts">DeviceRevokeResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/devices/physical-devices">client.zeroTrust.devices.devices.<a href="./src/resources/zero-trust/devices/devices_.ts">list</a>({ ...params }) -> DeviceListResponsesCursorPagination</code>
- <code title="delete /accounts/{account_id}/devices/physical-devices/{device_id}">client.zeroTrust.devices.devices.<a href="./src/resources/zero-trust/devices/devices_.ts">delete</a>(deviceId, { ...params }) -> DeviceDeleteResponse | null</code>
- <code title="get /accounts/{account_id}/devices/physical-devices/{device_id}">client.zeroTrust.devices.devices.<a href="./src/resources/zero-trust/devices/devices_.ts">get</a>(deviceId, { ...params }) -> DeviceGetResponse</code>
- <code title="post /accounts/{account_id}/devices/physical-devices/{device_id}/revoke">client.zeroTrust.devices.devices.<a href="./src/resources/zero-trust/devices/devices_.ts">revoke</a>(deviceId, { ...params }) -> DeviceRevokeResponse | null</code>

### Resilience

#### GlobalWARPOverride

Types:

- <code><a href="./src/resources/zero-trust/devices/resilience/global-warp-override.ts">GlobalWARPOverrideCreateResponse</a></code>
- <code><a href="./src/resources/zero-trust/devices/resilience/global-warp-override.ts">GlobalWARPOverrideGetResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/devices/resilience/disconnect">client.zeroTrust.devices.resilience.globalWARPOverride.<a href="./src/resources/zero-trust/devices/resilience/global-warp-override.ts">create</a>({ ...params }) -> GlobalWARPOverrideCreateResponse | null</code>
- <code title="get /accounts/{account_id}/devices/resilience/disconnect">client.zeroTrust.devices.resilience.globalWARPOverride.<a href="./src/resources/zero-trust/devices/resilience/global-warp-override.ts">get</a>({ ...params }) -> GlobalWARPOverrideGetResponse | null</code>

### Registrations

Types:

- <code><a href="./src/resources/zero-trust/devices/registrations.ts">RegistrationListResponse</a></code>
- <code><a href="./src/resources/zero-trust/devices/registrations.ts">RegistrationDeleteResponse</a></code>
- <code><a href="./src/resources/zero-trust/devices/registrations.ts">RegistrationBulkDeleteResponse</a></code>
- <code><a href="./src/resources/zero-trust/devices/registrations.ts">RegistrationGetResponse</a></code>
- <code><a href="./src/resources/zero-trust/devices/registrations.ts">RegistrationRevokeResponse</a></code>
- <code><a href="./src/resources/zero-trust/devices/registrations.ts">RegistrationUnrevokeResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/devices/registrations">client.zeroTrust.devices.registrations.<a href="./src/resources/zero-trust/devices/registrations.ts">list</a>({ ...params }) -> RegistrationListResponsesCursorPagination</code>
- <code title="delete /accounts/{account_id}/devices/registrations/{registration_id}">client.zeroTrust.devices.registrations.<a href="./src/resources/zero-trust/devices/registrations.ts">delete</a>(registrationId, { ...params }) -> RegistrationDeleteResponse | null</code>
- <code title="delete /accounts/{account_id}/devices/registrations">client.zeroTrust.devices.registrations.<a href="./src/resources/zero-trust/devices/registrations.ts">bulkDelete</a>({ ...params }) -> RegistrationBulkDeleteResponse | null</code>
- <code title="get /accounts/{account_id}/devices/registrations/{registration_id}">client.zeroTrust.devices.registrations.<a href="./src/resources/zero-trust/devices/registrations.ts">get</a>(registrationId, { ...params }) -> RegistrationGetResponse</code>
- <code title="post /accounts/{account_id}/devices/registrations/revoke">client.zeroTrust.devices.registrations.<a href="./src/resources/zero-trust/devices/registrations.ts">revoke</a>({ ...params }) -> RegistrationRevokeResponse | null</code>
- <code title="post /accounts/{account_id}/devices/registrations/unrevoke">client.zeroTrust.devices.registrations.<a href="./src/resources/zero-trust/devices/registrations.ts">unrevoke</a>({ ...params }) -> RegistrationUnrevokeResponse | null</code>

### DEXTests

Types:

- <code><a href="./src/resources/zero-trust/devices/dex-tests.ts">SchemaData</a></code>
- <code><a href="./src/resources/zero-trust/devices/dex-tests.ts">SchemaHTTP</a></code>
- <code><a href="./src/resources/zero-trust/devices/dex-tests.ts">DEXTestCreateResponse</a></code>
- <code><a href="./src/resources/zero-trust/devices/dex-tests.ts">DEXTestUpdateResponse</a></code>
- <code><a href="./src/resources/zero-trust/devices/dex-tests.ts">DEXTestListResponse</a></code>
- <code><a href="./src/resources/zero-trust/devices/dex-tests.ts">DEXTestDeleteResponse</a></code>
- <code><a href="./src/resources/zero-trust/devices/dex-tests.ts">DEXTestGetResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/dex/devices/dex_tests">client.zeroTrust.devices.dexTests.<a href="./src/resources/zero-trust/devices/dex-tests.ts">create</a>({ ...params }) -> DEXTestCreateResponse</code>
- <code title="put /accounts/{account_id}/dex/devices/dex_tests/{dex_test_id}">client.zeroTrust.devices.dexTests.<a href="./src/resources/zero-trust/devices/dex-tests.ts">update</a>(dexTestId, { ...params }) -> DEXTestUpdateResponse</code>
- <code title="get /accounts/{account_id}/dex/devices/dex_tests">client.zeroTrust.devices.dexTests.<a href="./src/resources/zero-trust/devices/dex-tests.ts">list</a>({ ...params }) -> DEXTestListResponsesSinglePage</code>
- <code title="delete /accounts/{account_id}/dex/devices/dex_tests/{dex_test_id}">client.zeroTrust.devices.dexTests.<a href="./src/resources/zero-trust/devices/dex-tests.ts">delete</a>(dexTestId, { ...params }) -> DEXTestDeleteResponse</code>
- <code title="get /accounts/{account_id}/dex/devices/dex_tests/{dex_test_id}">client.zeroTrust.devices.dexTests.<a href="./src/resources/zero-trust/devices/dex-tests.ts">get</a>(dexTestId, { ...params }) -> DEXTestGetResponse</code>

### Networks

Types:

- <code><a href="./src/resources/zero-trust/devices/networks.ts">DeviceNetwork</a></code>

Methods:

- <code title="post /accounts/{account_id}/devices/networks">client.zeroTrust.devices.networks.<a href="./src/resources/zero-trust/devices/networks.ts">create</a>({ ...params }) -> DeviceNetwork | null</code>
- <code title="put /accounts/{account_id}/devices/networks/{network_id}">client.zeroTrust.devices.networks.<a href="./src/resources/zero-trust/devices/networks.ts">update</a>(networkId, { ...params }) -> DeviceNetwork | null</code>
- <code title="get /accounts/{account_id}/devices/networks">client.zeroTrust.devices.networks.<a href="./src/resources/zero-trust/devices/networks.ts">list</a>({ ...params }) -> DeviceNetworksSinglePage</code>
- <code title="delete /accounts/{account_id}/devices/networks/{network_id}">client.zeroTrust.devices.networks.<a href="./src/resources/zero-trust/devices/networks.ts">delete</a>(networkId, { ...params }) -> DeviceNetworksSinglePage</code>
- <code title="get /accounts/{account_id}/devices/networks/{network_id}">client.zeroTrust.devices.networks.<a href="./src/resources/zero-trust/devices/networks.ts">get</a>(networkId, { ...params }) -> DeviceNetwork | null</code>

### FleetStatus

Types:

- <code><a href="./src/resources/zero-trust/devices/fleet-status.ts">FleetStatusGetResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/dex/devices/{device_id}/fleet-status/live">client.zeroTrust.devices.fleetStatus.<a href="./src/resources/zero-trust/devices/fleet-status.ts">get</a>(deviceId, { ...params }) -> FleetStatusGetResponse</code>

### Policies

Types:

- <code><a href="./src/resources/zero-trust/devices/policies/policies.ts">DevicePolicyCertificates</a></code>
- <code><a href="./src/resources/zero-trust/devices/policies/policies.ts">FallbackDomain</a></code>
- <code><a href="./src/resources/zero-trust/devices/policies/policies.ts">FallbackDomainPolicy</a></code>
- <code><a href="./src/resources/zero-trust/devices/policies/policies.ts">SettingsPolicy</a></code>
- <code><a href="./src/resources/zero-trust/devices/policies/policies.ts">SplitTunnelExclude</a></code>
- <code><a href="./src/resources/zero-trust/devices/policies/policies.ts">SplitTunnelInclude</a></code>

#### Default

Types:

- <code><a href="./src/resources/zero-trust/devices/policies/default/default.ts">DefaultEditResponse</a></code>
- <code><a href="./src/resources/zero-trust/devices/policies/default/default.ts">DefaultGetResponse</a></code>

Methods:

- <code title="patch /accounts/{account_id}/devices/policy">client.zeroTrust.devices.policies.default.<a href="./src/resources/zero-trust/devices/policies/default/default.ts">edit</a>({ ...params }) -> DefaultEditResponse | null</code>
- <code title="get /accounts/{account_id}/devices/policy">client.zeroTrust.devices.policies.default.<a href="./src/resources/zero-trust/devices/policies/default/default.ts">get</a>({ ...params }) -> DefaultGetResponse | null</code>

##### Excludes

Methods:

- <code title="put /accounts/{account_id}/devices/policy/exclude">client.zeroTrust.devices.policies.default.excludes.<a href="./src/resources/zero-trust/devices/policies/default/excludes.ts">update</a>([ ...body ]) -> SplitTunnelExcludesSinglePage</code>
- <code title="get /accounts/{account_id}/devices/policy/exclude">client.zeroTrust.devices.policies.default.excludes.<a href="./src/resources/zero-trust/devices/policies/default/excludes.ts">get</a>({ ...params }) -> SplitTunnelExcludesSinglePage</code>

##### Includes

Methods:

- <code title="put /accounts/{account_id}/devices/policy/include">client.zeroTrust.devices.policies.default.includes.<a href="./src/resources/zero-trust/devices/policies/default/includes.ts">update</a>([ ...body ]) -> SplitTunnelIncludesSinglePage</code>
- <code title="get /accounts/{account_id}/devices/policy/include">client.zeroTrust.devices.policies.default.includes.<a href="./src/resources/zero-trust/devices/policies/default/includes.ts">get</a>({ ...params }) -> SplitTunnelIncludesSinglePage</code>

##### FallbackDomains

Methods:

- <code title="put /accounts/{account_id}/devices/policy/fallback_domains">client.zeroTrust.devices.policies.default.fallbackDomains.<a href="./src/resources/zero-trust/devices/policies/default/fallback-domains.ts">update</a>([ ...domains ]) -> FallbackDomainsSinglePage</code>
- <code title="get /accounts/{account_id}/devices/policy/fallback_domains">client.zeroTrust.devices.policies.default.fallbackDomains.<a href="./src/resources/zero-trust/devices/policies/default/fallback-domains.ts">get</a>({ ...params }) -> FallbackDomainsSinglePage</code>

##### Certificates

Methods:

- <code title="patch /zones/{zone_id}/devices/policy/certificates">client.zeroTrust.devices.policies.default.certificates.<a href="./src/resources/zero-trust/devices/policies/default/certificates.ts">edit</a>({ ...params }) -> DevicePolicyCertificates | null</code>
- <code title="get /zones/{zone_id}/devices/policy/certificates">client.zeroTrust.devices.policies.default.certificates.<a href="./src/resources/zero-trust/devices/policies/default/certificates.ts">get</a>({ ...params }) -> DevicePolicyCertificates | null</code>

#### Custom

Methods:

- <code title="post /accounts/{account_id}/devices/policy">client.zeroTrust.devices.policies.custom.<a href="./src/resources/zero-trust/devices/policies/custom/custom.ts">create</a>({ ...params }) -> SettingsPolicy | null</code>
- <code title="get /accounts/{account_id}/devices/policies">client.zeroTrust.devices.policies.custom.<a href="./src/resources/zero-trust/devices/policies/custom/custom.ts">list</a>({ ...params }) -> SettingsPoliciesSinglePage</code>
- <code title="delete /accounts/{account_id}/devices/policy/{policy_id}">client.zeroTrust.devices.policies.custom.<a href="./src/resources/zero-trust/devices/policies/custom/custom.ts">delete</a>(policyId, { ...params }) -> SettingsPoliciesSinglePage</code>
- <code title="patch /accounts/{account_id}/devices/policy/{policy_id}">client.zeroTrust.devices.policies.custom.<a href="./src/resources/zero-trust/devices/policies/custom/custom.ts">edit</a>(policyId, { ...params }) -> SettingsPolicy | null</code>
- <code title="get /accounts/{account_id}/devices/policy/{policy_id}">client.zeroTrust.devices.policies.custom.<a href="./src/resources/zero-trust/devices/policies/custom/custom.ts">get</a>(policyId, { ...params }) -> SettingsPolicy | null</code>

##### Excludes

Methods:

- <code title="put /accounts/{account_id}/devices/policy/{policy_id}/exclude">client.zeroTrust.devices.policies.custom.excludes.<a href="./src/resources/zero-trust/devices/policies/custom/excludes.ts">update</a>(policyId, [ ...body ]) -> SplitTunnelExcludesSinglePage</code>
- <code title="get /accounts/{account_id}/devices/policy/{policy_id}/exclude">client.zeroTrust.devices.policies.custom.excludes.<a href="./src/resources/zero-trust/devices/policies/custom/excludes.ts">get</a>(policyId, { ...params }) -> SplitTunnelExcludesSinglePage</code>

##### Includes

Methods:

- <code title="put /accounts/{account_id}/devices/policy/{policy_id}/include">client.zeroTrust.devices.policies.custom.includes.<a href="./src/resources/zero-trust/devices/policies/custom/includes.ts">update</a>(policyId, [ ...body ]) -> SplitTunnelIncludesSinglePage</code>
- <code title="get /accounts/{account_id}/devices/policy/{policy_id}/include">client.zeroTrust.devices.policies.custom.includes.<a href="./src/resources/zero-trust/devices/policies/custom/includes.ts">get</a>(policyId, { ...params }) -> SplitTunnelIncludesSinglePage</code>

##### FallbackDomains

Methods:

- <code title="put /accounts/{account_id}/devices/policy/{policy_id}/fallback_domains">client.zeroTrust.devices.policies.custom.fallbackDomains.<a href="./src/resources/zero-trust/devices/policies/custom/fallback-domains.ts">update</a>(policyId, [ ...domains ]) -> FallbackDomainsSinglePage</code>
- <code title="get /accounts/{account_id}/devices/policy/{policy_id}/fallback_domains">client.zeroTrust.devices.policies.custom.fallbackDomains.<a href="./src/resources/zero-trust/devices/policies/custom/fallback-domains.ts">get</a>(policyId, { ...params }) -> FallbackDomainsSinglePage</code>

### Posture

Types:

- <code><a href="./src/resources/zero-trust/devices/posture/posture.ts">CarbonblackInput</a></code>
- <code><a href="./src/resources/zero-trust/devices/posture/posture.ts">ClientCertificateInput</a></code>
- <code><a href="./src/resources/zero-trust/devices/posture/posture.ts">CrowdstrikeInput</a></code>
- <code><a href="./src/resources/zero-trust/devices/posture/posture.ts">DeviceInput</a></code>
- <code><a href="./src/resources/zero-trust/devices/posture/posture.ts">DeviceMatch</a></code>
- <code><a href="./src/resources/zero-trust/devices/posture/posture.ts">DevicePostureRule</a></code>
- <code><a href="./src/resources/zero-trust/devices/posture/posture.ts">DiskEncryptionInput</a></code>
- <code><a href="./src/resources/zero-trust/devices/posture/posture.ts">DomainJoinedInput</a></code>
- <code><a href="./src/resources/zero-trust/devices/posture/posture.ts">FileInput</a></code>
- <code><a href="./src/resources/zero-trust/devices/posture/posture.ts">FirewallInput</a></code>
- <code><a href="./src/resources/zero-trust/devices/posture/posture.ts">IntuneInput</a></code>
- <code><a href="./src/resources/zero-trust/devices/posture/posture.ts">KolideInput</a></code>
- <code><a href="./src/resources/zero-trust/devices/posture/posture.ts">OSVersionInput</a></code>
- <code><a href="./src/resources/zero-trust/devices/posture/posture.ts">SentineloneInput</a></code>
- <code><a href="./src/resources/zero-trust/devices/posture/posture.ts">SentineloneS2sInput</a></code>
- <code><a href="./src/resources/zero-trust/devices/posture/posture.ts">TaniumInput</a></code>
- <code><a href="./src/resources/zero-trust/devices/posture/posture.ts">UniqueClientIDInput</a></code>
- <code><a href="./src/resources/zero-trust/devices/posture/posture.ts">WorkspaceOneInput</a></code>
- <code><a href="./src/resources/zero-trust/devices/posture/posture.ts">PostureDeleteResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/devices/posture">client.zeroTrust.devices.posture.<a href="./src/resources/zero-trust/devices/posture/posture.ts">create</a>({ ...params }) -> DevicePostureRule | null</code>
- <code title="put /accounts/{account_id}/devices/posture/{rule_id}">client.zeroTrust.devices.posture.<a href="./src/resources/zero-trust/devices/posture/posture.ts">update</a>(ruleId, { ...params }) -> DevicePostureRule | null</code>
- <code title="get /accounts/{account_id}/devices/posture">client.zeroTrust.devices.posture.<a href="./src/resources/zero-trust/devices/posture/posture.ts">list</a>({ ...params }) -> DevicePostureRulesSinglePage</code>
- <code title="delete /accounts/{account_id}/devices/posture/{rule_id}">client.zeroTrust.devices.posture.<a href="./src/resources/zero-trust/devices/posture/posture.ts">delete</a>(ruleId, { ...params }) -> PostureDeleteResponse | null</code>
- <code title="get /accounts/{account_id}/devices/posture/{rule_id}">client.zeroTrust.devices.posture.<a href="./src/resources/zero-trust/devices/posture/posture.ts">get</a>(ruleId, { ...params }) -> DevicePostureRule | null</code>

#### Integrations

Types:

- <code><a href="./src/resources/zero-trust/devices/posture/integrations.ts">Integration</a></code>
- <code><a href="./src/resources/zero-trust/devices/posture/integrations.ts">IntegrationDeleteResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/devices/posture/integration">client.zeroTrust.devices.posture.integrations.<a href="./src/resources/zero-trust/devices/posture/integrations.ts">create</a>({ ...params }) -> Integration | null</code>
- <code title="get /accounts/{account_id}/devices/posture/integration">client.zeroTrust.devices.posture.integrations.<a href="./src/resources/zero-trust/devices/posture/integrations.ts">list</a>({ ...params }) -> IntegrationsSinglePage</code>
- <code title="delete /accounts/{account_id}/devices/posture/integration/{integration_id}">client.zeroTrust.devices.posture.integrations.<a href="./src/resources/zero-trust/devices/posture/integrations.ts">delete</a>(integrationId, { ...params }) -> IntegrationDeleteResponse | null</code>
- <code title="patch /accounts/{account_id}/devices/posture/integration/{integration_id}">client.zeroTrust.devices.posture.integrations.<a href="./src/resources/zero-trust/devices/posture/integrations.ts">edit</a>(integrationId, { ...params }) -> Integration | null</code>
- <code title="get /accounts/{account_id}/devices/posture/integration/{integration_id}">client.zeroTrust.devices.posture.integrations.<a href="./src/resources/zero-trust/devices/posture/integrations.ts">get</a>(integrationId, { ...params }) -> Integration | null</code>

### Revoke

Types:

- <code><a href="./src/resources/zero-trust/devices/revoke.ts">RevokeCreateResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/devices/revoke">client.zeroTrust.devices.revoke.<a href="./src/resources/zero-trust/devices/revoke.ts">create</a>([ ...body ]) -> RevokeCreateResponse | null</code>

### Settings

Types:

- <code><a href="./src/resources/zero-trust/devices/settings.ts">DeviceSettings</a></code>

Methods:

- <code title="put /accounts/{account_id}/devices/settings">client.zeroTrust.devices.settings.<a href="./src/resources/zero-trust/devices/settings.ts">update</a>({ ...params }) -> DeviceSettings | null</code>
- <code title="delete /accounts/{account_id}/devices/settings">client.zeroTrust.devices.settings.<a href="./src/resources/zero-trust/devices/settings.ts">delete</a>({ ...params }) -> DeviceSettings | null</code>
- <code title="patch /accounts/{account_id}/devices/settings">client.zeroTrust.devices.settings.<a href="./src/resources/zero-trust/devices/settings.ts">edit</a>({ ...params }) -> DeviceSettings | null</code>
- <code title="get /accounts/{account_id}/devices/settings">client.zeroTrust.devices.settings.<a href="./src/resources/zero-trust/devices/settings.ts">get</a>({ ...params }) -> DeviceSettings | null</code>

### Unrevoke

Types:

- <code><a href="./src/resources/zero-trust/devices/unrevoke.ts">UnrevokeCreateResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/devices/unrevoke">client.zeroTrust.devices.unrevoke.<a href="./src/resources/zero-trust/devices/unrevoke.ts">create</a>([ ...body ]) -> UnrevokeCreateResponse | null</code>

### OverrideCodes

Types:

- <code><a href="./src/resources/zero-trust/devices/override-codes.ts">OverrideCodeListResponse</a></code>
- <code><a href="./src/resources/zero-trust/devices/override-codes.ts">OverrideCodeGetResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/devices/{device_id}/override_codes">client.zeroTrust.devices.overrideCodes.<a href="./src/resources/zero-trust/devices/override-codes.ts">list</a>(deviceId, { ...params }) -> OverrideCodeListResponsesSinglePage</code>
- <code title="get /accounts/{account_id}/devices/registrations/{registration_id}/override_codes">client.zeroTrust.devices.overrideCodes.<a href="./src/resources/zero-trust/devices/override-codes.ts">get</a>(registrationId, { ...params }) -> OverrideCodeGetResponse</code>

## IdentityProviders

Types:

- <code><a href="./src/resources/zero-trust/identity-providers/identity-providers.ts">AzureAD</a></code>
- <code><a href="./src/resources/zero-trust/identity-providers/identity-providers.ts">GenericOAuthConfig</a></code>
- <code><a href="./src/resources/zero-trust/identity-providers/identity-providers.ts">IdentityProvider</a></code>
- <code><a href="./src/resources/zero-trust/identity-providers/identity-providers.ts">IdentityProviderSCIMConfig</a></code>
- <code><a href="./src/resources/zero-trust/identity-providers/identity-providers.ts">IdentityProviderType</a></code>
- <code><a href="./src/resources/zero-trust/identity-providers/identity-providers.ts">IdentityProviderListResponse</a></code>
- <code><a href="./src/resources/zero-trust/identity-providers/identity-providers.ts">IdentityProviderDeleteResponse</a></code>

Methods:

- <code title="post /{accounts_or_zones}/{account_or_zone_id}/access/identity_providers">client.zeroTrust.identityProviders.<a href="./src/resources/zero-trust/identity-providers/identity-providers.ts">create</a>({ ...params }) -> IdentityProvider</code>
- <code title="put /{accounts_or_zones}/{account_or_zone_id}/access/identity_providers/{identity_provider_id}">client.zeroTrust.identityProviders.<a href="./src/resources/zero-trust/identity-providers/identity-providers.ts">update</a>(identityProviderId, { ...params }) -> IdentityProvider</code>
- <code title="get /{accounts_or_zones}/{account_or_zone_id}/access/identity_providers">client.zeroTrust.identityProviders.<a href="./src/resources/zero-trust/identity-providers/identity-providers.ts">list</a>({ ...params }) -> IdentityProviderListResponsesSinglePage</code>
- <code title="delete /{accounts_or_zones}/{account_or_zone_id}/access/identity_providers/{identity_provider_id}">client.zeroTrust.identityProviders.<a href="./src/resources/zero-trust/identity-providers/identity-providers.ts">delete</a>(identityProviderId, { ...params }) -> IdentityProviderDeleteResponse</code>
- <code title="get /{accounts_or_zones}/{account_or_zone_id}/access/identity_providers/{identity_provider_id}">client.zeroTrust.identityProviders.<a href="./src/resources/zero-trust/identity-providers/identity-providers.ts">get</a>(identityProviderId, { ...params }) -> IdentityProvider</code>

### SCIM

#### Groups

Methods:

- <code title="get /accounts/{account_id}/access/identity_providers/{identity_provider_id}/scim/groups">client.zeroTrust.identityProviders.scim.groups.<a href="./src/resources/zero-trust/identity-providers/scim/groups.ts">list</a>(identityProviderId, { ...params }) -> ZeroTrustGroupsSinglePage</code>

#### Users

Methods:

- <code title="get /accounts/{account_id}/access/identity_providers/{identity_provider_id}/scim/users">client.zeroTrust.identityProviders.scim.users.<a href="./src/resources/zero-trust/identity-providers/scim/users.ts">list</a>(identityProviderId, { ...params }) -> AccessUsersSinglePage</code>

## Organizations

Types:

- <code><a href="./src/resources/zero-trust/organizations/organizations.ts">LoginDesign</a></code>
- <code><a href="./src/resources/zero-trust/organizations/organizations.ts">Organization</a></code>
- <code><a href="./src/resources/zero-trust/organizations/organizations.ts">OrganizationRevokeUsersResponse</a></code>

Methods:

- <code title="post /{accounts_or_zones}/{account_or_zone_id}/access/organizations">client.zeroTrust.organizations.<a href="./src/resources/zero-trust/organizations/organizations.ts">create</a>({ ...params }) -> Organization</code>
- <code title="put /{accounts_or_zones}/{account_or_zone_id}/access/organizations">client.zeroTrust.organizations.<a href="./src/resources/zero-trust/organizations/organizations.ts">update</a>({ ...params }) -> Organization</code>
- <code title="get /{accounts_or_zones}/{account_or_zone_id}/access/organizations">client.zeroTrust.organizations.<a href="./src/resources/zero-trust/organizations/organizations.ts">list</a>({ ...params }) -> Organization</code>
- <code title="post /{accounts_or_zones}/{account_or_zone_id}/access/organizations/revoke_user">client.zeroTrust.organizations.<a href="./src/resources/zero-trust/organizations/organizations.ts">revokeUsers</a>({ ...params }) -> OrganizationRevokeUsersResponse</code>

### DOH

Types:

- <code><a href="./src/resources/zero-trust/organizations/doh.ts">DOHUpdateResponse</a></code>
- <code><a href="./src/resources/zero-trust/organizations/doh.ts">DOHGetResponse</a></code>

Methods:

- <code title="put /accounts/{account_id}/access/organizations/doh">client.zeroTrust.organizations.doh.<a href="./src/resources/zero-trust/organizations/doh.ts">update</a>({ ...params }) -> DOHUpdateResponse</code>
- <code title="get /accounts/{account_id}/access/organizations/doh">client.zeroTrust.organizations.doh.<a href="./src/resources/zero-trust/organizations/doh.ts">get</a>({ ...params }) -> DOHGetResponse</code>

## Seats

Types:

- <code><a href="./src/resources/zero-trust/seats.ts">Seat</a></code>

Methods:

- <code title="patch /accounts/{account_id}/access/seats">client.zeroTrust.seats.<a href="./src/resources/zero-trust/seats.ts">edit</a>([ ...body ]) -> SeatsSinglePage</code>

## Access

### GatewayCA

Types:

- <code><a href="./src/resources/zero-trust/access/gateway-ca.ts">GatewayCACreateResponse</a></code>
- <code><a href="./src/resources/zero-trust/access/gateway-ca.ts">GatewayCAListResponse</a></code>
- <code><a href="./src/resources/zero-trust/access/gateway-ca.ts">GatewayCADeleteResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/access/gateway_ca">client.zeroTrust.access.gatewayCA.<a href="./src/resources/zero-trust/access/gateway-ca.ts">create</a>({ ...params }) -> GatewayCACreateResponse</code>
- <code title="get /accounts/{account_id}/access/gateway_ca">client.zeroTrust.access.gatewayCA.<a href="./src/resources/zero-trust/access/gateway-ca.ts">list</a>({ ...params }) -> GatewayCAListResponsesSinglePage</code>
- <code title="delete /accounts/{account_id}/access/gateway_ca/{certificate_id}">client.zeroTrust.access.gatewayCA.<a href="./src/resources/zero-trust/access/gateway-ca.ts">delete</a>(certificateId, { ...params }) -> GatewayCADeleteResponse</code>

### Infrastructure

#### Targets

Types:

- <code><a href="./src/resources/zero-trust/access/infrastructure/targets.ts">TargetCreateResponse</a></code>
- <code><a href="./src/resources/zero-trust/access/infrastructure/targets.ts">TargetUpdateResponse</a></code>
- <code><a href="./src/resources/zero-trust/access/infrastructure/targets.ts">TargetListResponse</a></code>
- <code><a href="./src/resources/zero-trust/access/infrastructure/targets.ts">TargetBulkUpdateResponse</a></code>
- <code><a href="./src/resources/zero-trust/access/infrastructure/targets.ts">TargetGetResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/infrastructure/targets">client.zeroTrust.access.infrastructure.targets.<a href="./src/resources/zero-trust/access/infrastructure/targets.ts">create</a>({ ...params }) -> TargetCreateResponse</code>
- <code title="put /accounts/{account_id}/infrastructure/targets/{target_id}">client.zeroTrust.access.infrastructure.targets.<a href="./src/resources/zero-trust/access/infrastructure/targets.ts">update</a>(targetId, { ...params }) -> TargetUpdateResponse</code>
- <code title="get /accounts/{account_id}/infrastructure/targets">client.zeroTrust.access.infrastructure.targets.<a href="./src/resources/zero-trust/access/infrastructure/targets.ts">list</a>({ ...params }) -> TargetListResponsesV4PagePaginationArray</code>
- <code title="delete /accounts/{account_id}/infrastructure/targets/{target_id}">client.zeroTrust.access.infrastructure.targets.<a href="./src/resources/zero-trust/access/infrastructure/targets.ts">delete</a>(targetId, { ...params }) -> void</code>
- <code title="delete /accounts/{account_id}/infrastructure/targets/batch">client.zeroTrust.access.infrastructure.targets.<a href="./src/resources/zero-trust/access/infrastructure/targets.ts">bulkDelete</a>({ ...params }) -> void</code>
- <code title="post /accounts/{account_id}/infrastructure/targets/batch_delete">client.zeroTrust.access.infrastructure.targets.<a href="./src/resources/zero-trust/access/infrastructure/targets.ts">bulkDeleteV2</a>({ ...params }) -> void</code>
- <code title="put /accounts/{account_id}/infrastructure/targets/batch">client.zeroTrust.access.infrastructure.targets.<a href="./src/resources/zero-trust/access/infrastructure/targets.ts">bulkUpdate</a>([ ...body ]) -> TargetBulkUpdateResponsesSinglePage</code>
- <code title="get /accounts/{account_id}/infrastructure/targets/{target_id}">client.zeroTrust.access.infrastructure.targets.<a href="./src/resources/zero-trust/access/infrastructure/targets.ts">get</a>(targetId, { ...params }) -> TargetGetResponse</code>

### Applications

Types:

- <code><a href="./src/resources/zero-trust/access/applications/applications.ts">AllowedHeaders</a></code>
- <code><a href="./src/resources/zero-trust/access/applications/applications.ts">AllowedIdPs</a></code>
- <code><a href="./src/resources/zero-trust/access/applications/applications.ts">AllowedMethods</a></code>
- <code><a href="./src/resources/zero-trust/access/applications/applications.ts">AllowedOrigins</a></code>
- <code><a href="./src/resources/zero-trust/access/applications/applications.ts">AppID</a></code>
- <code><a href="./src/resources/zero-trust/access/applications/applications.ts">Application</a></code>
- <code><a href="./src/resources/zero-trust/access/applications/applications.ts">ApplicationPolicy</a></code>
- <code><a href="./src/resources/zero-trust/access/applications/applications.ts">ApplicationSCIMConfig</a></code>
- <code><a href="./src/resources/zero-trust/access/applications/applications.ts">ApplicationType</a></code>
- <code><a href="./src/resources/zero-trust/access/applications/applications.ts">CORSHeaders</a></code>
- <code><a href="./src/resources/zero-trust/access/applications/applications.ts">Decision</a></code>
- <code><a href="./src/resources/zero-trust/access/applications/applications.ts">OIDCSaaSApp</a></code>
- <code><a href="./src/resources/zero-trust/access/applications/applications.ts">SaaSAppNameIDFormat</a></code>
- <code><a href="./src/resources/zero-trust/access/applications/applications.ts">SAMLSaaSApp</a></code>
- <code><a href="./src/resources/zero-trust/access/applications/applications.ts">SCIMConfigAuthenticationHTTPBasic</a></code>
- <code><a href="./src/resources/zero-trust/access/applications/applications.ts">SCIMConfigAuthenticationOAuthBearerToken</a></code>
- <code><a href="./src/resources/zero-trust/access/applications/applications.ts">SCIMConfigAuthenticationOauth2</a></code>
- <code><a href="./src/resources/zero-trust/access/applications/applications.ts">SCIMConfigMapping</a></code>
- <code><a href="./src/resources/zero-trust/access/applications/applications.ts">SelfHostedDomains</a></code>
- <code><a href="./src/resources/zero-trust/access/applications/applications.ts">ApplicationCreateResponse</a></code>
- <code><a href="./src/resources/zero-trust/access/applications/applications.ts">ApplicationUpdateResponse</a></code>
- <code><a href="./src/resources/zero-trust/access/applications/applications.ts">ApplicationListResponse</a></code>
- <code><a href="./src/resources/zero-trust/access/applications/applications.ts">ApplicationDeleteResponse</a></code>
- <code><a href="./src/resources/zero-trust/access/applications/applications.ts">ApplicationGetResponse</a></code>
- <code><a href="./src/resources/zero-trust/access/applications/applications.ts">ApplicationRevokeTokensResponse</a></code>

Methods:

- <code title="post /{accounts_or_zones}/{account_or_zone_id}/access/apps">client.zeroTrust.access.applications.<a href="./src/resources/zero-trust/access/applications/applications.ts">create</a>({ ...params }) -> ApplicationCreateResponse</code>
- <code title="put /{accounts_or_zones}/{account_or_zone_id}/access/apps/{app_id}">client.zeroTrust.access.applications.<a href="./src/resources/zero-trust/access/applications/applications.ts">update</a>(appId, { ...params }) -> ApplicationUpdateResponse</code>
- <code title="get /{accounts_or_zones}/{account_or_zone_id}/access/apps">client.zeroTrust.access.applications.<a href="./src/resources/zero-trust/access/applications/applications.ts">list</a>({ ...params }) -> ApplicationListResponsesSinglePage</code>
- <code title="delete /{accounts_or_zones}/{account_or_zone_id}/access/apps/{app_id}">client.zeroTrust.access.applications.<a href="./src/resources/zero-trust/access/applications/applications.ts">delete</a>(appId, { ...params }) -> ApplicationDeleteResponse</code>
- <code title="get /{accounts_or_zones}/{account_or_zone_id}/access/apps/{app_id}">client.zeroTrust.access.applications.<a href="./src/resources/zero-trust/access/applications/applications.ts">get</a>(appId, { ...params }) -> ApplicationGetResponse</code>
- <code title="post /{accounts_or_zones}/{account_or_zone_id}/access/apps/{app_id}/revoke_tokens">client.zeroTrust.access.applications.<a href="./src/resources/zero-trust/access/applications/applications.ts">revokeTokens</a>(appId, { ...params }) -> ApplicationRevokeTokensResponse | null</code>

#### CAs

Types:

- <code><a href="./src/resources/zero-trust/access/applications/cas.ts">CA</a></code>
- <code><a href="./src/resources/zero-trust/access/applications/cas.ts">CADeleteResponse</a></code>

Methods:

- <code title="post /{accounts_or_zones}/{account_or_zone_id}/access/apps/{app_id}/ca">client.zeroTrust.access.applications.cas.<a href="./src/resources/zero-trust/access/applications/cas.ts">create</a>(appId, { ...params }) -> CA</code>
- <code title="get /{accounts_or_zones}/{account_or_zone_id}/access/apps/ca">client.zeroTrust.access.applications.cas.<a href="./src/resources/zero-trust/access/applications/cas.ts">list</a>({ ...params }) -> CAsSinglePage</code>
- <code title="delete /{accounts_or_zones}/{account_or_zone_id}/access/apps/{app_id}/ca">client.zeroTrust.access.applications.cas.<a href="./src/resources/zero-trust/access/applications/cas.ts">delete</a>(appId, { ...params }) -> CADeleteResponse</code>
- <code title="get /{accounts_or_zones}/{account_or_zone_id}/access/apps/{app_id}/ca">client.zeroTrust.access.applications.cas.<a href="./src/resources/zero-trust/access/applications/cas.ts">get</a>(appId, { ...params }) -> CA</code>

#### UserPolicyChecks

Types:

- <code><a href="./src/resources/zero-trust/access/applications/user-policy-checks.ts">UserPolicyCheckGeo</a></code>
- <code><a href="./src/resources/zero-trust/access/applications/user-policy-checks.ts">UserPolicyCheckListResponse</a></code>

Methods:

- <code title="get /{accounts_or_zones}/{account_or_zone_id}/access/apps/{app_id}/user_policy_checks">client.zeroTrust.access.applications.userPolicyChecks.<a href="./src/resources/zero-trust/access/applications/user-policy-checks.ts">list</a>(appId, { ...params }) -> UserPolicyCheckListResponse</code>

#### Policies

Types:

- <code><a href="./src/resources/zero-trust/access/applications/policies.ts">AccessDevicePostureRule</a></code>
- <code><a href="./src/resources/zero-trust/access/applications/policies.ts">AccessRule</a></code>
- <code><a href="./src/resources/zero-trust/access/applications/policies.ts">AnyValidServiceTokenRule</a></code>
- <code><a href="./src/resources/zero-trust/access/applications/policies.ts">AuthenticationMethodRule</a></code>
- <code><a href="./src/resources/zero-trust/access/applications/policies.ts">AzureGroupRule</a></code>
- <code><a href="./src/resources/zero-trust/access/applications/policies.ts">CertificateRule</a></code>
- <code><a href="./src/resources/zero-trust/access/applications/policies.ts">CountryRule</a></code>
- <code><a href="./src/resources/zero-trust/access/applications/policies.ts">DomainRule</a></code>
- <code><a href="./src/resources/zero-trust/access/applications/policies.ts">EmailListRule</a></code>
- <code><a href="./src/resources/zero-trust/access/applications/policies.ts">EmailRule</a></code>
- <code><a href="./src/resources/zero-trust/access/applications/policies.ts">EveryoneRule</a></code>
- <code><a href="./src/resources/zero-trust/access/applications/policies.ts">ExternalEvaluationRule</a></code>
- <code><a href="./src/resources/zero-trust/access/applications/policies.ts">GitHubOrganizationRule</a></code>
- <code><a href="./src/resources/zero-trust/access/applications/policies.ts">GroupRule</a></code>
- <code><a href="./src/resources/zero-trust/access/applications/policies.ts">GSuiteGroupRule</a></code>
- <code><a href="./src/resources/zero-trust/access/applications/policies.ts">IPListRule</a></code>
- <code><a href="./src/resources/zero-trust/access/applications/policies.ts">IPRule</a></code>
- <code><a href="./src/resources/zero-trust/access/applications/policies.ts">OktaGroupRule</a></code>
- <code><a href="./src/resources/zero-trust/access/applications/policies.ts">SAMLGroupRule</a></code>
- <code><a href="./src/resources/zero-trust/access/applications/policies.ts">ServiceTokenRule</a></code>
- <code><a href="./src/resources/zero-trust/access/applications/policies.ts">PolicyCreateResponse</a></code>
- <code><a href="./src/resources/zero-trust/access/applications/policies.ts">PolicyUpdateResponse</a></code>
- <code><a href="./src/resources/zero-trust/access/applications/policies.ts">PolicyListResponse</a></code>
- <code><a href="./src/resources/zero-trust/access/applications/policies.ts">PolicyDeleteResponse</a></code>
- <code><a href="./src/resources/zero-trust/access/applications/policies.ts">PolicyGetResponse</a></code>

Methods:

- <code title="post /{accounts_or_zones}/{account_or_zone_id}/access/apps/{app_id}/policies">client.zeroTrust.access.applications.policies.<a href="./src/resources/zero-trust/access/applications/policies.ts">create</a>(appId, { ...params }) -> PolicyCreateResponse</code>
- <code title="put /{accounts_or_zones}/{account_or_zone_id}/access/apps/{app_id}/policies/{policy_id}">client.zeroTrust.access.applications.policies.<a href="./src/resources/zero-trust/access/applications/policies.ts">update</a>(appId, policyId, { ...params }) -> PolicyUpdateResponse</code>
- <code title="get /{accounts_or_zones}/{account_or_zone_id}/access/apps/{app_id}/policies">client.zeroTrust.access.applications.policies.<a href="./src/resources/zero-trust/access/applications/policies.ts">list</a>(appId, { ...params }) -> PolicyListResponsesSinglePage</code>
- <code title="delete /{accounts_or_zones}/{account_or_zone_id}/access/apps/{app_id}/policies/{policy_id}">client.zeroTrust.access.applications.policies.<a href="./src/resources/zero-trust/access/applications/policies.ts">delete</a>(appId, policyId, { ...params }) -> PolicyDeleteResponse</code>
- <code title="get /{accounts_or_zones}/{account_or_zone_id}/access/apps/{app_id}/policies/{policy_id}">client.zeroTrust.access.applications.policies.<a href="./src/resources/zero-trust/access/applications/policies.ts">get</a>(appId, policyId, { ...params }) -> PolicyGetResponse</code>

#### PolicyTests

Types:

- <code><a href="./src/resources/zero-trust/access/applications/policy-tests/policy-tests.ts">PolicyTestCreateResponse</a></code>
- <code><a href="./src/resources/zero-trust/access/applications/policy-tests/policy-tests.ts">PolicyTestGetResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/access/policy-tests">client.zeroTrust.access.applications.policyTests.<a href="./src/resources/zero-trust/access/applications/policy-tests/policy-tests.ts">create</a>({ ...params }) -> PolicyTestCreateResponse</code>
- <code title="get /accounts/{account_id}/access/policy-tests/{policy_test_id}">client.zeroTrust.access.applications.policyTests.<a href="./src/resources/zero-trust/access/applications/policy-tests/policy-tests.ts">get</a>(policyTestId, { ...params }) -> PolicyTestGetResponse</code>

##### Users

Types:

- <code><a href="./src/resources/zero-trust/access/applications/policy-tests/users.ts">UserListResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/access/policy-tests/{policy_test_id}/users">client.zeroTrust.access.applications.policyTests.users.<a href="./src/resources/zero-trust/access/applications/policy-tests/users.ts">list</a>(policyTestId, { ...params }) -> UserListResponsesV4PagePaginationArray</code>

#### Settings

Types:

- <code><a href="./src/resources/zero-trust/access/applications/settings.ts">SettingUpdateResponse</a></code>
- <code><a href="./src/resources/zero-trust/access/applications/settings.ts">SettingEditResponse</a></code>

Methods:

- <code title="put /{accounts_or_zones}/{account_or_zone_id}/access/apps/{app_id}/settings">client.zeroTrust.access.applications.settings.<a href="./src/resources/zero-trust/access/applications/settings.ts">update</a>(appId, { ...params }) -> SettingUpdateResponse</code>
- <code title="patch /{accounts_or_zones}/{account_or_zone_id}/access/apps/{app_id}/settings">client.zeroTrust.access.applications.settings.<a href="./src/resources/zero-trust/access/applications/settings.ts">edit</a>(appId, { ...params }) -> SettingEditResponse</code>

### Certificates

Types:

- <code><a href="./src/resources/zero-trust/access/certificates/certificates.ts">AssociatedHostnames</a></code>
- <code><a href="./src/resources/zero-trust/access/certificates/certificates.ts">Certificate</a></code>
- <code><a href="./src/resources/zero-trust/access/certificates/certificates.ts">CertificateDeleteResponse</a></code>

Methods:

- <code title="post /{accounts_or_zones}/{account_or_zone_id}/access/certificates">client.zeroTrust.access.certificates.<a href="./src/resources/zero-trust/access/certificates/certificates.ts">create</a>({ ...params }) -> Certificate</code>
- <code title="put /{accounts_or_zones}/{account_or_zone_id}/access/certificates/{certificate_id}">client.zeroTrust.access.certificates.<a href="./src/resources/zero-trust/access/certificates/certificates.ts">update</a>(certificateId, { ...params }) -> Certificate</code>
- <code title="get /{accounts_or_zones}/{account_or_zone_id}/access/certificates">client.zeroTrust.access.certificates.<a href="./src/resources/zero-trust/access/certificates/certificates.ts">list</a>({ ...params }) -> CertificatesSinglePage</code>
- <code title="delete /{accounts_or_zones}/{account_or_zone_id}/access/certificates/{certificate_id}">client.zeroTrust.access.certificates.<a href="./src/resources/zero-trust/access/certificates/certificates.ts">delete</a>(certificateId, { ...params }) -> CertificateDeleteResponse</code>
- <code title="get /{accounts_or_zones}/{account_or_zone_id}/access/certificates/{certificate_id}">client.zeroTrust.access.certificates.<a href="./src/resources/zero-trust/access/certificates/certificates.ts">get</a>(certificateId, { ...params }) -> Certificate</code>

#### Settings

Types:

- <code><a href="./src/resources/zero-trust/access/certificates/settings.ts">CertificateSettings</a></code>

Methods:

- <code title="put /{accounts_or_zones}/{account_or_zone_id}/access/certificates/settings">client.zeroTrust.access.certificates.settings.<a href="./src/resources/zero-trust/access/certificates/settings.ts">update</a>({ ...params }) -> CertificateSettingsSinglePage</code>
- <code title="get /{accounts_or_zones}/{account_or_zone_id}/access/certificates/settings">client.zeroTrust.access.certificates.settings.<a href="./src/resources/zero-trust/access/certificates/settings.ts">get</a>({ ...params }) -> CertificateSettingsSinglePage</code>

### Groups

Types:

- <code><a href="./src/resources/zero-trust/access/groups.ts">ZeroTrustGroup</a></code>
- <code><a href="./src/resources/zero-trust/access/groups.ts">GroupCreateResponse</a></code>
- <code><a href="./src/resources/zero-trust/access/groups.ts">GroupUpdateResponse</a></code>
- <code><a href="./src/resources/zero-trust/access/groups.ts">GroupListResponse</a></code>
- <code><a href="./src/resources/zero-trust/access/groups.ts">GroupDeleteResponse</a></code>
- <code><a href="./src/resources/zero-trust/access/groups.ts">GroupGetResponse</a></code>

Methods:

- <code title="post /{accounts_or_zones}/{account_or_zone_id}/access/groups">client.zeroTrust.access.groups.<a href="./src/resources/zero-trust/access/groups.ts">create</a>({ ...params }) -> GroupCreateResponse</code>
- <code title="put /{accounts_or_zones}/{account_or_zone_id}/access/groups/{group_id}">client.zeroTrust.access.groups.<a href="./src/resources/zero-trust/access/groups.ts">update</a>(groupId, { ...params }) -> GroupUpdateResponse</code>
- <code title="get /{accounts_or_zones}/{account_or_zone_id}/access/groups">client.zeroTrust.access.groups.<a href="./src/resources/zero-trust/access/groups.ts">list</a>({ ...params }) -> GroupListResponsesSinglePage</code>
- <code title="delete /{accounts_or_zones}/{account_or_zone_id}/access/groups/{group_id}">client.zeroTrust.access.groups.<a href="./src/resources/zero-trust/access/groups.ts">delete</a>(groupId, { ...params }) -> GroupDeleteResponse</code>
- <code title="get /{accounts_or_zones}/{account_or_zone_id}/access/groups/{group_id}">client.zeroTrust.access.groups.<a href="./src/resources/zero-trust/access/groups.ts">get</a>(groupId, { ...params }) -> GroupGetResponse</code>

### ServiceTokens

Types:

- <code><a href="./src/resources/zero-trust/access/service-tokens.ts">ServiceToken</a></code>
- <code><a href="./src/resources/zero-trust/access/service-tokens.ts">ServiceTokenCreateResponse</a></code>
- <code><a href="./src/resources/zero-trust/access/service-tokens.ts">ServiceTokenRotateResponse</a></code>

Methods:

- <code title="post /{accounts_or_zones}/{account_or_zone_id}/access/service_tokens">client.zeroTrust.access.serviceTokens.<a href="./src/resources/zero-trust/access/service-tokens.ts">create</a>({ ...params }) -> ServiceTokenCreateResponse</code>
- <code title="put /{accounts_or_zones}/{account_or_zone_id}/access/service_tokens/{service_token_id}">client.zeroTrust.access.serviceTokens.<a href="./src/resources/zero-trust/access/service-tokens.ts">update</a>(serviceTokenId, { ...params }) -> ServiceToken</code>
- <code title="get /{accounts_or_zones}/{account_or_zone_id}/access/service_tokens">client.zeroTrust.access.serviceTokens.<a href="./src/resources/zero-trust/access/service-tokens.ts">list</a>({ ...params }) -> ServiceTokensSinglePage</code>
- <code title="delete /{accounts_or_zones}/{account_or_zone_id}/access/service_tokens/{service_token_id}">client.zeroTrust.access.serviceTokens.<a href="./src/resources/zero-trust/access/service-tokens.ts">delete</a>(serviceTokenId, { ...params }) -> ServiceToken</code>
- <code title="get /{accounts_or_zones}/{account_or_zone_id}/access/service_tokens/{service_token_id}">client.zeroTrust.access.serviceTokens.<a href="./src/resources/zero-trust/access/service-tokens.ts">get</a>(serviceTokenId, { ...params }) -> ServiceToken</code>
- <code title="post /accounts/{account_id}/access/service_tokens/{service_token_id}/refresh">client.zeroTrust.access.serviceTokens.<a href="./src/resources/zero-trust/access/service-tokens.ts">refresh</a>(serviceTokenId, { ...params }) -> ServiceToken</code>
- <code title="post /accounts/{account_id}/access/service_tokens/{service_token_id}/rotate">client.zeroTrust.access.serviceTokens.<a href="./src/resources/zero-trust/access/service-tokens.ts">rotate</a>(serviceTokenId, { ...params }) -> ServiceTokenRotateResponse</code>

### Bookmarks

Types:

- <code><a href="./src/resources/zero-trust/access/bookmarks.ts">Bookmark</a></code>
- <code><a href="./src/resources/zero-trust/access/bookmarks.ts">BookmarkDeleteResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/access/bookmarks/{bookmark_id}">client.zeroTrust.access.bookmarks.<a href="./src/resources/zero-trust/access/bookmarks.ts">create</a>(bookmarkId, { ...params }) -> Bookmark</code>
- <code title="put /accounts/{account_id}/access/bookmarks/{bookmark_id}">client.zeroTrust.access.bookmarks.<a href="./src/resources/zero-trust/access/bookmarks.ts">update</a>(bookmarkId, { ...params }) -> Bookmark</code>
- <code title="get /accounts/{account_id}/access/bookmarks">client.zeroTrust.access.bookmarks.<a href="./src/resources/zero-trust/access/bookmarks.ts">list</a>({ ...params }) -> BookmarksSinglePage</code>
- <code title="delete /accounts/{account_id}/access/bookmarks/{bookmark_id}">client.zeroTrust.access.bookmarks.<a href="./src/resources/zero-trust/access/bookmarks.ts">delete</a>(bookmarkId, { ...params }) -> BookmarkDeleteResponse</code>
- <code title="get /accounts/{account_id}/access/bookmarks/{bookmark_id}">client.zeroTrust.access.bookmarks.<a href="./src/resources/zero-trust/access/bookmarks.ts">get</a>(bookmarkId, { ...params }) -> Bookmark</code>

### Keys

Types:

- <code><a href="./src/resources/zero-trust/access/keys.ts">KeyUpdateResponse</a></code>
- <code><a href="./src/resources/zero-trust/access/keys.ts">KeyGetResponse</a></code>
- <code><a href="./src/resources/zero-trust/access/keys.ts">KeyRotateResponse</a></code>

Methods:

- <code title="put /accounts/{account_id}/access/keys">client.zeroTrust.access.keys.<a href="./src/resources/zero-trust/access/keys.ts">update</a>({ ...params }) -> KeyUpdateResponse</code>
- <code title="get /accounts/{account_id}/access/keys">client.zeroTrust.access.keys.<a href="./src/resources/zero-trust/access/keys.ts">get</a>({ ...params }) -> KeyGetResponse</code>
- <code title="post /accounts/{account_id}/access/keys/rotate">client.zeroTrust.access.keys.<a href="./src/resources/zero-trust/access/keys.ts">rotate</a>({ ...params }) -> KeyRotateResponse</code>

### Logs

#### AccessRequests

Types:

- <code><a href="./src/resources/zero-trust/access/logs/access-requests.ts">AccessRequestListResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/access/logs/access_requests">client.zeroTrust.access.logs.accessRequests.<a href="./src/resources/zero-trust/access/logs/access-requests.ts">list</a>({ ...params }) -> AccessRequestListResponse</code>

#### SCIM

Types:

- <code><a href="./src/resources/zero-trust/access/logs/scim/scim.ts">AccessRequest</a></code>

##### Updates

Types:

- <code><a href="./src/resources/zero-trust/access/logs/scim/updates.ts">UpdateListResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/access/logs/scim/updates">client.zeroTrust.access.logs.scim.updates.<a href="./src/resources/zero-trust/access/logs/scim/updates.ts">list</a>({ ...params }) -> UpdateListResponsesSinglePage</code>

### Users

Types:

- <code><a href="./src/resources/zero-trust/access/users/users.ts">AccessUser</a></code>
- <code><a href="./src/resources/zero-trust/access/users/users.ts">UserListResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/access/users">client.zeroTrust.access.users.<a href="./src/resources/zero-trust/access/users/users.ts">list</a>({ ...params }) -> UserListResponsesSinglePage</code>

#### ActiveSessions

Types:

- <code><a href="./src/resources/zero-trust/access/users/active-sessions.ts">ActiveSessionListResponse</a></code>
- <code><a href="./src/resources/zero-trust/access/users/active-sessions.ts">ActiveSessionGetResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/access/users/{user_id}/active_sessions">client.zeroTrust.access.users.activeSessions.<a href="./src/resources/zero-trust/access/users/active-sessions.ts">list</a>(userId, { ...params }) -> ActiveSessionListResponsesSinglePage</code>
- <code title="get /accounts/{account_id}/access/users/{user_id}/active_sessions/{nonce}">client.zeroTrust.access.users.activeSessions.<a href="./src/resources/zero-trust/access/users/active-sessions.ts">get</a>(userId, nonce, { ...params }) -> ActiveSessionGetResponse</code>

#### LastSeenIdentity

Types:

- <code><a href="./src/resources/zero-trust/access/users/last-seen-identity.ts">Identity</a></code>

Methods:

- <code title="get /accounts/{account_id}/access/users/{user_id}/last_seen_identity">client.zeroTrust.access.users.lastSeenIdentity.<a href="./src/resources/zero-trust/access/users/last-seen-identity.ts">get</a>(userId, { ...params }) -> Identity</code>

#### FailedLogins

Types:

- <code><a href="./src/resources/zero-trust/access/users/failed-logins.ts">FailedLoginListResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/access/users/{user_id}/failed_logins">client.zeroTrust.access.users.failedLogins.<a href="./src/resources/zero-trust/access/users/failed-logins.ts">list</a>(userId, { ...params }) -> FailedLoginListResponsesSinglePage</code>

### CustomPages

Types:

- <code><a href="./src/resources/zero-trust/access/custom-pages.ts">CustomPage</a></code>
- <code><a href="./src/resources/zero-trust/access/custom-pages.ts">CustomPageWithoutHTML</a></code>
- <code><a href="./src/resources/zero-trust/access/custom-pages.ts">CustomPageDeleteResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/access/custom_pages">client.zeroTrust.access.customPages.<a href="./src/resources/zero-trust/access/custom-pages.ts">create</a>({ ...params }) -> CustomPageWithoutHTML</code>
- <code title="put /accounts/{account_id}/access/custom_pages/{custom_page_id}">client.zeroTrust.access.customPages.<a href="./src/resources/zero-trust/access/custom-pages.ts">update</a>(customPageId, { ...params }) -> CustomPageWithoutHTML</code>
- <code title="get /accounts/{account_id}/access/custom_pages">client.zeroTrust.access.customPages.<a href="./src/resources/zero-trust/access/custom-pages.ts">list</a>({ ...params }) -> CustomPageWithoutHTMLsSinglePage</code>
- <code title="delete /accounts/{account_id}/access/custom_pages/{custom_page_id}">client.zeroTrust.access.customPages.<a href="./src/resources/zero-trust/access/custom-pages.ts">delete</a>(customPageId, { ...params }) -> CustomPageDeleteResponse</code>
- <code title="get /accounts/{account_id}/access/custom_pages/{custom_page_id}">client.zeroTrust.access.customPages.<a href="./src/resources/zero-trust/access/custom-pages.ts">get</a>(customPageId, { ...params }) -> CustomPage</code>

### Tags

Types:

- <code><a href="./src/resources/zero-trust/access/tags.ts">Tag</a></code>
- <code><a href="./src/resources/zero-trust/access/tags.ts">TagDeleteResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/access/tags">client.zeroTrust.access.tags.<a href="./src/resources/zero-trust/access/tags.ts">create</a>({ ...params }) -> Tag</code>
- <code title="put /accounts/{account_id}/access/tags/{tag_name}">client.zeroTrust.access.tags.<a href="./src/resources/zero-trust/access/tags.ts">update</a>(tagName, { ...params }) -> Tag</code>
- <code title="get /accounts/{account_id}/access/tags">client.zeroTrust.access.tags.<a href="./src/resources/zero-trust/access/tags.ts">list</a>({ ...params }) -> TagsSinglePage</code>
- <code title="delete /accounts/{account_id}/access/tags/{tag_name}">client.zeroTrust.access.tags.<a href="./src/resources/zero-trust/access/tags.ts">delete</a>(tagName, { ...params }) -> TagDeleteResponse</code>
- <code title="get /accounts/{account_id}/access/tags/{tag_name}">client.zeroTrust.access.tags.<a href="./src/resources/zero-trust/access/tags.ts">get</a>(tagName, { ...params }) -> Tag</code>

### Policies

Types:

- <code><a href="./src/resources/zero-trust/access/policies.ts">ApprovalGroup</a></code>
- <code><a href="./src/resources/zero-trust/access/policies.ts">Policy</a></code>
- <code><a href="./src/resources/zero-trust/access/policies.ts">PolicyCreateResponse</a></code>
- <code><a href="./src/resources/zero-trust/access/policies.ts">PolicyUpdateResponse</a></code>
- <code><a href="./src/resources/zero-trust/access/policies.ts">PolicyListResponse</a></code>
- <code><a href="./src/resources/zero-trust/access/policies.ts">PolicyDeleteResponse</a></code>
- <code><a href="./src/resources/zero-trust/access/policies.ts">PolicyGetResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/access/policies">client.zeroTrust.access.policies.<a href="./src/resources/zero-trust/access/policies.ts">create</a>({ ...params }) -> PolicyCreateResponse</code>
- <code title="put /accounts/{account_id}/access/policies/{policy_id}">client.zeroTrust.access.policies.<a href="./src/resources/zero-trust/access/policies.ts">update</a>(policyId, { ...params }) -> PolicyUpdateResponse</code>
- <code title="get /accounts/{account_id}/access/policies">client.zeroTrust.access.policies.<a href="./src/resources/zero-trust/access/policies.ts">list</a>({ ...params }) -> PolicyListResponsesSinglePage</code>
- <code title="delete /accounts/{account_id}/access/policies/{policy_id}">client.zeroTrust.access.policies.<a href="./src/resources/zero-trust/access/policies.ts">delete</a>(policyId, { ...params }) -> PolicyDeleteResponse</code>
- <code title="get /accounts/{account_id}/access/policies/{policy_id}">client.zeroTrust.access.policies.<a href="./src/resources/zero-trust/access/policies.ts">get</a>(policyId, { ...params }) -> PolicyGetResponse</code>

## DEX

Types:

- <code><a href="./src/resources/zero-trust/dex/dex.ts">DigitalExperienceMonitor</a></code>
- <code><a href="./src/resources/zero-trust/dex/dex.ts">NetworkPath</a></code>
- <code><a href="./src/resources/zero-trust/dex/dex.ts">NetworkPathResponse</a></code>
- <code><a href="./src/resources/zero-trust/dex/dex.ts">Percentiles</a></code>

### WARPChangeEvents

Types:

- <code><a href="./src/resources/zero-trust/dex/warp-change-events.ts">WARPChangeEventGetResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/dex/warp-change-events">client.zeroTrust.dex.warpChangeEvents.<a href="./src/resources/zero-trust/dex/warp-change-events.ts">get</a>({ ...params }) -> WARPChangeEventGetResponse</code>

### Commands

Types:

- <code><a href="./src/resources/zero-trust/dex/commands/commands.ts">CommandCreateResponse</a></code>
- <code><a href="./src/resources/zero-trust/dex/commands/commands.ts">CommandListResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/dex/commands">client.zeroTrust.dex.commands.<a href="./src/resources/zero-trust/dex/commands/commands.ts">create</a>({ ...params }) -> CommandCreateResponse</code>
- <code title="get /accounts/{account_id}/dex/commands">client.zeroTrust.dex.commands.<a href="./src/resources/zero-trust/dex/commands/commands.ts">list</a>({ ...params }) -> CommandListResponsesV4PagePagination</code>

#### Devices

Types:

- <code><a href="./src/resources/zero-trust/dex/commands/devices.ts">DeviceListResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/dex/commands/devices">client.zeroTrust.dex.commands.devices.<a href="./src/resources/zero-trust/dex/commands/devices.ts">list</a>({ ...params }) -> DeviceListResponsesV4PagePagination</code>

#### Downloads

Methods:

- <code title="get /accounts/{account_id}/dex/commands/{command_id}/downloads/{filename}">client.zeroTrust.dex.commands.downloads.<a href="./src/resources/zero-trust/dex/commands/downloads.ts">get</a>(commandId, filename, { ...params }) -> Response</code>

#### Quota

Types:

- <code><a href="./src/resources/zero-trust/dex/commands/quota.ts">QuotaGetResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/dex/commands/quota">client.zeroTrust.dex.commands.quota.<a href="./src/resources/zero-trust/dex/commands/quota.ts">get</a>({ ...params }) -> QuotaGetResponse</code>

### Colos

Types:

- <code><a href="./src/resources/zero-trust/dex/colos.ts">ColoListResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/dex/colos">client.zeroTrust.dex.colos.<a href="./src/resources/zero-trust/dex/colos.ts">list</a>({ ...params }) -> ColoListResponsesSinglePage</code>

### FleetStatus

Types:

- <code><a href="./src/resources/zero-trust/dex/fleet-status/fleet-status.ts">LiveStat</a></code>
- <code><a href="./src/resources/zero-trust/dex/fleet-status/fleet-status.ts">FleetStatusLiveResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/dex/fleet-status/live">client.zeroTrust.dex.fleetStatus.<a href="./src/resources/zero-trust/dex/fleet-status/fleet-status.ts">live</a>({ ...params }) -> FleetStatusLiveResponse</code>
- <code title="get /accounts/{account_id}/dex/fleet-status/over-time">client.zeroTrust.dex.fleetStatus.<a href="./src/resources/zero-trust/dex/fleet-status/fleet-status.ts">overTime</a>({ ...params }) -> void</code>

#### Devices

Types:

- <code><a href="./src/resources/zero-trust/dex/fleet-status/devices.ts">DeviceListResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/dex/fleet-status/devices">client.zeroTrust.dex.fleetStatus.devices.<a href="./src/resources/zero-trust/dex/fleet-status/devices.ts">list</a>({ ...params }) -> DeviceListResponsesV4PagePaginationArray</code>

### HTTPTests

Types:

- <code><a href="./src/resources/zero-trust/dex/http-tests/http-tests.ts">HTTPDetails</a></code>

Methods:

- <code title="get /accounts/{account_id}/dex/http-tests/{test_id}">client.zeroTrust.dex.httpTests.<a href="./src/resources/zero-trust/dex/http-tests/http-tests.ts">get</a>(testId, { ...params }) -> HTTPDetails</code>

#### Percentiles

Types:

- <code><a href="./src/resources/zero-trust/dex/http-tests/percentiles.ts">HTTPDetailsPercentiles</a></code>
- <code><a href="./src/resources/zero-trust/dex/http-tests/percentiles.ts">TestStatOverTime</a></code>

Methods:

- <code title="get /accounts/{account_id}/dex/http-tests/{test_id}/percentiles">client.zeroTrust.dex.httpTests.percentiles.<a href="./src/resources/zero-trust/dex/http-tests/percentiles.ts">get</a>(testId, { ...params }) -> HTTPDetailsPercentiles</code>

### Tests

Types:

- <code><a href="./src/resources/zero-trust/dex/tests/tests.ts">AggregateTimePeriod</a></code>
- <code><a href="./src/resources/zero-trust/dex/tests/tests.ts">Tests</a></code>

Methods:

- <code title="get /accounts/{account_id}/dex/tests/overview">client.zeroTrust.dex.tests.<a href="./src/resources/zero-trust/dex/tests/tests.ts">list</a>({ ...params }) -> TestsV4PagePagination</code>

#### UniqueDevices

Types:

- <code><a href="./src/resources/zero-trust/dex/tests/unique-devices.ts">UniqueDevices</a></code>

Methods:

- <code title="get /accounts/{account_id}/dex/tests/unique-devices">client.zeroTrust.dex.tests.uniqueDevices.<a href="./src/resources/zero-trust/dex/tests/unique-devices.ts">list</a>({ ...params }) -> UniqueDevices</code>

### TracerouteTestResults

#### NetworkPath

Types:

- <code><a href="./src/resources/zero-trust/dex/traceroute-test-results/network-path.ts">NetworkPathGetResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/dex/traceroute-test-results/{test_result_id}/network-path">client.zeroTrust.dex.tracerouteTestResults.networkPath.<a href="./src/resources/zero-trust/dex/traceroute-test-results/network-path.ts">get</a>(testResultId, { ...params }) -> NetworkPathGetResponse</code>

### TracerouteTests

Types:

- <code><a href="./src/resources/zero-trust/dex/traceroute-tests.ts">Traceroute</a></code>
- <code><a href="./src/resources/zero-trust/dex/traceroute-tests.ts">TracerouteTestPercentilesResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/dex/traceroute-tests/{test_id}">client.zeroTrust.dex.tracerouteTests.<a href="./src/resources/zero-trust/dex/traceroute-tests.ts">get</a>(testId, { ...params }) -> Traceroute</code>
- <code title="get /accounts/{account_id}/dex/traceroute-tests/{test_id}/network-path">client.zeroTrust.dex.tracerouteTests.<a href="./src/resources/zero-trust/dex/traceroute-tests.ts">networkPath</a>(testId, { ...params }) -> NetworkPathResponse</code>
- <code title="get /accounts/{account_id}/dex/traceroute-tests/{test_id}/percentiles">client.zeroTrust.dex.tracerouteTests.<a href="./src/resources/zero-trust/dex/traceroute-tests.ts">percentiles</a>(testId, { ...params }) -> TracerouteTestPercentilesResponse</code>

## Tunnels

Types:

- <code><a href="./src/resources/zero-trust/tunnels/tunnels.ts">Connection</a></code>
- <code><a href="./src/resources/zero-trust/tunnels/tunnels.ts">TunnelListResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/tunnels">client.zeroTrust.tunnels.<a href="./src/resources/zero-trust/tunnels/tunnels.ts">list</a>({ ...params }) -> TunnelListResponsesV4PagePaginationArray</code>

### Cloudflared

Types:

- <code><a href="./src/resources/zero-trust/tunnels/cloudflared/cloudflared.ts">CloudflaredCreateResponse</a></code>
- <code><a href="./src/resources/zero-trust/tunnels/cloudflared/cloudflared.ts">CloudflaredListResponse</a></code>
- <code><a href="./src/resources/zero-trust/tunnels/cloudflared/cloudflared.ts">CloudflaredDeleteResponse</a></code>
- <code><a href="./src/resources/zero-trust/tunnels/cloudflared/cloudflared.ts">CloudflaredEditResponse</a></code>
- <code><a href="./src/resources/zero-trust/tunnels/cloudflared/cloudflared.ts">CloudflaredGetResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/cfd_tunnel">client.zeroTrust.tunnels.cloudflared.<a href="./src/resources/zero-trust/tunnels/cloudflared/cloudflared.ts">create</a>({ ...params }) -> CloudflaredCreateResponse</code>
- <code title="get /accounts/{account_id}/cfd_tunnel">client.zeroTrust.tunnels.cloudflared.<a href="./src/resources/zero-trust/tunnels/cloudflared/cloudflared.ts">list</a>({ ...params }) -> CloudflaredListResponsesV4PagePaginationArray</code>
- <code title="delete /accounts/{account_id}/cfd_tunnel/{tunnel_id}">client.zeroTrust.tunnels.cloudflared.<a href="./src/resources/zero-trust/tunnels/cloudflared/cloudflared.ts">delete</a>(tunnelId, { ...params }) -> CloudflaredDeleteResponse</code>
- <code title="patch /accounts/{account_id}/cfd_tunnel/{tunnel_id}">client.zeroTrust.tunnels.cloudflared.<a href="./src/resources/zero-trust/tunnels/cloudflared/cloudflared.ts">edit</a>(tunnelId, { ...params }) -> CloudflaredEditResponse</code>
- <code title="get /accounts/{account_id}/cfd_tunnel/{tunnel_id}">client.zeroTrust.tunnels.cloudflared.<a href="./src/resources/zero-trust/tunnels/cloudflared/cloudflared.ts">get</a>(tunnelId, { ...params }) -> CloudflaredGetResponse</code>

#### Configurations

Types:

- <code><a href="./src/resources/zero-trust/tunnels/cloudflared/configurations.ts">ConfigurationUpdateResponse</a></code>
- <code><a href="./src/resources/zero-trust/tunnels/cloudflared/configurations.ts">ConfigurationGetResponse</a></code>

Methods:

- <code title="put /accounts/{account_id}/cfd_tunnel/{tunnel_id}/configurations">client.zeroTrust.tunnels.cloudflared.configurations.<a href="./src/resources/zero-trust/tunnels/cloudflared/configurations.ts">update</a>(tunnelId, { ...params }) -> ConfigurationUpdateResponse</code>
- <code title="get /accounts/{account_id}/cfd_tunnel/{tunnel_id}/configurations">client.zeroTrust.tunnels.cloudflared.configurations.<a href="./src/resources/zero-trust/tunnels/cloudflared/configurations.ts">get</a>(tunnelId, { ...params }) -> ConfigurationGetResponse</code>

#### Connections

Types:

- <code><a href="./src/resources/zero-trust/tunnels/cloudflared/connections.ts">Client</a></code>
- <code><a href="./src/resources/zero-trust/tunnels/cloudflared/connections.ts">ConnectionDeleteResponse</a></code>

Methods:

- <code title="delete /accounts/{account_id}/cfd_tunnel/{tunnel_id}/connections">client.zeroTrust.tunnels.cloudflared.connections.<a href="./src/resources/zero-trust/tunnels/cloudflared/connections.ts">delete</a>(tunnelId, { ...params }) -> ConnectionDeleteResponse | null</code>
- <code title="get /accounts/{account_id}/cfd_tunnel/{tunnel_id}/connections">client.zeroTrust.tunnels.cloudflared.connections.<a href="./src/resources/zero-trust/tunnels/cloudflared/connections.ts">get</a>(tunnelId, { ...params }) -> ClientsSinglePage</code>

#### Token

Types:

- <code><a href="./src/resources/zero-trust/tunnels/cloudflared/token.ts">TokenGetResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/cfd_tunnel/{tunnel_id}/token">client.zeroTrust.tunnels.cloudflared.token.<a href="./src/resources/zero-trust/tunnels/cloudflared/token.ts">get</a>(tunnelId, { ...params }) -> TokenGetResponse</code>

#### Connectors

Methods:

- <code title="get /accounts/{account_id}/cfd_tunnel/{tunnel_id}/connectors/{connector_id}">client.zeroTrust.tunnels.cloudflared.connectors.<a href="./src/resources/zero-trust/tunnels/cloudflared/connectors.ts">get</a>(tunnelId, connectorId, { ...params }) -> Client</code>

#### Management

Types:

- <code><a href="./src/resources/zero-trust/tunnels/cloudflared/management.ts">ManagementCreateResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/cfd_tunnel/{tunnel_id}/management">client.zeroTrust.tunnels.cloudflared.management.<a href="./src/resources/zero-trust/tunnels/cloudflared/management.ts">create</a>(tunnelId, { ...params }) -> ManagementCreateResponse</code>

### WARPConnector

Types:

- <code><a href="./src/resources/zero-trust/tunnels/warp-connector/warp-connector.ts">WARPConnectorCreateResponse</a></code>
- <code><a href="./src/resources/zero-trust/tunnels/warp-connector/warp-connector.ts">WARPConnectorListResponse</a></code>
- <code><a href="./src/resources/zero-trust/tunnels/warp-connector/warp-connector.ts">WARPConnectorDeleteResponse</a></code>
- <code><a href="./src/resources/zero-trust/tunnels/warp-connector/warp-connector.ts">WARPConnectorEditResponse</a></code>
- <code><a href="./src/resources/zero-trust/tunnels/warp-connector/warp-connector.ts">WARPConnectorGetResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/warp_connector">client.zeroTrust.tunnels.warpConnector.<a href="./src/resources/zero-trust/tunnels/warp-connector/warp-connector.ts">create</a>({ ...params }) -> WARPConnectorCreateResponse</code>
- <code title="get /accounts/{account_id}/warp_connector">client.zeroTrust.tunnels.warpConnector.<a href="./src/resources/zero-trust/tunnels/warp-connector/warp-connector.ts">list</a>({ ...params }) -> WARPConnectorListResponsesV4PagePaginationArray</code>
- <code title="delete /accounts/{account_id}/warp_connector/{tunnel_id}">client.zeroTrust.tunnels.warpConnector.<a href="./src/resources/zero-trust/tunnels/warp-connector/warp-connector.ts">delete</a>(tunnelId, { ...params }) -> WARPConnectorDeleteResponse</code>
- <code title="patch /accounts/{account_id}/warp_connector/{tunnel_id}">client.zeroTrust.tunnels.warpConnector.<a href="./src/resources/zero-trust/tunnels/warp-connector/warp-connector.ts">edit</a>(tunnelId, { ...params }) -> WARPConnectorEditResponse</code>
- <code title="get /accounts/{account_id}/warp_connector/{tunnel_id}">client.zeroTrust.tunnels.warpConnector.<a href="./src/resources/zero-trust/tunnels/warp-connector/warp-connector.ts">get</a>(tunnelId, { ...params }) -> WARPConnectorGetResponse</code>

#### Token

Types:

- <code><a href="./src/resources/zero-trust/tunnels/warp-connector/token.ts">TokenGetResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/warp_connector/{tunnel_id}/token">client.zeroTrust.tunnels.warpConnector.token.<a href="./src/resources/zero-trust/tunnels/warp-connector/token.ts">get</a>(tunnelId, { ...params }) -> TokenGetResponse</code>

## ConnectivitySettings

Types:

- <code><a href="./src/resources/zero-trust/connectivity-settings.ts">ConnectivitySettingEditResponse</a></code>
- <code><a href="./src/resources/zero-trust/connectivity-settings.ts">ConnectivitySettingGetResponse</a></code>

Methods:

- <code title="patch /accounts/{account_id}/zerotrust/connectivity_settings">client.zeroTrust.connectivitySettings.<a href="./src/resources/zero-trust/connectivity-settings.ts">edit</a>({ ...params }) -> ConnectivitySettingEditResponse</code>
- <code title="get /accounts/{account_id}/zerotrust/connectivity_settings">client.zeroTrust.connectivitySettings.<a href="./src/resources/zero-trust/connectivity-settings.ts">get</a>({ ...params }) -> ConnectivitySettingGetResponse</code>

## DLP

### Datasets

Types:

- <code><a href="./src/resources/zero-trust/dlp/datasets/datasets.ts">Dataset</a></code>
- <code><a href="./src/resources/zero-trust/dlp/datasets/datasets.ts">DatasetArray</a></code>
- <code><a href="./src/resources/zero-trust/dlp/datasets/datasets.ts">DatasetCreation</a></code>

Methods:

- <code title="post /accounts/{account_id}/dlp/datasets">client.zeroTrust.dlp.datasets.<a href="./src/resources/zero-trust/dlp/datasets/datasets.ts">create</a>({ ...params }) -> DatasetCreation</code>
- <code title="put /accounts/{account_id}/dlp/datasets/{dataset_id}">client.zeroTrust.dlp.datasets.<a href="./src/resources/zero-trust/dlp/datasets/datasets.ts">update</a>(datasetId, { ...params }) -> Dataset</code>
- <code title="get /accounts/{account_id}/dlp/datasets">client.zeroTrust.dlp.datasets.<a href="./src/resources/zero-trust/dlp/datasets/datasets.ts">list</a>({ ...params }) -> DatasetsSinglePage</code>
- <code title="delete /accounts/{account_id}/dlp/datasets/{dataset_id}">client.zeroTrust.dlp.datasets.<a href="./src/resources/zero-trust/dlp/datasets/datasets.ts">delete</a>(datasetId, { ...params }) -> void</code>
- <code title="get /accounts/{account_id}/dlp/datasets/{dataset_id}">client.zeroTrust.dlp.datasets.<a href="./src/resources/zero-trust/dlp/datasets/datasets.ts">get</a>(datasetId, { ...params }) -> Dataset</code>

#### Upload

Types:

- <code><a href="./src/resources/zero-trust/dlp/datasets/upload.ts">NewVersion</a></code>

Methods:

- <code title="post /accounts/{account_id}/dlp/datasets/{dataset_id}/upload">client.zeroTrust.dlp.datasets.upload.<a href="./src/resources/zero-trust/dlp/datasets/upload.ts">create</a>(datasetId, { ...params }) -> NewVersion</code>
- <code title="post /accounts/{account_id}/dlp/datasets/{dataset_id}/upload/{version}">client.zeroTrust.dlp.datasets.upload.<a href="./src/resources/zero-trust/dlp/datasets/upload.ts">edit</a>(datasetId, version, { ...params }) -> Dataset</code>

#### Versions

Types:

- <code><a href="./src/resources/zero-trust/dlp/datasets/versions/versions.ts">VersionCreateResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/dlp/datasets/{dataset_id}/versions/{version}">client.zeroTrust.dlp.datasets.versions.<a href="./src/resources/zero-trust/dlp/datasets/versions/versions.ts">create</a>(datasetId, version, [ ...body ]) -> VersionCreateResponsesSinglePage</code>

##### Entries

Types:

- <code><a href="./src/resources/zero-trust/dlp/datasets/versions/entries.ts">EntryCreateResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/dlp/datasets/{dataset_id}/versions/{version}/entries/{entry_id}">client.zeroTrust.dlp.datasets.versions.entries.<a href="./src/resources/zero-trust/dlp/datasets/versions/entries.ts">create</a>(datasetId, version, entryId, { ...params }) -> EntryCreateResponse</code>

### Patterns

Types:

- <code><a href="./src/resources/zero-trust/dlp/patterns.ts">PatternValidateResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/dlp/patterns/validate">client.zeroTrust.dlp.patterns.<a href="./src/resources/zero-trust/dlp/patterns.ts">validate</a>({ ...params }) -> PatternValidateResponse</code>

### PayloadLogs

Types:

- <code><a href="./src/resources/zero-trust/dlp/payload-logs.ts">PayloadLogUpdateResponse</a></code>
- <code><a href="./src/resources/zero-trust/dlp/payload-logs.ts">PayloadLogGetResponse</a></code>

Methods:

- <code title="put /accounts/{account_id}/dlp/payload_log">client.zeroTrust.dlp.payloadLogs.<a href="./src/resources/zero-trust/dlp/payload-logs.ts">update</a>({ ...params }) -> PayloadLogUpdateResponse</code>
- <code title="get /accounts/{account_id}/dlp/payload_log">client.zeroTrust.dlp.payloadLogs.<a href="./src/resources/zero-trust/dlp/payload-logs.ts">get</a>({ ...params }) -> PayloadLogGetResponse</code>

### Email

#### AccountMapping

Types:

- <code><a href="./src/resources/zero-trust/dlp/email/account-mapping.ts">AccountMappingCreateResponse</a></code>
- <code><a href="./src/resources/zero-trust/dlp/email/account-mapping.ts">AccountMappingGetResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/dlp/email/account_mapping">client.zeroTrust.dlp.email.accountMapping.<a href="./src/resources/zero-trust/dlp/email/account-mapping.ts">create</a>({ ...params }) -> AccountMappingCreateResponse</code>
- <code title="get /accounts/{account_id}/dlp/email/account_mapping">client.zeroTrust.dlp.email.accountMapping.<a href="./src/resources/zero-trust/dlp/email/account-mapping.ts">get</a>({ ...params }) -> AccountMappingGetResponse</code>

#### Rules

Types:

- <code><a href="./src/resources/zero-trust/dlp/email/rules.ts">RuleCreateResponse</a></code>
- <code><a href="./src/resources/zero-trust/dlp/email/rules.ts">RuleUpdateResponse</a></code>
- <code><a href="./src/resources/zero-trust/dlp/email/rules.ts">RuleListResponse</a></code>
- <code><a href="./src/resources/zero-trust/dlp/email/rules.ts">RuleDeleteResponse</a></code>
- <code><a href="./src/resources/zero-trust/dlp/email/rules.ts">RuleBulkEditResponse</a></code>
- <code><a href="./src/resources/zero-trust/dlp/email/rules.ts">RuleGetResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/dlp/email/rules">client.zeroTrust.dlp.email.rules.<a href="./src/resources/zero-trust/dlp/email/rules.ts">create</a>({ ...params }) -> RuleCreateResponse</code>
- <code title="put /accounts/{account_id}/dlp/email/rules/{rule_id}">client.zeroTrust.dlp.email.rules.<a href="./src/resources/zero-trust/dlp/email/rules.ts">update</a>(ruleId, { ...params }) -> RuleUpdateResponse</code>
- <code title="get /accounts/{account_id}/dlp/email/rules">client.zeroTrust.dlp.email.rules.<a href="./src/resources/zero-trust/dlp/email/rules.ts">list</a>({ ...params }) -> RuleListResponsesSinglePage</code>
- <code title="delete /accounts/{account_id}/dlp/email/rules/{rule_id}">client.zeroTrust.dlp.email.rules.<a href="./src/resources/zero-trust/dlp/email/rules.ts">delete</a>(ruleId, { ...params }) -> RuleDeleteResponse</code>
- <code title="patch /accounts/{account_id}/dlp/email/rules">client.zeroTrust.dlp.email.rules.<a href="./src/resources/zero-trust/dlp/email/rules.ts">bulkEdit</a>({ ...params }) -> RuleBulkEditResponse</code>
- <code title="get /accounts/{account_id}/dlp/email/rules/{rule_id}">client.zeroTrust.dlp.email.rules.<a href="./src/resources/zero-trust/dlp/email/rules.ts">get</a>(ruleId, { ...params }) -> RuleGetResponse</code>

### Profiles

Types:

- <code><a href="./src/resources/zero-trust/dlp/profiles/profiles.ts">ContextAwareness</a></code>
- <code><a href="./src/resources/zero-trust/dlp/profiles/profiles.ts">Profile</a></code>
- <code><a href="./src/resources/zero-trust/dlp/profiles/profiles.ts">SkipConfiguration</a></code>

Methods:

- <code title="get /accounts/{account_id}/dlp/profiles">client.zeroTrust.dlp.profiles.<a href="./src/resources/zero-trust/dlp/profiles/profiles.ts">list</a>({ ...params }) -> ProfilesSinglePage</code>
- <code title="get /accounts/{account_id}/dlp/profiles/{profile_id}">client.zeroTrust.dlp.profiles.<a href="./src/resources/zero-trust/dlp/profiles/profiles.ts">get</a>(profileId, { ...params }) -> Profile</code>

#### Custom

Types:

- <code><a href="./src/resources/zero-trust/dlp/profiles/custom.ts">CustomProfile</a></code>
- <code><a href="./src/resources/zero-trust/dlp/profiles/custom.ts">Pattern</a></code>
- <code><a href="./src/resources/zero-trust/dlp/profiles/custom.ts">CustomDeleteResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/dlp/profiles/custom">client.zeroTrust.dlp.profiles.custom.<a href="./src/resources/zero-trust/dlp/profiles/custom.ts">create</a>({ ...params }) -> Profile</code>
- <code title="put /accounts/{account_id}/dlp/profiles/custom/{profile_id}">client.zeroTrust.dlp.profiles.custom.<a href="./src/resources/zero-trust/dlp/profiles/custom.ts">update</a>(profileId, { ...params }) -> Profile</code>
- <code title="delete /accounts/{account_id}/dlp/profiles/custom/{profile_id}">client.zeroTrust.dlp.profiles.custom.<a href="./src/resources/zero-trust/dlp/profiles/custom.ts">delete</a>(profileId, { ...params }) -> CustomDeleteResponse | null</code>
- <code title="get /accounts/{account_id}/dlp/profiles/custom/{profile_id}">client.zeroTrust.dlp.profiles.custom.<a href="./src/resources/zero-trust/dlp/profiles/custom.ts">get</a>(profileId, { ...params }) -> Profile</code>

#### Predefined

Types:

- <code><a href="./src/resources/zero-trust/dlp/profiles/predefined.ts">PredefinedProfile</a></code>
- <code><a href="./src/resources/zero-trust/dlp/profiles/predefined.ts">PredefinedDeleteResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/dlp/profiles/predefined">client.zeroTrust.dlp.profiles.predefined.<a href="./src/resources/zero-trust/dlp/profiles/predefined.ts">create</a>({ ...params }) -> Profile</code>
- <code title="put /accounts/{account_id}/dlp/profiles/predefined/{profile_id}">client.zeroTrust.dlp.profiles.predefined.<a href="./src/resources/zero-trust/dlp/profiles/predefined.ts">update</a>(profileId, { ...params }) -> Profile</code>
- <code title="delete /accounts/{account_id}/dlp/profiles/predefined/{profile_id}">client.zeroTrust.dlp.profiles.predefined.<a href="./src/resources/zero-trust/dlp/profiles/predefined.ts">delete</a>(profileId, { ...params }) -> PredefinedDeleteResponse | null</code>
- <code title="get /accounts/{account_id}/dlp/profiles/predefined/{profile_id}">client.zeroTrust.dlp.profiles.predefined.<a href="./src/resources/zero-trust/dlp/profiles/predefined.ts">get</a>(profileId, { ...params }) -> Profile</code>

### Limits

Types:

- <code><a href="./src/resources/zero-trust/dlp/limits.ts">LimitListResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/dlp/limits">client.zeroTrust.dlp.limits.<a href="./src/resources/zero-trust/dlp/limits.ts">list</a>({ ...params }) -> LimitListResponse</code>

### Entries

Types:

- <code><a href="./src/resources/zero-trust/dlp/entries/entries.ts">EntryCreateResponse</a></code>
- <code><a href="./src/resources/zero-trust/dlp/entries/entries.ts">EntryUpdateResponse</a></code>
- <code><a href="./src/resources/zero-trust/dlp/entries/entries.ts">EntryListResponse</a></code>
- <code><a href="./src/resources/zero-trust/dlp/entries/entries.ts">EntryDeleteResponse</a></code>
- <code><a href="./src/resources/zero-trust/dlp/entries/entries.ts">EntryGetResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/dlp/entries">client.zeroTrust.dlp.entries.<a href="./src/resources/zero-trust/dlp/entries/entries.ts">create</a>({ ...params }) -> EntryCreateResponse</code>
- <code title="put /accounts/{account_id}/dlp/entries/{entry_id}">client.zeroTrust.dlp.entries.<a href="./src/resources/zero-trust/dlp/entries/entries.ts">update</a>(entryId, { ...params }) -> EntryUpdateResponse</code>
- <code title="get /accounts/{account_id}/dlp/entries">client.zeroTrust.dlp.entries.<a href="./src/resources/zero-trust/dlp/entries/entries.ts">list</a>({ ...params }) -> EntryListResponsesSinglePage</code>
- <code title="delete /accounts/{account_id}/dlp/entries/{entry_id}">client.zeroTrust.dlp.entries.<a href="./src/resources/zero-trust/dlp/entries/entries.ts">delete</a>(entryId, { ...params }) -> EntryDeleteResponse | null</code>
- <code title="get /accounts/{account_id}/dlp/entries/{entry_id}">client.zeroTrust.dlp.entries.<a href="./src/resources/zero-trust/dlp/entries/entries.ts">get</a>(entryId, { ...params }) -> EntryGetResponse</code>

#### Custom

Types:

- <code><a href="./src/resources/zero-trust/dlp/entries/custom.ts">CustomCreateResponse</a></code>
- <code><a href="./src/resources/zero-trust/dlp/entries/custom.ts">CustomUpdateResponse</a></code>
- <code><a href="./src/resources/zero-trust/dlp/entries/custom.ts">CustomDeleteResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/dlp/entries">client.zeroTrust.dlp.entries.custom.<a href="./src/resources/zero-trust/dlp/entries/custom.ts">create</a>({ ...params }) -> CustomCreateResponse</code>
- <code title="put /accounts/{account_id}/dlp/entries/{entry_id}">client.zeroTrust.dlp.entries.custom.<a href="./src/resources/zero-trust/dlp/entries/custom.ts">update</a>(entryId, { ...params }) -> CustomUpdateResponse</code>
- <code title="delete /accounts/{account_id}/dlp/entries/{entry_id}">client.zeroTrust.dlp.entries.custom.<a href="./src/resources/zero-trust/dlp/entries/custom.ts">delete</a>(entryId, { ...params }) -> CustomDeleteResponse | null</code>

#### Predefined

Types:

- <code><a href="./src/resources/zero-trust/dlp/entries/predefined.ts">PredefinedCreateResponse</a></code>
- <code><a href="./src/resources/zero-trust/dlp/entries/predefined.ts">PredefinedUpdateResponse</a></code>
- <code><a href="./src/resources/zero-trust/dlp/entries/predefined.ts">PredefinedDeleteResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/dlp/entries/predefined">client.zeroTrust.dlp.entries.predefined.<a href="./src/resources/zero-trust/dlp/entries/predefined.ts">create</a>({ ...params }) -> PredefinedCreateResponse</code>
- <code title="put /accounts/{account_id}/dlp/entries/predefined/{entry_id}">client.zeroTrust.dlp.entries.predefined.<a href="./src/resources/zero-trust/dlp/entries/predefined.ts">update</a>(entryId, { ...params }) -> PredefinedUpdateResponse</code>
- <code title="delete /accounts/{account_id}/dlp/entries/predefined/{entry_id}">client.zeroTrust.dlp.entries.predefined.<a href="./src/resources/zero-trust/dlp/entries/predefined.ts">delete</a>(entryId, { ...params }) -> PredefinedDeleteResponse | null</code>

#### Integration

Types:

- <code><a href="./src/resources/zero-trust/dlp/entries/integration.ts">IntegrationCreateResponse</a></code>
- <code><a href="./src/resources/zero-trust/dlp/entries/integration.ts">IntegrationUpdateResponse</a></code>
- <code><a href="./src/resources/zero-trust/dlp/entries/integration.ts">IntegrationDeleteResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/dlp/entries/integration">client.zeroTrust.dlp.entries.integration.<a href="./src/resources/zero-trust/dlp/entries/integration.ts">create</a>({ ...params }) -> IntegrationCreateResponse</code>
- <code title="put /accounts/{account_id}/dlp/entries/integration/{entry_id}">client.zeroTrust.dlp.entries.integration.<a href="./src/resources/zero-trust/dlp/entries/integration.ts">update</a>(entryId, { ...params }) -> IntegrationUpdateResponse</code>
- <code title="delete /accounts/{account_id}/dlp/entries/integration/{entry_id}">client.zeroTrust.dlp.entries.integration.<a href="./src/resources/zero-trust/dlp/entries/integration.ts">delete</a>(entryId, { ...params }) -> IntegrationDeleteResponse | null</code>

## Gateway

Types:

- <code><a href="./src/resources/zero-trust/gateway/gateway.ts">GatewayCreateResponse</a></code>
- <code><a href="./src/resources/zero-trust/gateway/gateway.ts">GatewayListResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/gateway">client.zeroTrust.gateway.<a href="./src/resources/zero-trust/gateway/gateway.ts">create</a>({ ...params }) -> GatewayCreateResponse</code>
- <code title="get /accounts/{account_id}/gateway">client.zeroTrust.gateway.<a href="./src/resources/zero-trust/gateway/gateway.ts">list</a>({ ...params }) -> GatewayListResponse</code>

### AuditSSHSettings

Types:

- <code><a href="./src/resources/zero-trust/gateway/audit-ssh-settings.ts">GatewaySettings</a></code>

Methods:

- <code title="put /accounts/{account_id}/gateway/audit_ssh_settings">client.zeroTrust.gateway.auditSSHSettings.<a href="./src/resources/zero-trust/gateway/audit-ssh-settings.ts">update</a>({ ...params }) -> GatewaySettings</code>
- <code title="get /accounts/{account_id}/gateway/audit_ssh_settings">client.zeroTrust.gateway.auditSSHSettings.<a href="./src/resources/zero-trust/gateway/audit-ssh-settings.ts">get</a>({ ...params }) -> GatewaySettings</code>
- <code title="post /accounts/{account_id}/gateway/audit_ssh_settings/rotate_seed">client.zeroTrust.gateway.auditSSHSettings.<a href="./src/resources/zero-trust/gateway/audit-ssh-settings.ts">rotateSeed</a>({ ...params }) -> GatewaySettings</code>

### Categories

Types:

- <code><a href="./src/resources/zero-trust/gateway/categories.ts">Category</a></code>

Methods:

- <code title="get /accounts/{account_id}/gateway/categories">client.zeroTrust.gateway.categories.<a href="./src/resources/zero-trust/gateway/categories.ts">list</a>({ ...params }) -> CategoriesSinglePage</code>

### AppTypes

Types:

- <code><a href="./src/resources/zero-trust/gateway/app-types.ts">AppType</a></code>

Methods:

- <code title="get /accounts/{account_id}/gateway/app_types">client.zeroTrust.gateway.appTypes.<a href="./src/resources/zero-trust/gateway/app-types.ts">list</a>({ ...params }) -> AppTypesSinglePage</code>

### Configurations

Types:

- <code><a href="./src/resources/zero-trust/gateway/configurations/configurations.ts">ActivityLogSettings</a></code>
- <code><a href="./src/resources/zero-trust/gateway/configurations/configurations.ts">AntiVirusSettings</a></code>
- <code><a href="./src/resources/zero-trust/gateway/configurations/configurations.ts">BlockPageSettings</a></code>
- <code><a href="./src/resources/zero-trust/gateway/configurations/configurations.ts">BodyScanningSettings</a></code>
- <code><a href="./src/resources/zero-trust/gateway/configurations/configurations.ts">BrowserIsolationSettings</a></code>
- <code><a href="./src/resources/zero-trust/gateway/configurations/configurations.ts">CustomCertificateSettings</a></code>
- <code><a href="./src/resources/zero-trust/gateway/configurations/configurations.ts">ExtendedEmailMatching</a></code>
- <code><a href="./src/resources/zero-trust/gateway/configurations/configurations.ts">FipsSettings</a></code>
- <code><a href="./src/resources/zero-trust/gateway/configurations/configurations.ts">GatewayConfigurationSettings</a></code>
- <code><a href="./src/resources/zero-trust/gateway/configurations/configurations.ts">NotificationSettings</a></code>
- <code><a href="./src/resources/zero-trust/gateway/configurations/configurations.ts">ProtocolDetection</a></code>
- <code><a href="./src/resources/zero-trust/gateway/configurations/configurations.ts">TLSSettings</a></code>
- <code><a href="./src/resources/zero-trust/gateway/configurations/configurations.ts">ConfigurationUpdateResponse</a></code>
- <code><a href="./src/resources/zero-trust/gateway/configurations/configurations.ts">ConfigurationEditResponse</a></code>
- <code><a href="./src/resources/zero-trust/gateway/configurations/configurations.ts">ConfigurationGetResponse</a></code>

Methods:

- <code title="put /accounts/{account_id}/gateway/configuration">client.zeroTrust.gateway.configurations.<a href="./src/resources/zero-trust/gateway/configurations/configurations.ts">update</a>({ ...params }) -> ConfigurationUpdateResponse</code>
- <code title="patch /accounts/{account_id}/gateway/configuration">client.zeroTrust.gateway.configurations.<a href="./src/resources/zero-trust/gateway/configurations/configurations.ts">edit</a>({ ...params }) -> ConfigurationEditResponse</code>
- <code title="get /accounts/{account_id}/gateway/configuration">client.zeroTrust.gateway.configurations.<a href="./src/resources/zero-trust/gateway/configurations/configurations.ts">get</a>({ ...params }) -> ConfigurationGetResponse</code>

#### CustomCertificate

Methods:

- <code title="get /accounts/{account_id}/gateway/configuration/custom_certificate">client.zeroTrust.gateway.configurations.customCertificate.<a href="./src/resources/zero-trust/gateway/configurations/custom-certificate.ts">get</a>({ ...params }) -> CustomCertificateSettings | null</code>

### Lists

Types:

- <code><a href="./src/resources/zero-trust/gateway/lists/lists.ts">GatewayItem</a></code>
- <code><a href="./src/resources/zero-trust/gateway/lists/lists.ts">GatewayList</a></code>
- <code><a href="./src/resources/zero-trust/gateway/lists/lists.ts">ListCreateResponse</a></code>
- <code><a href="./src/resources/zero-trust/gateway/lists/lists.ts">ListDeleteResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/gateway/lists">client.zeroTrust.gateway.lists.<a href="./src/resources/zero-trust/gateway/lists/lists.ts">create</a>({ ...params }) -> ListCreateResponse</code>
- <code title="put /accounts/{account_id}/gateway/lists/{list_id}">client.zeroTrust.gateway.lists.<a href="./src/resources/zero-trust/gateway/lists/lists.ts">update</a>(listId, { ...params }) -> GatewayList</code>
- <code title="get /accounts/{account_id}/gateway/lists">client.zeroTrust.gateway.lists.<a href="./src/resources/zero-trust/gateway/lists/lists.ts">list</a>({ ...params }) -> GatewayListsSinglePage</code>
- <code title="delete /accounts/{account_id}/gateway/lists/{list_id}">client.zeroTrust.gateway.lists.<a href="./src/resources/zero-trust/gateway/lists/lists.ts">delete</a>(listId, { ...params }) -> ListDeleteResponse</code>
- <code title="patch /accounts/{account_id}/gateway/lists/{list_id}">client.zeroTrust.gateway.lists.<a href="./src/resources/zero-trust/gateway/lists/lists.ts">edit</a>(listId, { ...params }) -> GatewayList</code>
- <code title="get /accounts/{account_id}/gateway/lists/{list_id}">client.zeroTrust.gateway.lists.<a href="./src/resources/zero-trust/gateway/lists/lists.ts">get</a>(listId, { ...params }) -> GatewayList</code>

#### Items

Types:

- <code><a href="./src/resources/zero-trust/gateway/lists/items.ts">ItemListResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/gateway/lists/{list_id}/items">client.zeroTrust.gateway.lists.items.<a href="./src/resources/zero-trust/gateway/lists/items.ts">list</a>(listId, { ...params }) -> ItemListResponsesSinglePage</code>

### Locations

Types:

- <code><a href="./src/resources/zero-trust/gateway/locations.ts">DOHEndpoint</a></code>
- <code><a href="./src/resources/zero-trust/gateway/locations.ts">DOTEndpoint</a></code>
- <code><a href="./src/resources/zero-trust/gateway/locations.ts">Endpoint</a></code>
- <code><a href="./src/resources/zero-trust/gateway/locations.ts">IPNetwork</a></code>
- <code><a href="./src/resources/zero-trust/gateway/locations.ts">IPV4Endpoint</a></code>
- <code><a href="./src/resources/zero-trust/gateway/locations.ts">IPV6Endpoint</a></code>
- <code><a href="./src/resources/zero-trust/gateway/locations.ts">IPV6Network</a></code>
- <code><a href="./src/resources/zero-trust/gateway/locations.ts">Location</a></code>
- <code><a href="./src/resources/zero-trust/gateway/locations.ts">LocationDeleteResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/gateway/locations">client.zeroTrust.gateway.locations.<a href="./src/resources/zero-trust/gateway/locations.ts">create</a>({ ...params }) -> Location</code>
- <code title="put /accounts/{account_id}/gateway/locations/{location_id}">client.zeroTrust.gateway.locations.<a href="./src/resources/zero-trust/gateway/locations.ts">update</a>(locationId, { ...params }) -> Location</code>
- <code title="get /accounts/{account_id}/gateway/locations">client.zeroTrust.gateway.locations.<a href="./src/resources/zero-trust/gateway/locations.ts">list</a>({ ...params }) -> LocationsSinglePage</code>
- <code title="delete /accounts/{account_id}/gateway/locations/{location_id}">client.zeroTrust.gateway.locations.<a href="./src/resources/zero-trust/gateway/locations.ts">delete</a>(locationId, { ...params }) -> LocationDeleteResponse</code>
- <code title="get /accounts/{account_id}/gateway/locations/{location_id}">client.zeroTrust.gateway.locations.<a href="./src/resources/zero-trust/gateway/locations.ts">get</a>(locationId, { ...params }) -> Location</code>

### Logging

Types:

- <code><a href="./src/resources/zero-trust/gateway/logging.ts">LoggingSetting</a></code>

Methods:

- <code title="put /accounts/{account_id}/gateway/logging">client.zeroTrust.gateway.logging.<a href="./src/resources/zero-trust/gateway/logging.ts">update</a>({ ...params }) -> LoggingSetting</code>
- <code title="get /accounts/{account_id}/gateway/logging">client.zeroTrust.gateway.logging.<a href="./src/resources/zero-trust/gateway/logging.ts">get</a>({ ...params }) -> LoggingSetting</code>

### ProxyEndpoints

Types:

- <code><a href="./src/resources/zero-trust/gateway/proxy-endpoints.ts">GatewayIPs</a></code>
- <code><a href="./src/resources/zero-trust/gateway/proxy-endpoints.ts">ProxyEndpoint</a></code>
- <code><a href="./src/resources/zero-trust/gateway/proxy-endpoints.ts">ProxyEndpointDeleteResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/gateway/proxy_endpoints">client.zeroTrust.gateway.proxyEndpoints.<a href="./src/resources/zero-trust/gateway/proxy-endpoints.ts">create</a>({ ...params }) -> ProxyEndpoint</code>
- <code title="get /accounts/{account_id}/gateway/proxy_endpoints">client.zeroTrust.gateway.proxyEndpoints.<a href="./src/resources/zero-trust/gateway/proxy-endpoints.ts">list</a>({ ...params }) -> ProxyEndpoint</code>
- <code title="delete /accounts/{account_id}/gateway/proxy_endpoints/{proxy_endpoint_id}">client.zeroTrust.gateway.proxyEndpoints.<a href="./src/resources/zero-trust/gateway/proxy-endpoints.ts">delete</a>(proxyEndpointId, { ...params }) -> ProxyEndpointDeleteResponse</code>
- <code title="patch /accounts/{account_id}/gateway/proxy_endpoints/{proxy_endpoint_id}">client.zeroTrust.gateway.proxyEndpoints.<a href="./src/resources/zero-trust/gateway/proxy-endpoints.ts">edit</a>(proxyEndpointId, { ...params }) -> ProxyEndpoint</code>
- <code title="get /accounts/{account_id}/gateway/proxy_endpoints/{proxy_endpoint_id}">client.zeroTrust.gateway.proxyEndpoints.<a href="./src/resources/zero-trust/gateway/proxy-endpoints.ts">get</a>(proxyEndpointId, { ...params }) -> ProxyEndpointsSinglePage</code>

### Rules

Types:

- <code><a href="./src/resources/zero-trust/gateway/rules.ts">DNSResolverSettingsV4</a></code>
- <code><a href="./src/resources/zero-trust/gateway/rules.ts">DNSResolverSettingsV6</a></code>
- <code><a href="./src/resources/zero-trust/gateway/rules.ts">GatewayFilter</a></code>
- <code><a href="./src/resources/zero-trust/gateway/rules.ts">GatewayRule</a></code>
- <code><a href="./src/resources/zero-trust/gateway/rules.ts">RuleSetting</a></code>
- <code><a href="./src/resources/zero-trust/gateway/rules.ts">Schedule</a></code>
- <code><a href="./src/resources/zero-trust/gateway/rules.ts">RuleDeleteResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/gateway/rules">client.zeroTrust.gateway.rules.<a href="./src/resources/zero-trust/gateway/rules.ts">create</a>({ ...params }) -> GatewayRule</code>
- <code title="put /accounts/{account_id}/gateway/rules/{rule_id}">client.zeroTrust.gateway.rules.<a href="./src/resources/zero-trust/gateway/rules.ts">update</a>(ruleId, { ...params }) -> GatewayRule</code>
- <code title="get /accounts/{account_id}/gateway/rules">client.zeroTrust.gateway.rules.<a href="./src/resources/zero-trust/gateway/rules.ts">list</a>({ ...params }) -> GatewayRulesSinglePage</code>
- <code title="delete /accounts/{account_id}/gateway/rules/{rule_id}">client.zeroTrust.gateway.rules.<a href="./src/resources/zero-trust/gateway/rules.ts">delete</a>(ruleId, { ...params }) -> RuleDeleteResponse</code>
- <code title="get /accounts/{account_id}/gateway/rules/{rule_id}">client.zeroTrust.gateway.rules.<a href="./src/resources/zero-trust/gateway/rules.ts">get</a>(ruleId, { ...params }) -> GatewayRule</code>
- <code title="post /accounts/{account_id}/gateway/rules/{rule_id}/reset_expiration">client.zeroTrust.gateway.rules.<a href="./src/resources/zero-trust/gateway/rules.ts">resetExpiration</a>(ruleId, { ...params }) -> GatewayRule</code>

### Certificates

Types:

- <code><a href="./src/resources/zero-trust/gateway/certificates.ts">CertificateCreateResponse</a></code>
- <code><a href="./src/resources/zero-trust/gateway/certificates.ts">CertificateListResponse</a></code>
- <code><a href="./src/resources/zero-trust/gateway/certificates.ts">CertificateDeleteResponse</a></code>
- <code><a href="./src/resources/zero-trust/gateway/certificates.ts">CertificateActivateResponse</a></code>
- <code><a href="./src/resources/zero-trust/gateway/certificates.ts">CertificateDeactivateResponse</a></code>
- <code><a href="./src/resources/zero-trust/gateway/certificates.ts">CertificateGetResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/gateway/certificates">client.zeroTrust.gateway.certificates.<a href="./src/resources/zero-trust/gateway/certificates.ts">create</a>({ ...params }) -> CertificateCreateResponse</code>
- <code title="get /accounts/{account_id}/gateway/certificates">client.zeroTrust.gateway.certificates.<a href="./src/resources/zero-trust/gateway/certificates.ts">list</a>({ ...params }) -> CertificateListResponsesSinglePage</code>
- <code title="delete /accounts/{account_id}/gateway/certificates/{certificate_id}">client.zeroTrust.gateway.certificates.<a href="./src/resources/zero-trust/gateway/certificates.ts">delete</a>(certificateId, { ...params }) -> CertificateDeleteResponse</code>
- <code title="post /accounts/{account_id}/gateway/certificates/{certificate_id}/activate">client.zeroTrust.gateway.certificates.<a href="./src/resources/zero-trust/gateway/certificates.ts">activate</a>(certificateId, { ...params }) -> CertificateActivateResponse</code>
- <code title="post /accounts/{account_id}/gateway/certificates/{certificate_id}/deactivate">client.zeroTrust.gateway.certificates.<a href="./src/resources/zero-trust/gateway/certificates.ts">deactivate</a>(certificateId, { ...params }) -> CertificateDeactivateResponse</code>
- <code title="get /accounts/{account_id}/gateway/certificates/{certificate_id}">client.zeroTrust.gateway.certificates.<a href="./src/resources/zero-trust/gateway/certificates.ts">get</a>(certificateId, { ...params }) -> CertificateGetResponse</code>

## Networks

### Routes

Types:

- <code><a href="./src/resources/zero-trust/networks/routes/routes.ts">NetworkRoute</a></code>
- <code><a href="./src/resources/zero-trust/networks/routes/routes.ts">Route</a></code>
- <code><a href="./src/resources/zero-trust/networks/routes/routes.ts">Teamnet</a></code>

Methods:

- <code title="post /accounts/{account_id}/teamnet/routes">client.zeroTrust.networks.routes.<a href="./src/resources/zero-trust/networks/routes/routes.ts">create</a>({ ...params }) -> Route</code>
- <code title="get /accounts/{account_id}/teamnet/routes">client.zeroTrust.networks.routes.<a href="./src/resources/zero-trust/networks/routes/routes.ts">list</a>({ ...params }) -> TeamnetsV4PagePaginationArray</code>
- <code title="delete /accounts/{account_id}/teamnet/routes/{route_id}">client.zeroTrust.networks.routes.<a href="./src/resources/zero-trust/networks/routes/routes.ts">delete</a>(routeId, { ...params }) -> Route</code>
- <code title="patch /accounts/{account_id}/teamnet/routes/{route_id}">client.zeroTrust.networks.routes.<a href="./src/resources/zero-trust/networks/routes/routes.ts">edit</a>(routeId, { ...params }) -> Route</code>
- <code title="get /accounts/{account_id}/teamnet/routes/{route_id}">client.zeroTrust.networks.routes.<a href="./src/resources/zero-trust/networks/routes/routes.ts">get</a>(routeId, { ...params }) -> Route</code>

#### IPs

Methods:

- <code title="get /accounts/{account_id}/teamnet/routes/ip/{ip}">client.zeroTrust.networks.routes.ips.<a href="./src/resources/zero-trust/networks/routes/ips.ts">get</a>(ip, { ...params }) -> Teamnet</code>

#### Networks

Methods:

- <code title="post /accounts/{account_id}/teamnet/routes/network/{ip_network_encoded}">client.zeroTrust.networks.routes.networks.<a href="./src/resources/zero-trust/networks/routes/networks.ts">create</a>(ipNetworkEncoded, { ...params }) -> Route</code>
- <code title="delete /accounts/{account_id}/teamnet/routes/network/{ip_network_encoded}">client.zeroTrust.networks.routes.networks.<a href="./src/resources/zero-trust/networks/routes/networks.ts">delete</a>(ipNetworkEncoded, { ...params }) -> Route</code>
- <code title="patch /accounts/{account_id}/teamnet/routes/network/{ip_network_encoded}">client.zeroTrust.networks.routes.networks.<a href="./src/resources/zero-trust/networks/routes/networks.ts">edit</a>(ipNetworkEncoded, { ...params }) -> Route</code>

### VirtualNetworks

Types:

- <code><a href="./src/resources/zero-trust/networks/virtual-networks.ts">VirtualNetwork</a></code>

Methods:

- <code title="post /accounts/{account_id}/teamnet/virtual_networks">client.zeroTrust.networks.virtualNetworks.<a href="./src/resources/zero-trust/networks/virtual-networks.ts">create</a>({ ...params }) -> VirtualNetwork</code>
- <code title="get /accounts/{account_id}/teamnet/virtual_networks">client.zeroTrust.networks.virtualNetworks.<a href="./src/resources/zero-trust/networks/virtual-networks.ts">list</a>({ ...params }) -> VirtualNetworksSinglePage</code>
- <code title="delete /accounts/{account_id}/teamnet/virtual_networks/{virtual_network_id}">client.zeroTrust.networks.virtualNetworks.<a href="./src/resources/zero-trust/networks/virtual-networks.ts">delete</a>(virtualNetworkId, { ...params }) -> VirtualNetwork</code>
- <code title="patch /accounts/{account_id}/teamnet/virtual_networks/{virtual_network_id}">client.zeroTrust.networks.virtualNetworks.<a href="./src/resources/zero-trust/networks/virtual-networks.ts">edit</a>(virtualNetworkId, { ...params }) -> VirtualNetwork</code>
- <code title="get /accounts/{account_id}/teamnet/virtual_networks/{virtual_network_id}">client.zeroTrust.networks.virtualNetworks.<a href="./src/resources/zero-trust/networks/virtual-networks.ts">get</a>(virtualNetworkId, { ...params }) -> VirtualNetwork</code>

### Subnets

Types:

- <code><a href="./src/resources/zero-trust/networks/subnets/subnets.ts">SubnetListResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/zerotrust/subnets">client.zeroTrust.networks.subnets.<a href="./src/resources/zero-trust/networks/subnets/subnets.ts">list</a>({ ...params }) -> SubnetListResponsesV4PagePaginationArray</code>

#### CloudflareSource

Types:

- <code><a href="./src/resources/zero-trust/networks/subnets/cloudflare-source.ts">CloudflareSourceUpdateResponse</a></code>

Methods:

- <code title="patch /accounts/{account_id}/zerotrust/subnets/cloudflare_source/{address_family}">client.zeroTrust.networks.subnets.cloudflareSource.<a href="./src/resources/zero-trust/networks/subnets/cloudflare-source.ts">update</a>(addressFamily, { ...params }) -> CloudflareSourceUpdateResponse</code>

## RiskScoring

Types:

- <code><a href="./src/resources/zero-trust/risk-scoring/risk-scoring.ts">RiskScoringGetResponse</a></code>
- <code><a href="./src/resources/zero-trust/risk-scoring/risk-scoring.ts">RiskScoringResetResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/zt_risk_scoring/{user_id}">client.zeroTrust.riskScoring.<a href="./src/resources/zero-trust/risk-scoring/risk-scoring.ts">get</a>(userId, { ...params }) -> RiskScoringGetResponse</code>
- <code title="post /accounts/{account_id}/zt_risk_scoring/{user_id}/reset">client.zeroTrust.riskScoring.<a href="./src/resources/zero-trust/risk-scoring/risk-scoring.ts">reset</a>(userId, { ...params }) -> RiskScoringResetResponse | null</code>

### Behaviours

Types:

- <code><a href="./src/resources/zero-trust/risk-scoring/behaviours.ts">BehaviourUpdateResponse</a></code>
- <code><a href="./src/resources/zero-trust/risk-scoring/behaviours.ts">BehaviourGetResponse</a></code>

Methods:

- <code title="put /accounts/{account_id}/zt_risk_scoring/behaviors">client.zeroTrust.riskScoring.behaviours.<a href="./src/resources/zero-trust/risk-scoring/behaviours.ts">update</a>({ ...params }) -> BehaviourUpdateResponse</code>
- <code title="get /accounts/{account_id}/zt_risk_scoring/behaviors">client.zeroTrust.riskScoring.behaviours.<a href="./src/resources/zero-trust/risk-scoring/behaviours.ts">get</a>({ ...params }) -> BehaviourGetResponse</code>

### Summary

Types:

- <code><a href="./src/resources/zero-trust/risk-scoring/summary.ts">SummaryGetResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/zt_risk_scoring/summary">client.zeroTrust.riskScoring.summary.<a href="./src/resources/zero-trust/risk-scoring/summary.ts">get</a>({ ...params }) -> SummaryGetResponse</code>

### Integrations

Types:

- <code><a href="./src/resources/zero-trust/risk-scoring/integrations/integrations.ts">IntegrationCreateResponse</a></code>
- <code><a href="./src/resources/zero-trust/risk-scoring/integrations/integrations.ts">IntegrationUpdateResponse</a></code>
- <code><a href="./src/resources/zero-trust/risk-scoring/integrations/integrations.ts">IntegrationListResponse</a></code>
- <code><a href="./src/resources/zero-trust/risk-scoring/integrations/integrations.ts">IntegrationDeleteResponse</a></code>
- <code><a href="./src/resources/zero-trust/risk-scoring/integrations/integrations.ts">IntegrationGetResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/zt_risk_scoring/integrations">client.zeroTrust.riskScoring.integrations.<a href="./src/resources/zero-trust/risk-scoring/integrations/integrations.ts">create</a>({ ...params }) -> IntegrationCreateResponse</code>
- <code title="put /accounts/{account_id}/zt_risk_scoring/integrations/{integration_id}">client.zeroTrust.riskScoring.integrations.<a href="./src/resources/zero-trust/risk-scoring/integrations/integrations.ts">update</a>(integrationId, { ...params }) -> IntegrationUpdateResponse</code>
- <code title="get /accounts/{account_id}/zt_risk_scoring/integrations">client.zeroTrust.riskScoring.integrations.<a href="./src/resources/zero-trust/risk-scoring/integrations/integrations.ts">list</a>({ ...params }) -> IntegrationListResponsesSinglePage</code>
- <code title="delete /accounts/{account_id}/zt_risk_scoring/integrations/{integration_id}">client.zeroTrust.riskScoring.integrations.<a href="./src/resources/zero-trust/risk-scoring/integrations/integrations.ts">delete</a>(integrationId, { ...params }) -> IntegrationDeleteResponse | null</code>
- <code title="get /accounts/{account_id}/zt_risk_scoring/integrations/{integration_id}">client.zeroTrust.riskScoring.integrations.<a href="./src/resources/zero-trust/risk-scoring/integrations/integrations.ts">get</a>(integrationId, { ...params }) -> IntegrationGetResponse</code>

#### References

Types:

- <code><a href="./src/resources/zero-trust/risk-scoring/integrations/references.ts">ReferenceGetResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/zt_risk_scoring/integrations/reference_id/{reference_id}">client.zeroTrust.riskScoring.integrations.references.<a href="./src/resources/zero-trust/risk-scoring/integrations/references.ts">get</a>(referenceId, { ...params }) -> ReferenceGetResponse</code>

# Turnstile

## Widgets

Types:

- <code><a href="./src/resources/turnstile/widgets.ts">Widget</a></code>
- <code><a href="./src/resources/turnstile/widgets.ts">WidgetDomain</a></code>
- <code><a href="./src/resources/turnstile/widgets.ts">WidgetListResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/challenges/widgets">client.turnstile.widgets.<a href="./src/resources/turnstile/widgets.ts">create</a>({ ...params }) -> Widget</code>
- <code title="put /accounts/{account_id}/challenges/widgets/{sitekey}">client.turnstile.widgets.<a href="./src/resources/turnstile/widgets.ts">update</a>(sitekey, { ...params }) -> Widget</code>
- <code title="get /accounts/{account_id}/challenges/widgets">client.turnstile.widgets.<a href="./src/resources/turnstile/widgets.ts">list</a>({ ...params }) -> WidgetListResponsesV4PagePaginationArray</code>
- <code title="delete /accounts/{account_id}/challenges/widgets/{sitekey}">client.turnstile.widgets.<a href="./src/resources/turnstile/widgets.ts">delete</a>(sitekey, { ...params }) -> Widget</code>
- <code title="get /accounts/{account_id}/challenges/widgets/{sitekey}">client.turnstile.widgets.<a href="./src/resources/turnstile/widgets.ts">get</a>(sitekey, { ...params }) -> Widget</code>
- <code title="post /accounts/{account_id}/challenges/widgets/{sitekey}/rotate_secret">client.turnstile.widgets.<a href="./src/resources/turnstile/widgets.ts">rotateSecret</a>(sitekey, { ...params }) -> Widget</code>

# Hyperdrive

Types:

- <code><a href="./src/resources/hyperdrive/hyperdrive.ts">Configuration</a></code>
- <code><a href="./src/resources/hyperdrive/hyperdrive.ts">Hyperdrive</a></code>

## Configs

Types:

- <code><a href="./src/resources/hyperdrive/configs.ts">ConfigDeleteResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/hyperdrive/configs">client.hyperdrive.configs.<a href="./src/resources/hyperdrive/configs.ts">create</a>({ ...params }) -> Hyperdrive</code>
- <code title="put /accounts/{account_id}/hyperdrive/configs/{hyperdrive_id}">client.hyperdrive.configs.<a href="./src/resources/hyperdrive/configs.ts">update</a>(hyperdriveId, { ...params }) -> Hyperdrive</code>
- <code title="get /accounts/{account_id}/hyperdrive/configs">client.hyperdrive.configs.<a href="./src/resources/hyperdrive/configs.ts">list</a>({ ...params }) -> HyperdrivesSinglePage</code>
- <code title="delete /accounts/{account_id}/hyperdrive/configs/{hyperdrive_id}">client.hyperdrive.configs.<a href="./src/resources/hyperdrive/configs.ts">delete</a>(hyperdriveId, { ...params }) -> ConfigDeleteResponse | null</code>
- <code title="patch /accounts/{account_id}/hyperdrive/configs/{hyperdrive_id}">client.hyperdrive.configs.<a href="./src/resources/hyperdrive/configs.ts">edit</a>(hyperdriveId, { ...params }) -> Hyperdrive</code>
- <code title="get /accounts/{account_id}/hyperdrive/configs/{hyperdrive_id}">client.hyperdrive.configs.<a href="./src/resources/hyperdrive/configs.ts">get</a>(hyperdriveId, { ...params }) -> Hyperdrive</code>

# RUM

## SiteInfo

Types:

- <code><a href="./src/resources/rum/site-info.ts">Site</a></code>
- <code><a href="./src/resources/rum/site-info.ts">SiteInfoDeleteResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/rum/site_info">client.rum.siteInfo.<a href="./src/resources/rum/site-info.ts">create</a>({ ...params }) -> Site</code>
- <code title="put /accounts/{account_id}/rum/site_info/{site_id}">client.rum.siteInfo.<a href="./src/resources/rum/site-info.ts">update</a>(siteId, { ...params }) -> Site</code>
- <code title="get /accounts/{account_id}/rum/site_info/list">client.rum.siteInfo.<a href="./src/resources/rum/site-info.ts">list</a>({ ...params }) -> SitesV4PagePaginationArray</code>
- <code title="delete /accounts/{account_id}/rum/site_info/{site_id}">client.rum.siteInfo.<a href="./src/resources/rum/site-info.ts">delete</a>(siteId, { ...params }) -> SiteInfoDeleteResponse</code>
- <code title="get /accounts/{account_id}/rum/site_info/{site_id}">client.rum.siteInfo.<a href="./src/resources/rum/site-info.ts">get</a>(siteId, { ...params }) -> Site</code>

## Rules

Types:

- <code><a href="./src/resources/rum/rules.ts">RUMRule</a></code>
- <code><a href="./src/resources/rum/rules.ts">RuleListResponse</a></code>
- <code><a href="./src/resources/rum/rules.ts">RuleDeleteResponse</a></code>
- <code><a href="./src/resources/rum/rules.ts">RuleBulkCreateResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/rum/v2/{ruleset_id}/rule">client.rum.rules.<a href="./src/resources/rum/rules.ts">create</a>(rulesetId, { ...params }) -> RUMRule</code>
- <code title="put /accounts/{account_id}/rum/v2/{ruleset_id}/rule/{rule_id}">client.rum.rules.<a href="./src/resources/rum/rules.ts">update</a>(rulesetId, ruleId, { ...params }) -> RUMRule</code>
- <code title="get /accounts/{account_id}/rum/v2/{ruleset_id}/rules">client.rum.rules.<a href="./src/resources/rum/rules.ts">list</a>(rulesetId, { ...params }) -> RuleListResponse</code>
- <code title="delete /accounts/{account_id}/rum/v2/{ruleset_id}/rule/{rule_id}">client.rum.rules.<a href="./src/resources/rum/rules.ts">delete</a>(rulesetId, ruleId, { ...params }) -> RuleDeleteResponse</code>
- <code title="post /accounts/{account_id}/rum/v2/{ruleset_id}/rules">client.rum.rules.<a href="./src/resources/rum/rules.ts">bulkCreate</a>(rulesetId, { ...params }) -> RuleBulkCreateResponse</code>

# Vectorize

## Indexes

Types:

- <code><a href="./src/resources/vectorize/indexes/indexes.ts">CreateIndex</a></code>
- <code><a href="./src/resources/vectorize/indexes/indexes.ts">IndexDeleteVectorsByID</a></code>
- <code><a href="./src/resources/vectorize/indexes/indexes.ts">IndexDimensionConfiguration</a></code>
- <code><a href="./src/resources/vectorize/indexes/indexes.ts">IndexInsert</a></code>
- <code><a href="./src/resources/vectorize/indexes/indexes.ts">IndexQuery</a></code>
- <code><a href="./src/resources/vectorize/indexes/indexes.ts">IndexUpsert</a></code>
- <code><a href="./src/resources/vectorize/indexes/indexes.ts">IndexDeleteResponse</a></code>
- <code><a href="./src/resources/vectorize/indexes/indexes.ts">IndexDeleteByIDsResponse</a></code>
- <code><a href="./src/resources/vectorize/indexes/indexes.ts">IndexGetByIDsResponse</a></code>
- <code><a href="./src/resources/vectorize/indexes/indexes.ts">IndexInfoResponse</a></code>
- <code><a href="./src/resources/vectorize/indexes/indexes.ts">IndexInsertResponse</a></code>
- <code><a href="./src/resources/vectorize/indexes/indexes.ts">IndexQueryResponse</a></code>
- <code><a href="./src/resources/vectorize/indexes/indexes.ts">IndexUpsertResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/vectorize/v2/indexes">client.vectorize.indexes.<a href="./src/resources/vectorize/indexes/indexes.ts">create</a>({ ...params }) -> CreateIndex | null</code>
- <code title="get /accounts/{account_id}/vectorize/v2/indexes">client.vectorize.indexes.<a href="./src/resources/vectorize/indexes/indexes.ts">list</a>({ ...params }) -> CreateIndicesSinglePage</code>
- <code title="delete /accounts/{account_id}/vectorize/v2/indexes/{index_name}">client.vectorize.indexes.<a href="./src/resources/vectorize/indexes/indexes.ts">delete</a>(indexName, { ...params }) -> IndexDeleteResponse | null</code>
- <code title="post /accounts/{account_id}/vectorize/v2/indexes/{index_name}/delete_by_ids">client.vectorize.indexes.<a href="./src/resources/vectorize/indexes/indexes.ts">deleteByIds</a>(indexName, { ...params }) -> IndexDeleteByIDsResponse | null</code>
- <code title="get /accounts/{account_id}/vectorize/v2/indexes/{index_name}">client.vectorize.indexes.<a href="./src/resources/vectorize/indexes/indexes.ts">get</a>(indexName, { ...params }) -> CreateIndex | null</code>
- <code title="post /accounts/{account_id}/vectorize/v2/indexes/{index_name}/get_by_ids">client.vectorize.indexes.<a href="./src/resources/vectorize/indexes/indexes.ts">getByIds</a>(indexName, { ...params }) -> IndexGetByIDsResponse | null</code>
- <code title="get /accounts/{account_id}/vectorize/v2/indexes/{index_name}/info">client.vectorize.indexes.<a href="./src/resources/vectorize/indexes/indexes.ts">info</a>(indexName, { ...params }) -> IndexInfoResponse | null</code>
- <code title="post /accounts/{account_id}/vectorize/v2/indexes/{index_name}/insert">client.vectorize.indexes.<a href="./src/resources/vectorize/indexes/indexes.ts">insert</a>(indexName, { ...params }) -> IndexInsertResponse | null</code>
- <code title="post /accounts/{account_id}/vectorize/v2/indexes/{index_name}/query">client.vectorize.indexes.<a href="./src/resources/vectorize/indexes/indexes.ts">query</a>(indexName, { ...params }) -> IndexQueryResponse | null</code>
- <code title="post /accounts/{account_id}/vectorize/v2/indexes/{index_name}/upsert">client.vectorize.indexes.<a href="./src/resources/vectorize/indexes/indexes.ts">upsert</a>(indexName, { ...params }) -> IndexUpsertResponse | null</code>

### MetadataIndex

Types:

- <code><a href="./src/resources/vectorize/indexes/metadata-index.ts">MetadataIndexCreateResponse</a></code>
- <code><a href="./src/resources/vectorize/indexes/metadata-index.ts">MetadataIndexListResponse</a></code>
- <code><a href="./src/resources/vectorize/indexes/metadata-index.ts">MetadataIndexDeleteResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/vectorize/v2/indexes/{index_name}/metadata_index/create">client.vectorize.indexes.metadataIndex.<a href="./src/resources/vectorize/indexes/metadata-index.ts">create</a>(indexName, { ...params }) -> MetadataIndexCreateResponse | null</code>
- <code title="get /accounts/{account_id}/vectorize/v2/indexes/{index_name}/metadata_index/list">client.vectorize.indexes.metadataIndex.<a href="./src/resources/vectorize/indexes/metadata-index.ts">list</a>(indexName, { ...params }) -> MetadataIndexListResponse | null</code>
- <code title="post /accounts/{account_id}/vectorize/v2/indexes/{index_name}/metadata_index/delete">client.vectorize.indexes.metadataIndex.<a href="./src/resources/vectorize/indexes/metadata-index.ts">delete</a>(indexName, { ...params }) -> MetadataIndexDeleteResponse | null</code>

# URLScanner

Types:

- <code><a href="./src/resources/url-scanner/url-scanner.ts">URLScannerDomain</a></code>
- <code><a href="./src/resources/url-scanner/url-scanner.ts">URLScannerTask</a></code>

## Responses

Types:

- <code><a href="./src/resources/url-scanner/responses.ts">ResponseGetResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/urlscanner/v2/responses/{response_id}">client.urlScanner.responses.<a href="./src/resources/url-scanner/responses.ts">get</a>(responseId, { ...params }) -> string</code>

## Scans

Types:

- <code><a href="./src/resources/url-scanner/scans.ts">ScanCreateResponse</a></code>
- <code><a href="./src/resources/url-scanner/scans.ts">ScanListResponse</a></code>
- <code><a href="./src/resources/url-scanner/scans.ts">ScanBulkCreateResponse</a></code>
- <code><a href="./src/resources/url-scanner/scans.ts">ScanDOMResponse</a></code>
- <code><a href="./src/resources/url-scanner/scans.ts">ScanGetResponse</a></code>
- <code><a href="./src/resources/url-scanner/scans.ts">ScanHARResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/urlscanner/v2/scan">client.urlScanner.scans.<a href="./src/resources/url-scanner/scans.ts">create</a>({ ...params }) -> ScanCreateResponse</code>
- <code title="get /accounts/{account_id}/urlscanner/v2/search">client.urlScanner.scans.<a href="./src/resources/url-scanner/scans.ts">list</a>({ ...params }) -> ScanListResponse</code>
- <code title="post /accounts/{account_id}/urlscanner/v2/bulk">client.urlScanner.scans.<a href="./src/resources/url-scanner/scans.ts">bulkCreate</a>([ ...body ]) -> ScanBulkCreateResponse</code>
- <code title="get /accounts/{account_id}/urlscanner/v2/dom/{scan_id}">client.urlScanner.scans.<a href="./src/resources/url-scanner/scans.ts">dom</a>(scanId, { ...params }) -> string</code>
- <code title="get /accounts/{account_id}/urlscanner/v2/result/{scan_id}">client.urlScanner.scans.<a href="./src/resources/url-scanner/scans.ts">get</a>(scanId, { ...params }) -> ScanGetResponse</code>
- <code title="get /accounts/{account_id}/urlscanner/v2/har/{scan_id}">client.urlScanner.scans.<a href="./src/resources/url-scanner/scans.ts">har</a>(scanId, { ...params }) -> ScanHARResponse</code>
- <code title="get /accounts/{account_id}/urlscanner/v2/screenshots/{scan_id}.png">client.urlScanner.scans.<a href="./src/resources/url-scanner/scans.ts">screenshot</a>(scanId, { ...params }) -> Response</code>

# Radar

## AI

### ToMarkdown

Types:

- <code><a href="./src/resources/radar/ai/to-markdown.ts">ToMarkdownCreateResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/ai/tomarkdown">client.radar.ai.toMarkdown.<a href="./src/resources/radar/ai/to-markdown.ts">create</a>({ ...params }) -> ToMarkdownCreateResponsesSinglePage</code>

### Inference

#### Summary

Types:

- <code><a href="./src/resources/radar/ai/inference/summary.ts">SummaryModelResponse</a></code>
- <code><a href="./src/resources/radar/ai/inference/summary.ts">SummaryTaskResponse</a></code>

Methods:

- <code title="get /radar/ai/inference/summary/model">client.radar.ai.inference.summary.<a href="./src/resources/radar/ai/inference/summary.ts">model</a>({ ...params }) -> SummaryModelResponse</code>
- <code title="get /radar/ai/inference/summary/task">client.radar.ai.inference.summary.<a href="./src/resources/radar/ai/inference/summary.ts">task</a>({ ...params }) -> SummaryTaskResponse</code>

#### TimeseriesGroups

##### Summary

Types:

- <code><a href="./src/resources/radar/ai/inference/timeseries-groups/summary.ts">SummaryModelResponse</a></code>
- <code><a href="./src/resources/radar/ai/inference/timeseries-groups/summary.ts">SummaryTaskResponse</a></code>

Methods:

- <code title="get /radar/ai/inference/timeseries_groups/model">client.radar.ai.inference.timeseriesGroups.summary.<a href="./src/resources/radar/ai/inference/timeseries-groups/summary.ts">model</a>({ ...params }) -> SummaryModelResponse</code>
- <code title="get /radar/ai/inference/timeseries_groups/task">client.radar.ai.inference.timeseriesGroups.summary.<a href="./src/resources/radar/ai/inference/timeseries-groups/summary.ts">task</a>({ ...params }) -> SummaryTaskResponse</code>

### Bots

#### Summary

Types:

- <code><a href="./src/resources/radar/ai/bots/summary.ts">SummaryUserAgentResponse</a></code>

Methods:

- <code title="get /radar/ai/bots/summary/user_agent">client.radar.ai.bots.summary.<a href="./src/resources/radar/ai/bots/summary.ts">userAgent</a>({ ...params }) -> SummaryUserAgentResponse</code>

### TimeseriesGroups

Types:

- <code><a href="./src/resources/radar/ai/timeseries-groups.ts">TimeseriesGroupUserAgentResponse</a></code>

Methods:

- <code title="get /radar/ai/bots/timeseries_groups/user_agent">client.radar.ai.timeseriesGroups.<a href="./src/resources/radar/ai/timeseries-groups.ts">userAgent</a>({ ...params }) -> TimeseriesGroupUserAgentResponse</code>

## Annotations

Types:

- <code><a href="./src/resources/radar/annotations/annotations.ts">AnnotationListResponse</a></code>

Methods:

- <code title="get /radar/annotations">client.radar.annotations.<a href="./src/resources/radar/annotations/annotations.ts">list</a>({ ...params }) -> AnnotationListResponse</code>

### Outages

Types:

- <code><a href="./src/resources/radar/annotations/outages.ts">OutageGetResponse</a></code>
- <code><a href="./src/resources/radar/annotations/outages.ts">OutageLocationsResponse</a></code>

Methods:

- <code title="get /radar/annotations/outages">client.radar.annotations.outages.<a href="./src/resources/radar/annotations/outages.ts">get</a>({ ...params }) -> OutageGetResponse</code>
- <code title="get /radar/annotations/outages/locations">client.radar.annotations.outages.<a href="./src/resources/radar/annotations/outages.ts">locations</a>({ ...params }) -> OutageLocationsResponse</code>

## BGP

Types:

- <code><a href="./src/resources/radar/bgp/bgp.ts">BGPTimeseriesResponse</a></code>

Methods:

- <code title="get /radar/bgp/timeseries">client.radar.bgp.<a href="./src/resources/radar/bgp/bgp.ts">timeseries</a>({ ...params }) -> BGPTimeseriesResponse</code>

### Leaks

#### Events

Types:

- <code><a href="./src/resources/radar/bgp/leaks/events.ts">EventListResponse</a></code>

Methods:

- <code title="get /radar/bgp/leaks/events">client.radar.bgp.leaks.events.<a href="./src/resources/radar/bgp/leaks/events.ts">list</a>({ ...params }) -> EventListResponsesV4PagePagination</code>

### Top

Types:

- <code><a href="./src/resources/radar/bgp/top/top.ts">TopPrefixesResponse</a></code>

Methods:

- <code title="get /radar/bgp/top/prefixes">client.radar.bgp.top.<a href="./src/resources/radar/bgp/top/top.ts">prefixes</a>({ ...params }) -> TopPrefixesResponse</code>

#### Ases

Types:

- <code><a href="./src/resources/radar/bgp/top/ases.ts">AseGetResponse</a></code>
- <code><a href="./src/resources/radar/bgp/top/ases.ts">AsePrefixesResponse</a></code>

Methods:

- <code title="get /radar/bgp/top/ases">client.radar.bgp.top.ases.<a href="./src/resources/radar/bgp/top/ases.ts">get</a>({ ...params }) -> AseGetResponse</code>
- <code title="get /radar/bgp/top/ases/prefixes">client.radar.bgp.top.ases.<a href="./src/resources/radar/bgp/top/ases.ts">prefixes</a>({ ...params }) -> AsePrefixesResponse</code>

### Hijacks

#### Events

Types:

- <code><a href="./src/resources/radar/bgp/hijacks/events.ts">EventListResponse</a></code>

Methods:

- <code title="get /radar/bgp/hijacks/events">client.radar.bgp.hijacks.events.<a href="./src/resources/radar/bgp/hijacks/events.ts">list</a>({ ...params }) -> EventListResponsesV4PagePagination</code>

### Routes

Types:

- <code><a href="./src/resources/radar/bgp/routes.ts">RouteAsesResponse</a></code>
- <code><a href="./src/resources/radar/bgp/routes.ts">RouteMoasResponse</a></code>
- <code><a href="./src/resources/radar/bgp/routes.ts">RoutePfx2asResponse</a></code>
- <code><a href="./src/resources/radar/bgp/routes.ts">RouteRealtimeResponse</a></code>
- <code><a href="./src/resources/radar/bgp/routes.ts">RouteStatsResponse</a></code>

Methods:

- <code title="get /radar/bgp/routes/ases">client.radar.bgp.routes.<a href="./src/resources/radar/bgp/routes.ts">ases</a>({ ...params }) -> RouteAsesResponse</code>
- <code title="get /radar/bgp/routes/moas">client.radar.bgp.routes.<a href="./src/resources/radar/bgp/routes.ts">moas</a>({ ...params }) -> RouteMoasResponse</code>
- <code title="get /radar/bgp/routes/pfx2as">client.radar.bgp.routes.<a href="./src/resources/radar/bgp/routes.ts">pfx2as</a>({ ...params }) -> RoutePfx2asResponse</code>
- <code title="get /radar/bgp/routes/realtime">client.radar.bgp.routes.<a href="./src/resources/radar/bgp/routes.ts">realtime</a>({ ...params }) -> RouteRealtimeResponse</code>
- <code title="get /radar/bgp/routes/stats">client.radar.bgp.routes.<a href="./src/resources/radar/bgp/routes.ts">stats</a>({ ...params }) -> RouteStatsResponse</code>

### IPs

Types:

- <code><a href="./src/resources/radar/bgp/ips.ts">IPTimeseriesResponse</a></code>

Methods:

- <code title="get /radar/bgp/ips/timeseries">client.radar.bgp.ips.<a href="./src/resources/radar/bgp/ips.ts">timeseries</a>({ ...params }) -> IPTimeseriesResponse</code>

## Bots

Types:

- <code><a href="./src/resources/radar/bots/bots.ts">BotListResponse</a></code>
- <code><a href="./src/resources/radar/bots/bots.ts">BotGetResponse</a></code>
- <code><a href="./src/resources/radar/bots/bots.ts">BotSummaryResponse</a></code>
- <code><a href="./src/resources/radar/bots/bots.ts">BotTimeseriesResponse</a></code>
- <code><a href="./src/resources/radar/bots/bots.ts">BotTimeseriesGroupsResponse</a></code>

Methods:

- <code title="get /radar/bots">client.radar.bots.<a href="./src/resources/radar/bots/bots.ts">list</a>({ ...params }) -> BotListResponse</code>
- <code title="get /radar/bots/{bot_slug}">client.radar.bots.<a href="./src/resources/radar/bots/bots.ts">get</a>(botSlug, { ...params }) -> BotGetResponse</code>
- <code title="get /radar/bots/summary/{dimension}">client.radar.bots.<a href="./src/resources/radar/bots/bots.ts">summary</a>(dimension, { ...params }) -> BotSummaryResponse</code>
- <code title="get /radar/bots/timeseries">client.radar.bots.<a href="./src/resources/radar/bots/bots.ts">timeseries</a>({ ...params }) -> BotTimeseriesResponse</code>
- <code title="get /radar/bots/timeseries_groups/{dimension}">client.radar.bots.<a href="./src/resources/radar/bots/bots.ts">timeseriesGroups</a>(dimension, { ...params }) -> BotTimeseriesGroupsResponse</code>

### WebCrawlers

Types:

- <code><a href="./src/resources/radar/bots/web-crawlers.ts">WebCrawlerSummaryResponse</a></code>
- <code><a href="./src/resources/radar/bots/web-crawlers.ts">WebCrawlerTimeseriesGroupsResponse</a></code>

Methods:

- <code title="get /radar/bots/crawlers/summary/{dimension}">client.radar.bots.webCrawlers.<a href="./src/resources/radar/bots/web-crawlers.ts">summary</a>(dimension, { ...params }) -> WebCrawlerSummaryResponse</code>
- <code title="get /radar/bots/crawlers/timeseries_groups/{dimension}">client.radar.bots.webCrawlers.<a href="./src/resources/radar/bots/web-crawlers.ts">timeseriesGroups</a>(dimension, { ...params }) -> WebCrawlerTimeseriesGroupsResponse</code>

## Datasets

Types:

- <code><a href="./src/resources/radar/datasets.ts">DatasetListResponse</a></code>
- <code><a href="./src/resources/radar/datasets.ts">DatasetDownloadResponse</a></code>
- <code><a href="./src/resources/radar/datasets.ts">DatasetGetResponse</a></code>

Methods:

- <code title="get /radar/datasets">client.radar.datasets.<a href="./src/resources/radar/datasets.ts">list</a>({ ...params }) -> DatasetListResponse</code>
- <code title="post /radar/datasets/download">client.radar.datasets.<a href="./src/resources/radar/datasets.ts">download</a>({ ...params }) -> DatasetDownloadResponse</code>
- <code title="get /radar/datasets/{alias}">client.radar.datasets.<a href="./src/resources/radar/datasets.ts">get</a>(alias) -> string</code>

## DNS

Types:

- <code><a href="./src/resources/radar/dns/dns.ts">DNSTimeseriesResponse</a></code>

Methods:

- <code title="get /radar/dns/timeseries">client.radar.dns.<a href="./src/resources/radar/dns/dns.ts">timeseries</a>({ ...params }) -> DNSTimeseriesResponse</code>

### Top

Types:

- <code><a href="./src/resources/radar/dns/top.ts">TopAsesResponse</a></code>
- <code><a href="./src/resources/radar/dns/top.ts">TopLocationsResponse</a></code>

Methods:

- <code title="get /radar/dns/top/ases">client.radar.dns.top.<a href="./src/resources/radar/dns/top.ts">ases</a>({ ...params }) -> TopAsesResponse</code>
- <code title="get /radar/dns/top/locations">client.radar.dns.top.<a href="./src/resources/radar/dns/top.ts">locations</a>({ ...params }) -> TopLocationsResponse</code>

### Summary

Types:

- <code><a href="./src/resources/radar/dns/summary.ts">SummaryCacheHitResponse</a></code>
- <code><a href="./src/resources/radar/dns/summary.ts">SummaryDNSSECResponse</a></code>
- <code><a href="./src/resources/radar/dns/summary.ts">SummaryDNSSECAwareResponse</a></code>
- <code><a href="./src/resources/radar/dns/summary.ts">SummaryDNSSECE2EResponse</a></code>
- <code><a href="./src/resources/radar/dns/summary.ts">SummaryIPVersionResponse</a></code>
- <code><a href="./src/resources/radar/dns/summary.ts">SummaryMatchingAnswerResponse</a></code>
- <code><a href="./src/resources/radar/dns/summary.ts">SummaryProtocolResponse</a></code>
- <code><a href="./src/resources/radar/dns/summary.ts">SummaryQueryTypeResponse</a></code>
- <code><a href="./src/resources/radar/dns/summary.ts">SummaryResponseCodeResponse</a></code>
- <code><a href="./src/resources/radar/dns/summary.ts">SummaryResponseTTLResponse</a></code>

Methods:

- <code title="get /radar/dns/summary/cache_hit">client.radar.dns.summary.<a href="./src/resources/radar/dns/summary.ts">cacheHit</a>({ ...params }) -> SummaryCacheHitResponse</code>
- <code title="get /radar/dns/summary/dnssec">client.radar.dns.summary.<a href="./src/resources/radar/dns/summary.ts">dnssec</a>({ ...params }) -> SummaryDNSSECResponse</code>
- <code title="get /radar/dns/summary/dnssec_aware">client.radar.dns.summary.<a href="./src/resources/radar/dns/summary.ts">dnssecAware</a>({ ...params }) -> SummaryDNSSECAwareResponse</code>
- <code title="get /radar/dns/summary/dnssec_e2e">client.radar.dns.summary.<a href="./src/resources/radar/dns/summary.ts">dnssecE2E</a>({ ...params }) -> SummaryDNSSECE2EResponse</code>
- <code title="get /radar/dns/summary/ip_version">client.radar.dns.summary.<a href="./src/resources/radar/dns/summary.ts">ipVersion</a>({ ...params }) -> SummaryIPVersionResponse</code>
- <code title="get /radar/dns/summary/matching_answer">client.radar.dns.summary.<a href="./src/resources/radar/dns/summary.ts">matchingAnswer</a>({ ...params }) -> SummaryMatchingAnswerResponse</code>
- <code title="get /radar/dns/summary/protocol">client.radar.dns.summary.<a href="./src/resources/radar/dns/summary.ts">protocol</a>({ ...params }) -> SummaryProtocolResponse</code>
- <code title="get /radar/dns/summary/query_type">client.radar.dns.summary.<a href="./src/resources/radar/dns/summary.ts">queryType</a>({ ...params }) -> SummaryQueryTypeResponse</code>
- <code title="get /radar/dns/summary/response_code">client.radar.dns.summary.<a href="./src/resources/radar/dns/summary.ts">responseCode</a>({ ...params }) -> SummaryResponseCodeResponse</code>
- <code title="get /radar/dns/summary/response_ttl">client.radar.dns.summary.<a href="./src/resources/radar/dns/summary.ts">responseTTL</a>({ ...params }) -> SummaryResponseTTLResponse</code>

### TimeseriesGroups

Types:

- <code><a href="./src/resources/radar/dns/timeseries-groups.ts">TimeseriesGroupCacheHitResponse</a></code>
- <code><a href="./src/resources/radar/dns/timeseries-groups.ts">TimeseriesGroupDNSSECResponse</a></code>
- <code><a href="./src/resources/radar/dns/timeseries-groups.ts">TimeseriesGroupDNSSECAwareResponse</a></code>
- <code><a href="./src/resources/radar/dns/timeseries-groups.ts">TimeseriesGroupDNSSECE2EResponse</a></code>
- <code><a href="./src/resources/radar/dns/timeseries-groups.ts">TimeseriesGroupIPVersionResponse</a></code>
- <code><a href="./src/resources/radar/dns/timeseries-groups.ts">TimeseriesGroupMatchingAnswerResponse</a></code>
- <code><a href="./src/resources/radar/dns/timeseries-groups.ts">TimeseriesGroupProtocolResponse</a></code>
- <code><a href="./src/resources/radar/dns/timeseries-groups.ts">TimeseriesGroupQueryTypeResponse</a></code>
- <code><a href="./src/resources/radar/dns/timeseries-groups.ts">TimeseriesGroupResponseCodeResponse</a></code>
- <code><a href="./src/resources/radar/dns/timeseries-groups.ts">TimeseriesGroupResponseTTLResponse</a></code>

Methods:

- <code title="get /radar/dns/timeseries_groups/cache_hit">client.radar.dns.timeseriesGroups.<a href="./src/resources/radar/dns/timeseries-groups.ts">cacheHit</a>({ ...params }) -> TimeseriesGroupCacheHitResponse</code>
- <code title="get /radar/dns/timeseries_groups/dnssec">client.radar.dns.timeseriesGroups.<a href="./src/resources/radar/dns/timeseries-groups.ts">dnssec</a>({ ...params }) -> TimeseriesGroupDNSSECResponse</code>
- <code title="get /radar/dns/timeseries_groups/dnssec_aware">client.radar.dns.timeseriesGroups.<a href="./src/resources/radar/dns/timeseries-groups.ts">dnssecAware</a>({ ...params }) -> TimeseriesGroupDNSSECAwareResponse</code>
- <code title="get /radar/dns/timeseries_groups/dnssec_e2e">client.radar.dns.timeseriesGroups.<a href="./src/resources/radar/dns/timeseries-groups.ts">dnssecE2E</a>({ ...params }) -> TimeseriesGroupDNSSECE2EResponse</code>
- <code title="get /radar/dns/timeseries_groups/ip_version">client.radar.dns.timeseriesGroups.<a href="./src/resources/radar/dns/timeseries-groups.ts">ipVersion</a>({ ...params }) -> TimeseriesGroupIPVersionResponse</code>
- <code title="get /radar/dns/timeseries_groups/matching_answer">client.radar.dns.timeseriesGroups.<a href="./src/resources/radar/dns/timeseries-groups.ts">matchingAnswer</a>({ ...params }) -> TimeseriesGroupMatchingAnswerResponse</code>
- <code title="get /radar/dns/timeseries_groups/protocol">client.radar.dns.timeseriesGroups.<a href="./src/resources/radar/dns/timeseries-groups.ts">protocol</a>({ ...params }) -> TimeseriesGroupProtocolResponse</code>
- <code title="get /radar/dns/timeseries_groups/query_type">client.radar.dns.timeseriesGroups.<a href="./src/resources/radar/dns/timeseries-groups.ts">queryType</a>({ ...params }) -> TimeseriesGroupQueryTypeResponse</code>
- <code title="get /radar/dns/timeseries_groups/response_code">client.radar.dns.timeseriesGroups.<a href="./src/resources/radar/dns/timeseries-groups.ts">responseCode</a>({ ...params }) -> TimeseriesGroupResponseCodeResponse</code>
- <code title="get /radar/dns/timeseries_groups/response_ttl">client.radar.dns.timeseriesGroups.<a href="./src/resources/radar/dns/timeseries-groups.ts">responseTTL</a>({ ...params }) -> TimeseriesGroupResponseTTLResponse</code>

## Netflows

Types:

- <code><a href="./src/resources/radar/netflows/netflows.ts">NetflowSummaryResponse</a></code>
- <code><a href="./src/resources/radar/netflows/netflows.ts">NetflowTimeseriesResponse</a></code>

Methods:

- <code title="get /radar/netflows/summary">client.radar.netflows.<a href="./src/resources/radar/netflows/netflows.ts">summary</a>({ ...params }) -> NetflowSummaryResponse</code>
- <code title="get /radar/netflows/timeseries">client.radar.netflows.<a href="./src/resources/radar/netflows/netflows.ts">timeseries</a>({ ...params }) -> NetflowTimeseriesResponse</code>

### Top

Types:

- <code><a href="./src/resources/radar/netflows/top.ts">TopAsesResponse</a></code>
- <code><a href="./src/resources/radar/netflows/top.ts">TopLocationsResponse</a></code>

Methods:

- <code title="get /radar/netflows/top/ases">client.radar.netflows.top.<a href="./src/resources/radar/netflows/top.ts">ases</a>({ ...params }) -> TopAsesResponse</code>
- <code title="get /radar/netflows/top/locations">client.radar.netflows.top.<a href="./src/resources/radar/netflows/top.ts">locations</a>({ ...params }) -> TopLocationsResponse</code>

## Search

Types:

- <code><a href="./src/resources/radar/search.ts">SearchGlobalResponse</a></code>

Methods:

- <code title="get /radar/search/global">client.radar.search.<a href="./src/resources/radar/search.ts">global</a>({ ...params }) -> SearchGlobalResponse</code>

## VerifiedBots

### Top

Types:

- <code><a href="./src/resources/radar/verified-bots/top.ts">TopBotsResponse</a></code>
- <code><a href="./src/resources/radar/verified-bots/top.ts">TopCategoriesResponse</a></code>

Methods:

- <code title="get /radar/verified_bots/top/bots">client.radar.verifiedBots.top.<a href="./src/resources/radar/verified-bots/top.ts">bots</a>({ ...params }) -> TopBotsResponse</code>
- <code title="get /radar/verified_bots/top/categories">client.radar.verifiedBots.top.<a href="./src/resources/radar/verified-bots/top.ts">categories</a>({ ...params }) -> TopCategoriesResponse</code>

## AS112

Types:

- <code><a href="./src/resources/radar/as112/as112.ts">AS112TimeseriesResponse</a></code>

Methods:

- <code title="get /radar/as112/timeseries">client.radar.as112.<a href="./src/resources/radar/as112/as112.ts">timeseries</a>({ ...params }) -> AS112TimeseriesResponse</code>

### Summary

Types:

- <code><a href="./src/resources/radar/as112/summary.ts">SummaryDNSSECResponse</a></code>
- <code><a href="./src/resources/radar/as112/summary.ts">SummaryEdnsResponse</a></code>
- <code><a href="./src/resources/radar/as112/summary.ts">SummaryIPVersionResponse</a></code>
- <code><a href="./src/resources/radar/as112/summary.ts">SummaryProtocolResponse</a></code>
- <code><a href="./src/resources/radar/as112/summary.ts">SummaryQueryTypeResponse</a></code>
- <code><a href="./src/resources/radar/as112/summary.ts">SummaryResponseCodesResponse</a></code>

Methods:

- <code title="get /radar/as112/summary/dnssec">client.radar.as112.summary.<a href="./src/resources/radar/as112/summary.ts">dnssec</a>({ ...params }) -> SummaryDNSSECResponse</code>
- <code title="get /radar/as112/summary/edns">client.radar.as112.summary.<a href="./src/resources/radar/as112/summary.ts">edns</a>({ ...params }) -> SummaryEdnsResponse</code>
- <code title="get /radar/as112/summary/ip_version">client.radar.as112.summary.<a href="./src/resources/radar/as112/summary.ts">ipVersion</a>({ ...params }) -> SummaryIPVersionResponse</code>
- <code title="get /radar/as112/summary/protocol">client.radar.as112.summary.<a href="./src/resources/radar/as112/summary.ts">protocol</a>({ ...params }) -> SummaryProtocolResponse</code>
- <code title="get /radar/as112/summary/query_type">client.radar.as112.summary.<a href="./src/resources/radar/as112/summary.ts">queryType</a>({ ...params }) -> SummaryQueryTypeResponse</code>
- <code title="get /radar/as112/summary/response_codes">client.radar.as112.summary.<a href="./src/resources/radar/as112/summary.ts">responseCodes</a>({ ...params }) -> SummaryResponseCodesResponse</code>

### TimeseriesGroups

Types:

- <code><a href="./src/resources/radar/as112/timeseries-groups.ts">TimeseriesGroupDNSSECResponse</a></code>
- <code><a href="./src/resources/radar/as112/timeseries-groups.ts">TimeseriesGroupEdnsResponse</a></code>
- <code><a href="./src/resources/radar/as112/timeseries-groups.ts">TimeseriesGroupIPVersionResponse</a></code>
- <code><a href="./src/resources/radar/as112/timeseries-groups.ts">TimeseriesGroupProtocolResponse</a></code>
- <code><a href="./src/resources/radar/as112/timeseries-groups.ts">TimeseriesGroupQueryTypeResponse</a></code>
- <code><a href="./src/resources/radar/as112/timeseries-groups.ts">TimeseriesGroupResponseCodesResponse</a></code>

Methods:

- <code title="get /radar/as112/timeseries_groups/dnssec">client.radar.as112.timeseriesGroups.<a href="./src/resources/radar/as112/timeseries-groups.ts">dnssec</a>({ ...params }) -> TimeseriesGroupDNSSECResponse</code>
- <code title="get /radar/as112/timeseries_groups/edns">client.radar.as112.timeseriesGroups.<a href="./src/resources/radar/as112/timeseries-groups.ts">edns</a>({ ...params }) -> TimeseriesGroupEdnsResponse</code>
- <code title="get /radar/as112/timeseries_groups/ip_version">client.radar.as112.timeseriesGroups.<a href="./src/resources/radar/as112/timeseries-groups.ts">ipVersion</a>({ ...params }) -> TimeseriesGroupIPVersionResponse</code>
- <code title="get /radar/as112/timeseries_groups/protocol">client.radar.as112.timeseriesGroups.<a href="./src/resources/radar/as112/timeseries-groups.ts">protocol</a>({ ...params }) -> TimeseriesGroupProtocolResponse</code>
- <code title="get /radar/as112/timeseries_groups/query_type">client.radar.as112.timeseriesGroups.<a href="./src/resources/radar/as112/timeseries-groups.ts">queryType</a>({ ...params }) -> TimeseriesGroupQueryTypeResponse</code>
- <code title="get /radar/as112/timeseries_groups/response_codes">client.radar.as112.timeseriesGroups.<a href="./src/resources/radar/as112/timeseries-groups.ts">responseCodes</a>({ ...params }) -> TimeseriesGroupResponseCodesResponse</code>

### Top

Types:

- <code><a href="./src/resources/radar/as112/top.ts">TopDNSSECResponse</a></code>
- <code><a href="./src/resources/radar/as112/top.ts">TopEdnsResponse</a></code>
- <code><a href="./src/resources/radar/as112/top.ts">TopIPVersionResponse</a></code>
- <code><a href="./src/resources/radar/as112/top.ts">TopLocationsResponse</a></code>

Methods:

- <code title="get /radar/as112/top/locations/dnssec/{dnssec}">client.radar.as112.top.<a href="./src/resources/radar/as112/top.ts">dnssec</a>(dnssec, { ...params }) -> TopDNSSECResponse</code>
- <code title="get /radar/as112/top/locations/edns/{edns}">client.radar.as112.top.<a href="./src/resources/radar/as112/top.ts">edns</a>(edns, { ...params }) -> TopEdnsResponse</code>
- <code title="get /radar/as112/top/locations/ip_version/{ip_version}">client.radar.as112.top.<a href="./src/resources/radar/as112/top.ts">ipVersion</a>(ipVersion, { ...params }) -> TopIPVersionResponse</code>
- <code title="get /radar/as112/top/locations">client.radar.as112.top.<a href="./src/resources/radar/as112/top.ts">locations</a>({ ...params }) -> TopLocationsResponse</code>

## Email

Types:

- <code><a href="./src/resources/radar/email/email.ts">RadarEmailSeries</a></code>
- <code><a href="./src/resources/radar/email/email.ts">RadarEmailSummary</a></code>

### Routing

#### Summary

Types:

- <code><a href="./src/resources/radar/email/routing/summary.ts">SummaryARCResponse</a></code>
- <code><a href="./src/resources/radar/email/routing/summary.ts">SummaryDKIMResponse</a></code>
- <code><a href="./src/resources/radar/email/routing/summary.ts">SummaryDMARCResponse</a></code>
- <code><a href="./src/resources/radar/email/routing/summary.ts">SummaryEncryptedResponse</a></code>
- <code><a href="./src/resources/radar/email/routing/summary.ts">SummaryIPVersionResponse</a></code>
- <code><a href="./src/resources/radar/email/routing/summary.ts">SummarySPFResponse</a></code>

Methods:

- <code title="get /radar/email/routing/summary/arc">client.radar.email.routing.summary.<a href="./src/resources/radar/email/routing/summary.ts">arc</a>({ ...params }) -> SummaryARCResponse</code>
- <code title="get /radar/email/routing/summary/dkim">client.radar.email.routing.summary.<a href="./src/resources/radar/email/routing/summary.ts">dkim</a>({ ...params }) -> SummaryDKIMResponse</code>
- <code title="get /radar/email/routing/summary/dmarc">client.radar.email.routing.summary.<a href="./src/resources/radar/email/routing/summary.ts">dmarc</a>({ ...params }) -> SummaryDMARCResponse</code>
- <code title="get /radar/email/routing/summary/encrypted">client.radar.email.routing.summary.<a href="./src/resources/radar/email/routing/summary.ts">encrypted</a>({ ...params }) -> SummaryEncryptedResponse</code>
- <code title="get /radar/email/routing/summary/ip_version">client.radar.email.routing.summary.<a href="./src/resources/radar/email/routing/summary.ts">ipVersion</a>({ ...params }) -> SummaryIPVersionResponse</code>
- <code title="get /radar/email/routing/summary/spf">client.radar.email.routing.summary.<a href="./src/resources/radar/email/routing/summary.ts">spf</a>({ ...params }) -> SummarySPFResponse</code>

#### TimeseriesGroups

Types:

- <code><a href="./src/resources/radar/email/routing/timeseries-groups.ts">TimeseriesGroupARCResponse</a></code>
- <code><a href="./src/resources/radar/email/routing/timeseries-groups.ts">TimeseriesGroupDKIMResponse</a></code>
- <code><a href="./src/resources/radar/email/routing/timeseries-groups.ts">TimeseriesGroupDMARCResponse</a></code>
- <code><a href="./src/resources/radar/email/routing/timeseries-groups.ts">TimeseriesGroupEncryptedResponse</a></code>
- <code><a href="./src/resources/radar/email/routing/timeseries-groups.ts">TimeseriesGroupIPVersionResponse</a></code>
- <code><a href="./src/resources/radar/email/routing/timeseries-groups.ts">TimeseriesGroupSPFResponse</a></code>

Methods:

- <code title="get /radar/email/routing/timeseries_groups/arc">client.radar.email.routing.timeseriesGroups.<a href="./src/resources/radar/email/routing/timeseries-groups.ts">arc</a>({ ...params }) -> TimeseriesGroupARCResponse</code>
- <code title="get /radar/email/routing/timeseries_groups/dkim">client.radar.email.routing.timeseriesGroups.<a href="./src/resources/radar/email/routing/timeseries-groups.ts">dkim</a>({ ...params }) -> TimeseriesGroupDKIMResponse</code>
- <code title="get /radar/email/routing/timeseries_groups/dmarc">client.radar.email.routing.timeseriesGroups.<a href="./src/resources/radar/email/routing/timeseries-groups.ts">dmarc</a>({ ...params }) -> TimeseriesGroupDMARCResponse</code>
- <code title="get /radar/email/routing/timeseries_groups/encrypted">client.radar.email.routing.timeseriesGroups.<a href="./src/resources/radar/email/routing/timeseries-groups.ts">encrypted</a>({ ...params }) -> TimeseriesGroupEncryptedResponse</code>
- <code title="get /radar/email/routing/timeseries_groups/ip_version">client.radar.email.routing.timeseriesGroups.<a href="./src/resources/radar/email/routing/timeseries-groups.ts">ipVersion</a>({ ...params }) -> TimeseriesGroupIPVersionResponse</code>
- <code title="get /radar/email/routing/timeseries_groups/spf">client.radar.email.routing.timeseriesGroups.<a href="./src/resources/radar/email/routing/timeseries-groups.ts">spf</a>({ ...params }) -> TimeseriesGroupSPFResponse</code>

### Security

#### Top

##### Tlds

Types:

- <code><a href="./src/resources/radar/email/security/top/tlds/tlds.ts">TldGetResponse</a></code>

Methods:

- <code title="get /radar/email/security/top/tlds">client.radar.email.security.top.tlds.<a href="./src/resources/radar/email/security/top/tlds/tlds.ts">get</a>({ ...params }) -> TldGetResponse</code>

###### Malicious

Types:

- <code><a href="./src/resources/radar/email/security/top/tlds/malicious.ts">MaliciousGetResponse</a></code>

Methods:

- <code title="get /radar/email/security/top/tlds/malicious/{malicious}">client.radar.email.security.top.tlds.malicious.<a href="./src/resources/radar/email/security/top/tlds/malicious.ts">get</a>(malicious, { ...params }) -> MaliciousGetResponse</code>

###### Spam

Types:

- <code><a href="./src/resources/radar/email/security/top/tlds/spam.ts">SpamGetResponse</a></code>

Methods:

- <code title="get /radar/email/security/top/tlds/spam/{spam}">client.radar.email.security.top.tlds.spam.<a href="./src/resources/radar/email/security/top/tlds/spam.ts">get</a>(spam, { ...params }) -> SpamGetResponse</code>

###### Spoof

Types:

- <code><a href="./src/resources/radar/email/security/top/tlds/spoof.ts">SpoofGetResponse</a></code>

Methods:

- <code title="get /radar/email/security/top/tlds/spoof/{spoof}">client.radar.email.security.top.tlds.spoof.<a href="./src/resources/radar/email/security/top/tlds/spoof.ts">get</a>(spoof, { ...params }) -> SpoofGetResponse</code>

#### Summary

Types:

- <code><a href="./src/resources/radar/email/security/summary.ts">SummaryARCResponse</a></code>
- <code><a href="./src/resources/radar/email/security/summary.ts">SummaryDKIMResponse</a></code>
- <code><a href="./src/resources/radar/email/security/summary.ts">SummaryDMARCResponse</a></code>
- <code><a href="./src/resources/radar/email/security/summary.ts">SummaryMaliciousResponse</a></code>
- <code><a href="./src/resources/radar/email/security/summary.ts">SummarySpamResponse</a></code>
- <code><a href="./src/resources/radar/email/security/summary.ts">SummarySPFResponse</a></code>
- <code><a href="./src/resources/radar/email/security/summary.ts">SummarySpoofResponse</a></code>
- <code><a href="./src/resources/radar/email/security/summary.ts">SummaryThreatCategoryResponse</a></code>
- <code><a href="./src/resources/radar/email/security/summary.ts">SummaryTLSVersionResponse</a></code>

Methods:

- <code title="get /radar/email/security/summary/arc">client.radar.email.security.summary.<a href="./src/resources/radar/email/security/summary.ts">arc</a>({ ...params }) -> SummaryARCResponse</code>
- <code title="get /radar/email/security/summary/dkim">client.radar.email.security.summary.<a href="./src/resources/radar/email/security/summary.ts">dkim</a>({ ...params }) -> SummaryDKIMResponse</code>
- <code title="get /radar/email/security/summary/dmarc">client.radar.email.security.summary.<a href="./src/resources/radar/email/security/summary.ts">dmarc</a>({ ...params }) -> SummaryDMARCResponse</code>
- <code title="get /radar/email/security/summary/malicious">client.radar.email.security.summary.<a href="./src/resources/radar/email/security/summary.ts">malicious</a>({ ...params }) -> SummaryMaliciousResponse</code>
- <code title="get /radar/email/security/summary/spam">client.radar.email.security.summary.<a href="./src/resources/radar/email/security/summary.ts">spam</a>({ ...params }) -> SummarySpamResponse</code>
- <code title="get /radar/email/security/summary/spf">client.radar.email.security.summary.<a href="./src/resources/radar/email/security/summary.ts">spf</a>({ ...params }) -> SummarySPFResponse</code>
- <code title="get /radar/email/security/summary/spoof">client.radar.email.security.summary.<a href="./src/resources/radar/email/security/summary.ts">spoof</a>({ ...params }) -> SummarySpoofResponse</code>
- <code title="get /radar/email/security/summary/threat_category">client.radar.email.security.summary.<a href="./src/resources/radar/email/security/summary.ts">threatCategory</a>({ ...params }) -> SummaryThreatCategoryResponse</code>
- <code title="get /radar/email/security/summary/tls_version">client.radar.email.security.summary.<a href="./src/resources/radar/email/security/summary.ts">tlsVersion</a>({ ...params }) -> SummaryTLSVersionResponse</code>

#### TimeseriesGroups

Types:

- <code><a href="./src/resources/radar/email/security/timeseries-groups.ts">TimeseriesGroupARCResponse</a></code>
- <code><a href="./src/resources/radar/email/security/timeseries-groups.ts">TimeseriesGroupDKIMResponse</a></code>
- <code><a href="./src/resources/radar/email/security/timeseries-groups.ts">TimeseriesGroupDMARCResponse</a></code>
- <code><a href="./src/resources/radar/email/security/timeseries-groups.ts">TimeseriesGroupMaliciousResponse</a></code>
- <code><a href="./src/resources/radar/email/security/timeseries-groups.ts">TimeseriesGroupSpamResponse</a></code>
- <code><a href="./src/resources/radar/email/security/timeseries-groups.ts">TimeseriesGroupSPFResponse</a></code>
- <code><a href="./src/resources/radar/email/security/timeseries-groups.ts">TimeseriesGroupSpoofResponse</a></code>
- <code><a href="./src/resources/radar/email/security/timeseries-groups.ts">TimeseriesGroupThreatCategoryResponse</a></code>
- <code><a href="./src/resources/radar/email/security/timeseries-groups.ts">TimeseriesGroupTLSVersionResponse</a></code>

Methods:

- <code title="get /radar/email/security/timeseries_groups/arc">client.radar.email.security.timeseriesGroups.<a href="./src/resources/radar/email/security/timeseries-groups.ts">arc</a>({ ...params }) -> TimeseriesGroupARCResponse</code>
- <code title="get /radar/email/security/timeseries_groups/dkim">client.radar.email.security.timeseriesGroups.<a href="./src/resources/radar/email/security/timeseries-groups.ts">dkim</a>({ ...params }) -> TimeseriesGroupDKIMResponse</code>
- <code title="get /radar/email/security/timeseries_groups/dmarc">client.radar.email.security.timeseriesGroups.<a href="./src/resources/radar/email/security/timeseries-groups.ts">dmarc</a>({ ...params }) -> TimeseriesGroupDMARCResponse</code>
- <code title="get /radar/email/security/timeseries_groups/malicious">client.radar.email.security.timeseriesGroups.<a href="./src/resources/radar/email/security/timeseries-groups.ts">malicious</a>({ ...params }) -> TimeseriesGroupMaliciousResponse</code>
- <code title="get /radar/email/security/timeseries_groups/spam">client.radar.email.security.timeseriesGroups.<a href="./src/resources/radar/email/security/timeseries-groups.ts">spam</a>({ ...params }) -> TimeseriesGroupSpamResponse</code>
- <code title="get /radar/email/security/timeseries_groups/spf">client.radar.email.security.timeseriesGroups.<a href="./src/resources/radar/email/security/timeseries-groups.ts">spf</a>({ ...params }) -> TimeseriesGroupSPFResponse</code>
- <code title="get /radar/email/security/timeseries_groups/spoof">client.radar.email.security.timeseriesGroups.<a href="./src/resources/radar/email/security/timeseries-groups.ts">spoof</a>({ ...params }) -> TimeseriesGroupSpoofResponse</code>
- <code title="get /radar/email/security/timeseries_groups/threat_category">client.radar.email.security.timeseriesGroups.<a href="./src/resources/radar/email/security/timeseries-groups.ts">threatCategory</a>({ ...params }) -> TimeseriesGroupThreatCategoryResponse</code>
- <code title="get /radar/email/security/timeseries_groups/tls_version">client.radar.email.security.timeseriesGroups.<a href="./src/resources/radar/email/security/timeseries-groups.ts">tlsVersion</a>({ ...params }) -> TimeseriesGroupTLSVersionResponse</code>

## Attacks

### Layer3

Types:

- <code><a href="./src/resources/radar/attacks/layer3/layer3.ts">Layer3TimeseriesResponse</a></code>

Methods:

- <code title="get /radar/attacks/layer3/timeseries">client.radar.attacks.layer3.<a href="./src/resources/radar/attacks/layer3/layer3.ts">timeseries</a>({ ...params }) -> Layer3TimeseriesResponse</code>

#### Summary

Types:

- <code><a href="./src/resources/radar/attacks/layer3/summary.ts">SummaryBitrateResponse</a></code>
- <code><a href="./src/resources/radar/attacks/layer3/summary.ts">SummaryDurationResponse</a></code>
- <code><a href="./src/resources/radar/attacks/layer3/summary.ts">SummaryIndustryResponse</a></code>
- <code><a href="./src/resources/radar/attacks/layer3/summary.ts">SummaryIPVersionResponse</a></code>
- <code><a href="./src/resources/radar/attacks/layer3/summary.ts">SummaryProtocolResponse</a></code>
- <code><a href="./src/resources/radar/attacks/layer3/summary.ts">SummaryVectorResponse</a></code>
- <code><a href="./src/resources/radar/attacks/layer3/summary.ts">SummaryVerticalResponse</a></code>

Methods:

- <code title="get /radar/attacks/layer3/summary/bitrate">client.radar.attacks.layer3.summary.<a href="./src/resources/radar/attacks/layer3/summary.ts">bitrate</a>({ ...params }) -> SummaryBitrateResponse</code>
- <code title="get /radar/attacks/layer3/summary/duration">client.radar.attacks.layer3.summary.<a href="./src/resources/radar/attacks/layer3/summary.ts">duration</a>({ ...params }) -> SummaryDurationResponse</code>
- <code title="get /radar/attacks/layer3/summary/industry">client.radar.attacks.layer3.summary.<a href="./src/resources/radar/attacks/layer3/summary.ts">industry</a>({ ...params }) -> SummaryIndustryResponse</code>
- <code title="get /radar/attacks/layer3/summary/ip_version">client.radar.attacks.layer3.summary.<a href="./src/resources/radar/attacks/layer3/summary.ts">ipVersion</a>({ ...params }) -> SummaryIPVersionResponse</code>
- <code title="get /radar/attacks/layer3/summary/protocol">client.radar.attacks.layer3.summary.<a href="./src/resources/radar/attacks/layer3/summary.ts">protocol</a>({ ...params }) -> SummaryProtocolResponse</code>
- <code title="get /radar/attacks/layer3/summary/vector">client.radar.attacks.layer3.summary.<a href="./src/resources/radar/attacks/layer3/summary.ts">vector</a>({ ...params }) -> SummaryVectorResponse</code>
- <code title="get /radar/attacks/layer3/summary/vertical">client.radar.attacks.layer3.summary.<a href="./src/resources/radar/attacks/layer3/summary.ts">vertical</a>({ ...params }) -> SummaryVerticalResponse</code>

#### TimeseriesGroups

Types:

- <code><a href="./src/resources/radar/attacks/layer3/timeseries-groups.ts">TimeseriesGroupBitrateResponse</a></code>
- <code><a href="./src/resources/radar/attacks/layer3/timeseries-groups.ts">TimeseriesGroupDurationResponse</a></code>
- <code><a href="./src/resources/radar/attacks/layer3/timeseries-groups.ts">TimeseriesGroupIndustryResponse</a></code>
- <code><a href="./src/resources/radar/attacks/layer3/timeseries-groups.ts">TimeseriesGroupIPVersionResponse</a></code>
- <code><a href="./src/resources/radar/attacks/layer3/timeseries-groups.ts">TimeseriesGroupProtocolResponse</a></code>
- <code><a href="./src/resources/radar/attacks/layer3/timeseries-groups.ts">TimeseriesGroupVectorResponse</a></code>
- <code><a href="./src/resources/radar/attacks/layer3/timeseries-groups.ts">TimeseriesGroupVerticalResponse</a></code>

Methods:

- <code title="get /radar/attacks/layer3/timeseries_groups/bitrate">client.radar.attacks.layer3.timeseriesGroups.<a href="./src/resources/radar/attacks/layer3/timeseries-groups.ts">bitrate</a>({ ...params }) -> TimeseriesGroupBitrateResponse</code>
- <code title="get /radar/attacks/layer3/timeseries_groups/duration">client.radar.attacks.layer3.timeseriesGroups.<a href="./src/resources/radar/attacks/layer3/timeseries-groups.ts">duration</a>({ ...params }) -> TimeseriesGroupDurationResponse</code>
- <code title="get /radar/attacks/layer3/timeseries_groups/industry">client.radar.attacks.layer3.timeseriesGroups.<a href="./src/resources/radar/attacks/layer3/timeseries-groups.ts">industry</a>({ ...params }) -> TimeseriesGroupIndustryResponse</code>
- <code title="get /radar/attacks/layer3/timeseries_groups/ip_version">client.radar.attacks.layer3.timeseriesGroups.<a href="./src/resources/radar/attacks/layer3/timeseries-groups.ts">ipVersion</a>({ ...params }) -> TimeseriesGroupIPVersionResponse</code>
- <code title="get /radar/attacks/layer3/timeseries_groups/protocol">client.radar.attacks.layer3.timeseriesGroups.<a href="./src/resources/radar/attacks/layer3/timeseries-groups.ts">protocol</a>({ ...params }) -> TimeseriesGroupProtocolResponse</code>
- <code title="get /radar/attacks/layer3/timeseries_groups/vector">client.radar.attacks.layer3.timeseriesGroups.<a href="./src/resources/radar/attacks/layer3/timeseries-groups.ts">vector</a>({ ...params }) -> TimeseriesGroupVectorResponse</code>
- <code title="get /radar/attacks/layer3/timeseries_groups/vertical">client.radar.attacks.layer3.timeseriesGroups.<a href="./src/resources/radar/attacks/layer3/timeseries-groups.ts">vertical</a>({ ...params }) -> TimeseriesGroupVerticalResponse</code>

#### Top

Types:

- <code><a href="./src/resources/radar/attacks/layer3/top/top.ts">TopAttacksResponse</a></code>
- <code><a href="./src/resources/radar/attacks/layer3/top/top.ts">TopIndustryResponse</a></code>
- <code><a href="./src/resources/radar/attacks/layer3/top/top.ts">TopVerticalResponse</a></code>

Methods:

- <code title="get /radar/attacks/layer3/top/attacks">client.radar.attacks.layer3.top.<a href="./src/resources/radar/attacks/layer3/top/top.ts">attacks</a>({ ...params }) -> TopAttacksResponse</code>
- <code title="get /radar/attacks/layer3/top/industry">client.radar.attacks.layer3.top.<a href="./src/resources/radar/attacks/layer3/top/top.ts">industry</a>({ ...params }) -> TopIndustryResponse</code>
- <code title="get /radar/attacks/layer3/top/vertical">client.radar.attacks.layer3.top.<a href="./src/resources/radar/attacks/layer3/top/top.ts">vertical</a>({ ...params }) -> TopVerticalResponse</code>

##### Locations

Types:

- <code><a href="./src/resources/radar/attacks/layer3/top/locations.ts">LocationOriginResponse</a></code>
- <code><a href="./src/resources/radar/attacks/layer3/top/locations.ts">LocationTargetResponse</a></code>

Methods:

- <code title="get /radar/attacks/layer3/top/locations/origin">client.radar.attacks.layer3.top.locations.<a href="./src/resources/radar/attacks/layer3/top/locations.ts">origin</a>({ ...params }) -> LocationOriginResponse</code>
- <code title="get /radar/attacks/layer3/top/locations/target">client.radar.attacks.layer3.top.locations.<a href="./src/resources/radar/attacks/layer3/top/locations.ts">target</a>({ ...params }) -> LocationTargetResponse</code>

### Layer7

Types:

- <code><a href="./src/resources/radar/attacks/layer7/layer7.ts">Layer7TimeseriesResponse</a></code>

Methods:

- <code title="get /radar/attacks/layer7/timeseries">client.radar.attacks.layer7.<a href="./src/resources/radar/attacks/layer7/layer7.ts">timeseries</a>({ ...params }) -> Layer7TimeseriesResponse</code>

#### Summary

Types:

- <code><a href="./src/resources/radar/attacks/layer7/summary.ts">SummaryHTTPMethodResponse</a></code>
- <code><a href="./src/resources/radar/attacks/layer7/summary.ts">SummaryHTTPVersionResponse</a></code>
- <code><a href="./src/resources/radar/attacks/layer7/summary.ts">SummaryIndustryResponse</a></code>
- <code><a href="./src/resources/radar/attacks/layer7/summary.ts">SummaryIPVersionResponse</a></code>
- <code><a href="./src/resources/radar/attacks/layer7/summary.ts">SummaryManagedRulesResponse</a></code>
- <code><a href="./src/resources/radar/attacks/layer7/summary.ts">SummaryMitigationProductResponse</a></code>
- <code><a href="./src/resources/radar/attacks/layer7/summary.ts">SummaryVerticalResponse</a></code>

Methods:

- <code title="get /radar/attacks/layer7/summary/http_method">client.radar.attacks.layer7.summary.<a href="./src/resources/radar/attacks/layer7/summary.ts">httpMethod</a>({ ...params }) -> SummaryHTTPMethodResponse</code>
- <code title="get /radar/attacks/layer7/summary/http_version">client.radar.attacks.layer7.summary.<a href="./src/resources/radar/attacks/layer7/summary.ts">httpVersion</a>({ ...params }) -> SummaryHTTPVersionResponse</code>
- <code title="get /radar/attacks/layer7/summary/industry">client.radar.attacks.layer7.summary.<a href="./src/resources/radar/attacks/layer7/summary.ts">industry</a>({ ...params }) -> SummaryIndustryResponse</code>
- <code title="get /radar/attacks/layer7/summary/ip_version">client.radar.attacks.layer7.summary.<a href="./src/resources/radar/attacks/layer7/summary.ts">ipVersion</a>({ ...params }) -> SummaryIPVersionResponse</code>
- <code title="get /radar/attacks/layer7/summary/managed_rules">client.radar.attacks.layer7.summary.<a href="./src/resources/radar/attacks/layer7/summary.ts">managedRules</a>({ ...params }) -> SummaryManagedRulesResponse</code>
- <code title="get /radar/attacks/layer7/summary/mitigation_product">client.radar.attacks.layer7.summary.<a href="./src/resources/radar/attacks/layer7/summary.ts">mitigationProduct</a>({ ...params }) -> SummaryMitigationProductResponse</code>
- <code title="get /radar/attacks/layer7/summary/vertical">client.radar.attacks.layer7.summary.<a href="./src/resources/radar/attacks/layer7/summary.ts">vertical</a>({ ...params }) -> SummaryVerticalResponse</code>

#### TimeseriesGroups

Types:

- <code><a href="./src/resources/radar/attacks/layer7/timeseries-groups.ts">TimeseriesGroupHTTPMethodResponse</a></code>
- <code><a href="./src/resources/radar/attacks/layer7/timeseries-groups.ts">TimeseriesGroupHTTPVersionResponse</a></code>
- <code><a href="./src/resources/radar/attacks/layer7/timeseries-groups.ts">TimeseriesGroupIndustryResponse</a></code>
- <code><a href="./src/resources/radar/attacks/layer7/timeseries-groups.ts">TimeseriesGroupIPVersionResponse</a></code>
- <code><a href="./src/resources/radar/attacks/layer7/timeseries-groups.ts">TimeseriesGroupManagedRulesResponse</a></code>
- <code><a href="./src/resources/radar/attacks/layer7/timeseries-groups.ts">TimeseriesGroupMitigationProductResponse</a></code>
- <code><a href="./src/resources/radar/attacks/layer7/timeseries-groups.ts">TimeseriesGroupVerticalResponse</a></code>

Methods:

- <code title="get /radar/attacks/layer7/timeseries_groups/http_method">client.radar.attacks.layer7.timeseriesGroups.<a href="./src/resources/radar/attacks/layer7/timeseries-groups.ts">httpMethod</a>({ ...params }) -> TimeseriesGroupHTTPMethodResponse</code>
- <code title="get /radar/attacks/layer7/timeseries_groups/http_version">client.radar.attacks.layer7.timeseriesGroups.<a href="./src/resources/radar/attacks/layer7/timeseries-groups.ts">httpVersion</a>({ ...params }) -> TimeseriesGroupHTTPVersionResponse</code>
- <code title="get /radar/attacks/layer7/timeseries_groups/industry">client.radar.attacks.layer7.timeseriesGroups.<a href="./src/resources/radar/attacks/layer7/timeseries-groups.ts">industry</a>({ ...params }) -> TimeseriesGroupIndustryResponse</code>
- <code title="get /radar/attacks/layer7/timeseries_groups/ip_version">client.radar.attacks.layer7.timeseriesGroups.<a href="./src/resources/radar/attacks/layer7/timeseries-groups.ts">ipVersion</a>({ ...params }) -> TimeseriesGroupIPVersionResponse</code>
- <code title="get /radar/attacks/layer7/timeseries_groups/managed_rules">client.radar.attacks.layer7.timeseriesGroups.<a href="./src/resources/radar/attacks/layer7/timeseries-groups.ts">managedRules</a>({ ...params }) -> TimeseriesGroupManagedRulesResponse</code>
- <code title="get /radar/attacks/layer7/timeseries_groups/mitigation_product">client.radar.attacks.layer7.timeseriesGroups.<a href="./src/resources/radar/attacks/layer7/timeseries-groups.ts">mitigationProduct</a>({ ...params }) -> TimeseriesGroupMitigationProductResponse</code>
- <code title="get /radar/attacks/layer7/timeseries_groups/vertical">client.radar.attacks.layer7.timeseriesGroups.<a href="./src/resources/radar/attacks/layer7/timeseries-groups.ts">vertical</a>({ ...params }) -> TimeseriesGroupVerticalResponse</code>

#### Top

Types:

- <code><a href="./src/resources/radar/attacks/layer7/top/top.ts">TopAttacksResponse</a></code>
- <code><a href="./src/resources/radar/attacks/layer7/top/top.ts">TopIndustryResponse</a></code>
- <code><a href="./src/resources/radar/attacks/layer7/top/top.ts">TopVerticalResponse</a></code>

Methods:

- <code title="get /radar/attacks/layer7/top/attacks">client.radar.attacks.layer7.top.<a href="./src/resources/radar/attacks/layer7/top/top.ts">attacks</a>({ ...params }) -> TopAttacksResponse</code>
- <code title="get /radar/attacks/layer7/top/industry">client.radar.attacks.layer7.top.<a href="./src/resources/radar/attacks/layer7/top/top.ts">industry</a>({ ...params }) -> TopIndustryResponse</code>
- <code title="get /radar/attacks/layer7/top/vertical">client.radar.attacks.layer7.top.<a href="./src/resources/radar/attacks/layer7/top/top.ts">vertical</a>({ ...params }) -> TopVerticalResponse</code>

##### Locations

Types:

- <code><a href="./src/resources/radar/attacks/layer7/top/locations.ts">LocationOriginResponse</a></code>
- <code><a href="./src/resources/radar/attacks/layer7/top/locations.ts">LocationTargetResponse</a></code>

Methods:

- <code title="get /radar/attacks/layer7/top/locations/origin">client.radar.attacks.layer7.top.locations.<a href="./src/resources/radar/attacks/layer7/top/locations.ts">origin</a>({ ...params }) -> LocationOriginResponse</code>
- <code title="get /radar/attacks/layer7/top/locations/target">client.radar.attacks.layer7.top.locations.<a href="./src/resources/radar/attacks/layer7/top/locations.ts">target</a>({ ...params }) -> LocationTargetResponse</code>

##### Ases

Types:

- <code><a href="./src/resources/radar/attacks/layer7/top/ases.ts">AseOriginResponse</a></code>

Methods:

- <code title="get /radar/attacks/layer7/top/ases/origin">client.radar.attacks.layer7.top.ases.<a href="./src/resources/radar/attacks/layer7/top/ases.ts">origin</a>({ ...params }) -> AseOriginResponse</code>

## Entities

Types:

- <code><a href="./src/resources/radar/entities/entities.ts">EntityGetResponse</a></code>

Methods:

- <code title="get /radar/entities/ip">client.radar.entities.<a href="./src/resources/radar/entities/entities.ts">get</a>({ ...params }) -> EntityGetResponse</code>

### ASNs

Types:

- <code><a href="./src/resources/radar/entities/asns.ts">ASNListResponse</a></code>
- <code><a href="./src/resources/radar/entities/asns.ts">ASNGetResponse</a></code>
- <code><a href="./src/resources/radar/entities/asns.ts">ASNIPResponse</a></code>
- <code><a href="./src/resources/radar/entities/asns.ts">ASNRelResponse</a></code>

Methods:

- <code title="get /radar/entities/asns">client.radar.entities.asns.<a href="./src/resources/radar/entities/asns.ts">list</a>({ ...params }) -> ASNListResponse</code>
- <code title="get /radar/entities/asns/{asn}">client.radar.entities.asns.<a href="./src/resources/radar/entities/asns.ts">get</a>(asn, { ...params }) -> ASNGetResponse</code>
- <code title="get /radar/entities/asns/ip">client.radar.entities.asns.<a href="./src/resources/radar/entities/asns.ts">ip</a>({ ...params }) -> ASNIPResponse</code>
- <code title="get /radar/entities/asns/{asn}/rel">client.radar.entities.asns.<a href="./src/resources/radar/entities/asns.ts">rel</a>(asn, { ...params }) -> ASNRelResponse</code>

### Locations

Types:

- <code><a href="./src/resources/radar/entities/locations.ts">LocationListResponse</a></code>
- <code><a href="./src/resources/radar/entities/locations.ts">LocationGetResponse</a></code>

Methods:

- <code title="get /radar/entities/locations">client.radar.entities.locations.<a href="./src/resources/radar/entities/locations.ts">list</a>({ ...params }) -> LocationListResponse</code>
- <code title="get /radar/entities/locations/{location}">client.radar.entities.locations.<a href="./src/resources/radar/entities/locations.ts">get</a>(location, { ...params }) -> LocationGetResponse</code>

## HTTP

Types:

- <code><a href="./src/resources/radar/http/http.ts">HTTPTimeseriesResponse</a></code>

Methods:

- <code title="get /radar/http/timeseries">client.radar.http.<a href="./src/resources/radar/http/http.ts">timeseries</a>({ ...params }) -> HTTPTimeseriesResponse</code>

### Locations

Types:

- <code><a href="./src/resources/radar/http/locations/locations.ts">LocationGetResponse</a></code>

Methods:

- <code title="get /radar/http/top/locations">client.radar.http.locations.<a href="./src/resources/radar/http/locations/locations.ts">get</a>({ ...params }) -> LocationGetResponse</code>

#### BotClass

Types:

- <code><a href="./src/resources/radar/http/locations/bot-class.ts">BotClassGetResponse</a></code>

Methods:

- <code title="get /radar/http/top/locations/bot_class/{bot_class}">client.radar.http.locations.botClass.<a href="./src/resources/radar/http/locations/bot-class.ts">get</a>(botClass, { ...params }) -> BotClassGetResponse</code>

#### DeviceType

Types:

- <code><a href="./src/resources/radar/http/locations/device-type.ts">DeviceTypeGetResponse</a></code>

Methods:

- <code title="get /radar/http/top/locations/device_type/{device_type}">client.radar.http.locations.deviceType.<a href="./src/resources/radar/http/locations/device-type.ts">get</a>(deviceType, { ...params }) -> DeviceTypeGetResponse</code>

#### HTTPProtocol

Types:

- <code><a href="./src/resources/radar/http/locations/http-protocol.ts">HTTPProtocolGetResponse</a></code>

Methods:

- <code title="get /radar/http/top/locations/http_protocol/{http_protocol}">client.radar.http.locations.httpProtocol.<a href="./src/resources/radar/http/locations/http-protocol.ts">get</a>(httpProtocol, { ...params }) -> HTTPProtocolGetResponse</code>

#### HTTPMethod

Types:

- <code><a href="./src/resources/radar/http/locations/http-method.ts">HTTPMethodGetResponse</a></code>

Methods:

- <code title="get /radar/http/top/locations/http_version/{http_version}">client.radar.http.locations.httpMethod.<a href="./src/resources/radar/http/locations/http-method.ts">get</a>(httpVersion, { ...params }) -> HTTPMethodGetResponse</code>

#### IPVersion

Types:

- <code><a href="./src/resources/radar/http/locations/ip-version.ts">IPVersionGetResponse</a></code>

Methods:

- <code title="get /radar/http/top/locations/ip_version/{ip_version}">client.radar.http.locations.ipVersion.<a href="./src/resources/radar/http/locations/ip-version.ts">get</a>(ipVersion, { ...params }) -> IPVersionGetResponse</code>

#### OS

Types:

- <code><a href="./src/resources/radar/http/locations/os.ts">OSGetResponse</a></code>

Methods:

- <code title="get /radar/http/top/locations/os/{os}">client.radar.http.locations.os.<a href="./src/resources/radar/http/locations/os.ts">get</a>(os, { ...params }) -> OSGetResponse</code>

#### TLSVersion

Types:

- <code><a href="./src/resources/radar/http/locations/tls-version.ts">TLSVersionGetResponse</a></code>

Methods:

- <code title="get /radar/http/top/locations/tls_version/{tls_version}">client.radar.http.locations.tlsVersion.<a href="./src/resources/radar/http/locations/tls-version.ts">get</a>(tlsVersion, { ...params }) -> TLSVersionGetResponse</code>

#### BrowserFamily

Types:

- <code><a href="./src/resources/radar/http/locations/browser-family.ts">BrowserFamilyGetResponse</a></code>

Methods:

- <code title="get /radar/http/top/locations/browser_family/{browser_family}">client.radar.http.locations.browserFamily.<a href="./src/resources/radar/http/locations/browser-family.ts">get</a>(browserFamily, { ...params }) -> BrowserFamilyGetResponse</code>

### Ases

Types:

- <code><a href="./src/resources/radar/http/ases/ases.ts">AseGetResponse</a></code>

Methods:

- <code title="get /radar/http/top/ases">client.radar.http.ases.<a href="./src/resources/radar/http/ases/ases.ts">get</a>({ ...params }) -> AseGetResponse</code>

#### BotClass

Types:

- <code><a href="./src/resources/radar/http/ases/bot-class.ts">BotClassGetResponse</a></code>

Methods:

- <code title="get /radar/http/top/ases/bot_class/{bot_class}">client.radar.http.ases.botClass.<a href="./src/resources/radar/http/ases/bot-class.ts">get</a>(botClass, { ...params }) -> BotClassGetResponse</code>

#### DeviceType

Types:

- <code><a href="./src/resources/radar/http/ases/device-type.ts">DeviceTypeGetResponse</a></code>

Methods:

- <code title="get /radar/http/top/ases/device_type/{device_type}">client.radar.http.ases.deviceType.<a href="./src/resources/radar/http/ases/device-type.ts">get</a>(deviceType, { ...params }) -> DeviceTypeGetResponse</code>

#### HTTPProtocol

Types:

- <code><a href="./src/resources/radar/http/ases/http-protocol.ts">HTTPProtocolGetResponse</a></code>

Methods:

- <code title="get /radar/http/top/ases/http_protocol/{http_protocol}">client.radar.http.ases.httpProtocol.<a href="./src/resources/radar/http/ases/http-protocol.ts">get</a>(httpProtocol, { ...params }) -> HTTPProtocolGetResponse</code>

#### HTTPMethod

Types:

- <code><a href="./src/resources/radar/http/ases/http-method.ts">HTTPMethodGetResponse</a></code>

Methods:

- <code title="get /radar/http/top/ases/http_version/{http_version}">client.radar.http.ases.httpMethod.<a href="./src/resources/radar/http/ases/http-method.ts">get</a>(httpVersion, { ...params }) -> HTTPMethodGetResponse</code>

#### IPVersion

Types:

- <code><a href="./src/resources/radar/http/ases/ip-version.ts">IPVersionGetResponse</a></code>

Methods:

- <code title="get /radar/http/top/ases/ip_version/{ip_version}">client.radar.http.ases.ipVersion.<a href="./src/resources/radar/http/ases/ip-version.ts">get</a>(ipVersion, { ...params }) -> IPVersionGetResponse</code>

#### OS

Types:

- <code><a href="./src/resources/radar/http/ases/os.ts">OSGetResponse</a></code>

Methods:

- <code title="get /radar/http/top/ases/os/{os}">client.radar.http.ases.os.<a href="./src/resources/radar/http/ases/os.ts">get</a>(os, { ...params }) -> OSGetResponse</code>

#### TLSVersion

Types:

- <code><a href="./src/resources/radar/http/ases/tls-version.ts">TLSVersionGetResponse</a></code>

Methods:

- <code title="get /radar/http/top/ases/tls_version/{tls_version}">client.radar.http.ases.tlsVersion.<a href="./src/resources/radar/http/ases/tls-version.ts">get</a>(tlsVersion, { ...params }) -> TLSVersionGetResponse</code>

#### BrowserFamily

Types:

- <code><a href="./src/resources/radar/http/ases/browser-family.ts">BrowserFamilyGetResponse</a></code>

Methods:

- <code title="get /radar/http/top/ases/browser_family/{browser_family}">client.radar.http.ases.browserFamily.<a href="./src/resources/radar/http/ases/browser-family.ts">get</a>(browserFamily, { ...params }) -> BrowserFamilyGetResponse</code>

### Summary

Types:

- <code><a href="./src/resources/radar/http/summary.ts">SummaryBotClassResponse</a></code>
- <code><a href="./src/resources/radar/http/summary.ts">SummaryDeviceTypeResponse</a></code>
- <code><a href="./src/resources/radar/http/summary.ts">SummaryHTTPProtocolResponse</a></code>
- <code><a href="./src/resources/radar/http/summary.ts">SummaryHTTPVersionResponse</a></code>
- <code><a href="./src/resources/radar/http/summary.ts">SummaryIPVersionResponse</a></code>
- <code><a href="./src/resources/radar/http/summary.ts">SummaryOSResponse</a></code>
- <code><a href="./src/resources/radar/http/summary.ts">SummaryPostQuantumResponse</a></code>
- <code><a href="./src/resources/radar/http/summary.ts">SummaryTLSVersionResponse</a></code>

Methods:

- <code title="get /radar/http/summary/bot_class">client.radar.http.summary.<a href="./src/resources/radar/http/summary.ts">botClass</a>({ ...params }) -> SummaryBotClassResponse</code>
- <code title="get /radar/http/summary/device_type">client.radar.http.summary.<a href="./src/resources/radar/http/summary.ts">deviceType</a>({ ...params }) -> SummaryDeviceTypeResponse</code>
- <code title="get /radar/http/summary/http_protocol">client.radar.http.summary.<a href="./src/resources/radar/http/summary.ts">httpProtocol</a>({ ...params }) -> SummaryHTTPProtocolResponse</code>
- <code title="get /radar/http/summary/http_version">client.radar.http.summary.<a href="./src/resources/radar/http/summary.ts">httpVersion</a>({ ...params }) -> SummaryHTTPVersionResponse</code>
- <code title="get /radar/http/summary/ip_version">client.radar.http.summary.<a href="./src/resources/radar/http/summary.ts">ipVersion</a>({ ...params }) -> SummaryIPVersionResponse</code>
- <code title="get /radar/http/summary/os">client.radar.http.summary.<a href="./src/resources/radar/http/summary.ts">os</a>({ ...params }) -> SummaryOSResponse</code>
- <code title="get /radar/http/summary/post_quantum">client.radar.http.summary.<a href="./src/resources/radar/http/summary.ts">postQuantum</a>({ ...params }) -> SummaryPostQuantumResponse</code>
- <code title="get /radar/http/summary/tls_version">client.radar.http.summary.<a href="./src/resources/radar/http/summary.ts">tlsVersion</a>({ ...params }) -> SummaryTLSVersionResponse</code>

### TimeseriesGroups

Types:

- <code><a href="./src/resources/radar/http/timeseries-groups.ts">TimeseriesGroupBotClassResponse</a></code>
- <code><a href="./src/resources/radar/http/timeseries-groups.ts">TimeseriesGroupBrowserResponse</a></code>
- <code><a href="./src/resources/radar/http/timeseries-groups.ts">TimeseriesGroupBrowserFamilyResponse</a></code>
- <code><a href="./src/resources/radar/http/timeseries-groups.ts">TimeseriesGroupDeviceTypeResponse</a></code>
- <code><a href="./src/resources/radar/http/timeseries-groups.ts">TimeseriesGroupHTTPProtocolResponse</a></code>
- <code><a href="./src/resources/radar/http/timeseries-groups.ts">TimeseriesGroupHTTPVersionResponse</a></code>
- <code><a href="./src/resources/radar/http/timeseries-groups.ts">TimeseriesGroupIPVersionResponse</a></code>
- <code><a href="./src/resources/radar/http/timeseries-groups.ts">TimeseriesGroupOSResponse</a></code>
- <code><a href="./src/resources/radar/http/timeseries-groups.ts">TimeseriesGroupPostQuantumResponse</a></code>
- <code><a href="./src/resources/radar/http/timeseries-groups.ts">TimeseriesGroupTLSVersionResponse</a></code>

Methods:

- <code title="get /radar/http/timeseries_groups/bot_class">client.radar.http.timeseriesGroups.<a href="./src/resources/radar/http/timeseries-groups.ts">botClass</a>({ ...params }) -> TimeseriesGroupBotClassResponse</code>
- <code title="get /radar/http/timeseries_groups/browser">client.radar.http.timeseriesGroups.<a href="./src/resources/radar/http/timeseries-groups.ts">browser</a>({ ...params }) -> TimeseriesGroupBrowserResponse</code>
- <code title="get /radar/http/timeseries_groups/browser_family">client.radar.http.timeseriesGroups.<a href="./src/resources/radar/http/timeseries-groups.ts">browserFamily</a>({ ...params }) -> TimeseriesGroupBrowserFamilyResponse</code>
- <code title="get /radar/http/timeseries_groups/device_type">client.radar.http.timeseriesGroups.<a href="./src/resources/radar/http/timeseries-groups.ts">deviceType</a>({ ...params }) -> TimeseriesGroupDeviceTypeResponse</code>
- <code title="get /radar/http/timeseries_groups/http_protocol">client.radar.http.timeseriesGroups.<a href="./src/resources/radar/http/timeseries-groups.ts">httpProtocol</a>({ ...params }) -> TimeseriesGroupHTTPProtocolResponse</code>
- <code title="get /radar/http/timeseries_groups/http_version">client.radar.http.timeseriesGroups.<a href="./src/resources/radar/http/timeseries-groups.ts">httpVersion</a>({ ...params }) -> TimeseriesGroupHTTPVersionResponse</code>
- <code title="get /radar/http/timeseries_groups/ip_version">client.radar.http.timeseriesGroups.<a href="./src/resources/radar/http/timeseries-groups.ts">ipVersion</a>({ ...params }) -> TimeseriesGroupIPVersionResponse</code>
- <code title="get /radar/http/timeseries_groups/os">client.radar.http.timeseriesGroups.<a href="./src/resources/radar/http/timeseries-groups.ts">os</a>({ ...params }) -> TimeseriesGroupOSResponse</code>
- <code title="get /radar/http/timeseries_groups/post_quantum">client.radar.http.timeseriesGroups.<a href="./src/resources/radar/http/timeseries-groups.ts">postQuantum</a>({ ...params }) -> TimeseriesGroupPostQuantumResponse</code>
- <code title="get /radar/http/timeseries_groups/tls_version">client.radar.http.timeseriesGroups.<a href="./src/resources/radar/http/timeseries-groups.ts">tlsVersion</a>({ ...params }) -> TimeseriesGroupTLSVersionResponse</code>

### Top

Types:

- <code><a href="./src/resources/radar/http/top.ts">TopBrowserResponse</a></code>
- <code><a href="./src/resources/radar/http/top.ts">TopBrowserFamilyResponse</a></code>

Methods:

- <code title="get /radar/http/top/browser">client.radar.http.top.<a href="./src/resources/radar/http/top.ts">browser</a>({ ...params }) -> TopBrowserResponse</code>
- <code title="get /radar/http/top/browser_family">client.radar.http.top.<a href="./src/resources/radar/http/top.ts">browserFamily</a>({ ...params }) -> TopBrowserFamilyResponse</code>

## Quality

### IQI

Types:

- <code><a href="./src/resources/radar/quality/iqi.ts">IQISummaryResponse</a></code>
- <code><a href="./src/resources/radar/quality/iqi.ts">IQITimeseriesGroupsResponse</a></code>

Methods:

- <code title="get /radar/quality/iqi/summary">client.radar.quality.iqi.<a href="./src/resources/radar/quality/iqi.ts">summary</a>({ ...params }) -> IQISummaryResponse</code>
- <code title="get /radar/quality/iqi/timeseries_groups">client.radar.quality.iqi.<a href="./src/resources/radar/quality/iqi.ts">timeseriesGroups</a>({ ...params }) -> IQITimeseriesGroupsResponse</code>

### Speed

Types:

- <code><a href="./src/resources/radar/quality/speed/speed.ts">SpeedHistogramResponse</a></code>
- <code><a href="./src/resources/radar/quality/speed/speed.ts">SpeedSummaryResponse</a></code>

Methods:

- <code title="get /radar/quality/speed/histogram">client.radar.quality.speed.<a href="./src/resources/radar/quality/speed/speed.ts">histogram</a>({ ...params }) -> SpeedHistogramResponse</code>
- <code title="get /radar/quality/speed/summary">client.radar.quality.speed.<a href="./src/resources/radar/quality/speed/speed.ts">summary</a>({ ...params }) -> SpeedSummaryResponse</code>

#### Top

Types:

- <code><a href="./src/resources/radar/quality/speed/top.ts">TopAsesResponse</a></code>
- <code><a href="./src/resources/radar/quality/speed/top.ts">TopLocationsResponse</a></code>

Methods:

- <code title="get /radar/quality/speed/top/ases">client.radar.quality.speed.top.<a href="./src/resources/radar/quality/speed/top.ts">ases</a>({ ...params }) -> TopAsesResponse</code>
- <code title="get /radar/quality/speed/top/locations">client.radar.quality.speed.top.<a href="./src/resources/radar/quality/speed/top.ts">locations</a>({ ...params }) -> TopLocationsResponse</code>

## Ranking

Types:

- <code><a href="./src/resources/radar/ranking/ranking.ts">RankingTimeseriesGroupsResponse</a></code>
- <code><a href="./src/resources/radar/ranking/ranking.ts">RankingTopResponse</a></code>

Methods:

- <code title="get /radar/ranking/timeseries_groups">client.radar.ranking.<a href="./src/resources/radar/ranking/ranking.ts">timeseriesGroups</a>({ ...params }) -> RankingTimeseriesGroupsResponse</code>
- <code title="get /radar/ranking/top">client.radar.ranking.<a href="./src/resources/radar/ranking/ranking.ts">top</a>({ ...params }) -> RankingTopResponse</code>

### Domain

Types:

- <code><a href="./src/resources/radar/ranking/domain.ts">DomainGetResponse</a></code>

Methods:

- <code title="get /radar/ranking/domain/{domain}">client.radar.ranking.domain.<a href="./src/resources/radar/ranking/domain.ts">get</a>(domain, { ...params }) -> DomainGetResponse</code>

### InternetServices

Types:

- <code><a href="./src/resources/radar/ranking/internet-services.ts">InternetServiceCategoriesResponse</a></code>
- <code><a href="./src/resources/radar/ranking/internet-services.ts">InternetServiceTimeseriesGroupsResponse</a></code>
- <code><a href="./src/resources/radar/ranking/internet-services.ts">InternetServiceTopResponse</a></code>

Methods:

- <code title="get /radar/ranking/internet_services/categories">client.radar.ranking.internetServices.<a href="./src/resources/radar/ranking/internet-services.ts">categories</a>({ ...params }) -> InternetServiceCategoriesResponse</code>
- <code title="get /radar/ranking/internet_services/timeseries_groups">client.radar.ranking.internetServices.<a href="./src/resources/radar/ranking/internet-services.ts">timeseriesGroups</a>({ ...params }) -> InternetServiceTimeseriesGroupsResponse</code>
- <code title="get /radar/ranking/internet_services/top">client.radar.ranking.internetServices.<a href="./src/resources/radar/ranking/internet-services.ts">top</a>({ ...params }) -> InternetServiceTopResponse</code>

## TrafficAnomalies

Types:

- <code><a href="./src/resources/radar/traffic-anomalies/traffic-anomalies.ts">TrafficAnomalyGetResponse</a></code>

Methods:

- <code title="get /radar/traffic_anomalies">client.radar.trafficAnomalies.<a href="./src/resources/radar/traffic-anomalies/traffic-anomalies.ts">get</a>({ ...params }) -> TrafficAnomalyGetResponse</code>

### Locations

Types:

- <code><a href="./src/resources/radar/traffic-anomalies/locations.ts">LocationGetResponse</a></code>

Methods:

- <code title="get /radar/traffic_anomalies/locations">client.radar.trafficAnomalies.locations.<a href="./src/resources/radar/traffic-anomalies/locations.ts">get</a>({ ...params }) -> LocationGetResponse</code>

## TCPResetsTimeouts

Types:

- <code><a href="./src/resources/radar/tcp-resets-timeouts.ts">TCPResetsTimeoutSummaryResponse</a></code>
- <code><a href="./src/resources/radar/tcp-resets-timeouts.ts">TCPResetsTimeoutTimeseriesGroupsResponse</a></code>

Methods:

- <code title="get /radar/tcp_resets_timeouts/summary">client.radar.tcpResetsTimeouts.<a href="./src/resources/radar/tcp-resets-timeouts.ts">summary</a>({ ...params }) -> TCPResetsTimeoutSummaryResponse</code>
- <code title="get /radar/tcp_resets_timeouts/timeseries_groups">client.radar.tcpResetsTimeouts.<a href="./src/resources/radar/tcp-resets-timeouts.ts">timeseriesGroups</a>({ ...params }) -> TCPResetsTimeoutTimeseriesGroupsResponse</code>

## RobotsTXT

### Top

Types:

- <code><a href="./src/resources/radar/robots-txt/top/top.ts">TopDomainCategoriesResponse</a></code>

Methods:

- <code title="get /radar/robots_txt/top/domain_categories">client.radar.robotsTXT.top.<a href="./src/resources/radar/robots-txt/top/top.ts">domainCategories</a>({ ...params }) -> TopDomainCategoriesResponse</code>

#### UserAgents

Types:

- <code><a href="./src/resources/radar/robots-txt/top/user-agents.ts">UserAgentDirectiveResponse</a></code>

Methods:

- <code title="get /radar/robots_txt/top/user_agents/directive">client.radar.robotsTXT.top.userAgents.<a href="./src/resources/radar/robots-txt/top/user-agents.ts">directive</a>({ ...params }) -> UserAgentDirectiveResponse</code>

## LeakedCredentials

### Summary

Types:

- <code><a href="./src/resources/radar/leaked-credentials/summary.ts">SummaryBotClassResponse</a></code>
- <code><a href="./src/resources/radar/leaked-credentials/summary.ts">SummaryCompromisedResponse</a></code>

Methods:

- <code title="get /radar/leaked_credential_checks/summary/bot_class">client.radar.leakedCredentials.summary.<a href="./src/resources/radar/leaked-credentials/summary.ts">botClass</a>({ ...params }) -> SummaryBotClassResponse</code>
- <code title="get /radar/leaked_credential_checks/summary/compromised">client.radar.leakedCredentials.summary.<a href="./src/resources/radar/leaked-credentials/summary.ts">compromised</a>({ ...params }) -> SummaryCompromisedResponse</code>

### TimeseriesGroups

Types:

- <code><a href="./src/resources/radar/leaked-credentials/timeseries-groups.ts">TimeseriesGroupBotClassResponse</a></code>
- <code><a href="./src/resources/radar/leaked-credentials/timeseries-groups.ts">TimeseriesGroupCompromisedResponse</a></code>

Methods:

- <code title="get /radar/leaked_credential_checks/timeseries_groups/bot_class">client.radar.leakedCredentials.timeseriesGroups.<a href="./src/resources/radar/leaked-credentials/timeseries-groups.ts">botClass</a>({ ...params }) -> TimeseriesGroupBotClassResponse</code>
- <code title="get /radar/leaked_credential_checks/timeseries_groups/compromised">client.radar.leakedCredentials.timeseriesGroups.<a href="./src/resources/radar/leaked-credentials/timeseries-groups.ts">compromised</a>({ ...params }) -> TimeseriesGroupCompromisedResponse</code>

# BotManagement

Types:

- <code><a href="./src/resources/bot-management.ts">BotFightModeConfiguration</a></code>
- <code><a href="./src/resources/bot-management.ts">SubscriptionConfiguration</a></code>
- <code><a href="./src/resources/bot-management.ts">SuperBotFightModeDefinitelyConfiguration</a></code>
- <code><a href="./src/resources/bot-management.ts">SuperBotFightModeLikelyConfiguration</a></code>
- <code><a href="./src/resources/bot-management.ts">BotManagementUpdateResponse</a></code>
- <code><a href="./src/resources/bot-management.ts">BotManagementGetResponse</a></code>

Methods:

- <code title="put /zones/{zone_id}/bot_management">client.botManagement.<a href="./src/resources/bot-management.ts">update</a>({ ...params }) -> BotManagementUpdateResponse</code>
- <code title="get /zones/{zone_id}/bot_management">client.botManagement.<a href="./src/resources/bot-management.ts">get</a>({ ...params }) -> BotManagementGetResponse</code>

# OriginPostQuantumEncryption

Types:

- <code><a href="./src/resources/origin-post-quantum-encryption.ts">OriginPostQuantumEncryptionUpdateResponse</a></code>
- <code><a href="./src/resources/origin-post-quantum-encryption.ts">OriginPostQuantumEncryptionGetResponse</a></code>

Methods:

- <code title="put /zones/{zone_id}/cache/origin_post_quantum_encryption">client.originPostQuantumEncryption.<a href="./src/resources/origin-post-quantum-encryption.ts">update</a>({ ...params }) -> OriginPostQuantumEncryptionUpdateResponse</code>
- <code title="get /zones/{zone_id}/cache/origin_post_quantum_encryption">client.originPostQuantumEncryption.<a href="./src/resources/origin-post-quantum-encryption.ts">get</a>({ ...params }) -> OriginPostQuantumEncryptionGetResponse</code>

# Zaraz

Types:

- <code><a href="./src/resources/zaraz/zaraz.ts">ButtonTextTranslation</a></code>
- <code><a href="./src/resources/zaraz/zaraz.ts">NeoEvent</a></code>

Methods:

- <code title="put /zones/{zone_id}/settings/zaraz/workflow">client.zaraz.<a href="./src/resources/zaraz/zaraz.ts">update</a>({ ...params }) -> Workflow</code>

## Config

Types:

- <code><a href="./src/resources/zaraz/config.ts">Configuration</a></code>

Methods:

- <code title="put /zones/{zone_id}/settings/zaraz/config">client.zaraz.config.<a href="./src/resources/zaraz/config.ts">update</a>({ ...params }) -> Configuration</code>
- <code title="get /zones/{zone_id}/settings/zaraz/config">client.zaraz.config.<a href="./src/resources/zaraz/config.ts">get</a>({ ...params }) -> Configuration</code>

## Default

Methods:

- <code title="get /zones/{zone_id}/settings/zaraz/default">client.zaraz.default.<a href="./src/resources/zaraz/default.ts">get</a>({ ...params }) -> Configuration</code>

## Export

Methods:

- <code title="get /zones/{zone_id}/settings/zaraz/export">client.zaraz.export.<a href="./src/resources/zaraz/export.ts">get</a>({ ...params }) -> Configuration</code>

## History

Types:

- <code><a href="./src/resources/zaraz/history/history.ts">HistoryListResponse</a></code>

Methods:

- <code title="put /zones/{zone_id}/settings/zaraz/history">client.zaraz.history.<a href="./src/resources/zaraz/history/history.ts">update</a>({ ...params }) -> Configuration</code>
- <code title="get /zones/{zone_id}/settings/zaraz/history">client.zaraz.history.<a href="./src/resources/zaraz/history/history.ts">list</a>({ ...params }) -> HistoryListResponsesSinglePage</code>

### Configs

Types:

- <code><a href="./src/resources/zaraz/history/configs.ts">ConfigGetResponse</a></code>

Methods:

- <code title="get /zones/{zone_id}/settings/zaraz/history/configs">client.zaraz.history.configs.<a href="./src/resources/zaraz/history/configs.ts">get</a>({ ...params }) -> ConfigGetResponse</code>

## Publish

Types:

- <code><a href="./src/resources/zaraz/publish.ts">PublishCreateResponse</a></code>

Methods:

- <code title="post /zones/{zone_id}/settings/zaraz/publish">client.zaraz.publish.<a href="./src/resources/zaraz/publish.ts">create</a>({ ...params }) -> PublishCreateResponse</code>

## Workflow

Types:

- <code><a href="./src/resources/zaraz/workflow.ts">Workflow</a></code>

Methods:

- <code title="get /zones/{zone_id}/settings/zaraz/workflow">client.zaraz.workflow.<a href="./src/resources/zaraz/workflow.ts">get</a>({ ...params }) -> Workflow</code>

# Speed

Types:

- <code><a href="./src/resources/speed/speed.ts">LabeledRegion</a></code>
- <code><a href="./src/resources/speed/speed.ts">LighthouseReport</a></code>
- <code><a href="./src/resources/speed/speed.ts">Trend</a></code>

## Schedule

Types:

- <code><a href="./src/resources/speed/schedule.ts">Schedule</a></code>
- <code><a href="./src/resources/speed/schedule.ts">ScheduleCreateResponse</a></code>
- <code><a href="./src/resources/speed/schedule.ts">ScheduleDeleteResponse</a></code>

Methods:

- <code title="post /zones/{zone_id}/speed_api/schedule/{url}">client.speed.schedule.<a href="./src/resources/speed/schedule.ts">create</a>(url, { ...params }) -> ScheduleCreateResponse</code>
- <code title="delete /zones/{zone_id}/speed_api/schedule/{url}">client.speed.schedule.<a href="./src/resources/speed/schedule.ts">delete</a>(url, { ...params }) -> ScheduleDeleteResponse</code>
- <code title="get /zones/{zone_id}/speed_api/schedule/{url}">client.speed.schedule.<a href="./src/resources/speed/schedule.ts">get</a>(url, { ...params }) -> Schedule</code>

## Availabilities

Types:

- <code><a href="./src/resources/speed/availabilities.ts">Availability</a></code>

Methods:

- <code title="get /zones/{zone_id}/speed_api/availabilities">client.speed.availabilities.<a href="./src/resources/speed/availabilities.ts">list</a>({ ...params }) -> Availability</code>

## Pages

Types:

- <code><a href="./src/resources/speed/pages/pages.ts">PageListResponse</a></code>

Methods:

- <code title="get /zones/{zone_id}/speed_api/pages">client.speed.pages.<a href="./src/resources/speed/pages/pages.ts">list</a>({ ...params }) -> PageListResponsesSinglePage</code>
- <code title="get /zones/{zone_id}/speed_api/pages/{url}/trend">client.speed.pages.<a href="./src/resources/speed/pages/pages.ts">trend</a>(url, { ...params }) -> Trend</code>

### Tests

Types:

- <code><a href="./src/resources/speed/pages/tests.ts">Test</a></code>
- <code><a href="./src/resources/speed/pages/tests.ts">TestDeleteResponse</a></code>

Methods:

- <code title="post /zones/{zone_id}/speed_api/pages/{url}/tests">client.speed.pages.tests.<a href="./src/resources/speed/pages/tests.ts">create</a>(url, { ...params }) -> Test</code>
- <code title="get /zones/{zone_id}/speed_api/pages/{url}/tests">client.speed.pages.tests.<a href="./src/resources/speed/pages/tests.ts">list</a>(url, { ...params }) -> TestsV4PagePaginationArray</code>
- <code title="delete /zones/{zone_id}/speed_api/pages/{url}/tests">client.speed.pages.tests.<a href="./src/resources/speed/pages/tests.ts">delete</a>(url, { ...params }) -> TestDeleteResponse</code>
- <code title="get /zones/{zone_id}/speed_api/pages/{url}/tests/{test_id}">client.speed.pages.tests.<a href="./src/resources/speed/pages/tests.ts">get</a>(url, testId, { ...params }) -> Test</code>

# DCVDelegation

Types:

- <code><a href="./src/resources/dcv-delegation.ts">DCVDelegationUUID</a></code>

Methods:

- <code title="get /zones/{zone_id}/dcv_delegation/uuid">client.dcvDelegation.<a href="./src/resources/dcv-delegation.ts">get</a>({ ...params }) -> DCVDelegationUUID</code>

# Hostnames

## Settings

### TLS

Types:

- <code><a href="./src/resources/hostnames/settings/tls.ts">Setting</a></code>
- <code><a href="./src/resources/hostnames/settings/tls.ts">SettingValue</a></code>
- <code><a href="./src/resources/hostnames/settings/tls.ts">TLSDeleteResponse</a></code>
- <code><a href="./src/resources/hostnames/settings/tls.ts">TLSGetResponse</a></code>

Methods:

- <code title="put /zones/{zone_id}/hostnames/settings/{setting_id}/{hostname}">client.hostnames.settings.tls.<a href="./src/resources/hostnames/settings/tls.ts">update</a>(settingId, hostname, { ...params }) -> Setting</code>
- <code title="delete /zones/{zone_id}/hostnames/settings/{setting_id}/{hostname}">client.hostnames.settings.tls.<a href="./src/resources/hostnames/settings/tls.ts">delete</a>(settingId, hostname, { ...params }) -> TLSDeleteResponse</code>
- <code title="get /zones/{zone_id}/hostnames/settings/{setting_id}">client.hostnames.settings.tls.<a href="./src/resources/hostnames/settings/tls.ts">get</a>(settingId, { ...params }) -> TLSGetResponsesSinglePage</code>

# Snippets

Types:

- <code><a href="./src/resources/snippets/snippets.ts">Snippet</a></code>
- <code><a href="./src/resources/snippets/snippets.ts">SnippetDeleteResponse</a></code>

Methods:

- <code title="put /zones/{zone_id}/snippets/{snippet_name}">client.snippets.<a href="./src/resources/snippets/snippets.ts">update</a>(snippetName, { ...params }) -> Snippet</code>
- <code title="get /zones/{zone_id}/snippets">client.snippets.<a href="./src/resources/snippets/snippets.ts">list</a>({ ...params }) -> SnippetsSinglePage</code>
- <code title="delete /zones/{zone_id}/snippets/{snippet_name}">client.snippets.<a href="./src/resources/snippets/snippets.ts">delete</a>(snippetName, { ...params }) -> SnippetDeleteResponse</code>
- <code title="get /zones/{zone_id}/snippets/{snippet_name}">client.snippets.<a href="./src/resources/snippets/snippets.ts">get</a>(snippetName, { ...params }) -> Snippet</code>

## Content

Methods:

- <code title="get /zones/{zone_id}/snippets/{snippet_name}/content">client.snippets.content.<a href="./src/resources/snippets/content.ts">get</a>(snippetName, { ...params }) -> Response</code>

## Rules

Types:

- <code><a href="./src/resources/snippets/rules.ts">RuleUpdateResponse</a></code>
- <code><a href="./src/resources/snippets/rules.ts">RuleListResponse</a></code>
- <code><a href="./src/resources/snippets/rules.ts">RuleDeleteResponse</a></code>

Methods:

- <code title="put /zones/{zone_id}/snippets/snippet_rules">client.snippets.rules.<a href="./src/resources/snippets/rules.ts">update</a>({ ...params }) -> RuleUpdateResponsesSinglePage</code>
- <code title="get /zones/{zone_id}/snippets/snippet_rules">client.snippets.rules.<a href="./src/resources/snippets/rules.ts">list</a>({ ...params }) -> RuleListResponsesSinglePage</code>
- <code title="delete /zones/{zone_id}/snippets/snippet_rules">client.snippets.rules.<a href="./src/resources/snippets/rules.ts">delete</a>({ ...params }) -> RuleDeleteResponse</code>

# Calls

## SFU

Types:

- <code><a href="./src/resources/calls/sfu.ts">SFUCreateResponse</a></code>
- <code><a href="./src/resources/calls/sfu.ts">SFUUpdateResponse</a></code>
- <code><a href="./src/resources/calls/sfu.ts">SFUListResponse</a></code>
- <code><a href="./src/resources/calls/sfu.ts">SFUDeleteResponse</a></code>
- <code><a href="./src/resources/calls/sfu.ts">SFUGetResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/calls/apps">client.calls.sfu.<a href="./src/resources/calls/sfu.ts">create</a>({ ...params }) -> SFUCreateResponse</code>
- <code title="put /accounts/{account_id}/calls/apps/{app_id}">client.calls.sfu.<a href="./src/resources/calls/sfu.ts">update</a>(appId, { ...params }) -> SFUUpdateResponse</code>
- <code title="get /accounts/{account_id}/calls/apps">client.calls.sfu.<a href="./src/resources/calls/sfu.ts">list</a>({ ...params }) -> SFUListResponsesSinglePage</code>
- <code title="delete /accounts/{account_id}/calls/apps/{app_id}">client.calls.sfu.<a href="./src/resources/calls/sfu.ts">delete</a>(appId, { ...params }) -> SFUDeleteResponse</code>
- <code title="get /accounts/{account_id}/calls/apps/{app_id}">client.calls.sfu.<a href="./src/resources/calls/sfu.ts">get</a>(appId, { ...params }) -> SFUGetResponse</code>

## TURN

Types:

- <code><a href="./src/resources/calls/turn.ts">TURNCreateResponse</a></code>
- <code><a href="./src/resources/calls/turn.ts">TURNUpdateResponse</a></code>
- <code><a href="./src/resources/calls/turn.ts">TURNListResponse</a></code>
- <code><a href="./src/resources/calls/turn.ts">TURNDeleteResponse</a></code>
- <code><a href="./src/resources/calls/turn.ts">TURNGetResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/calls/turn_keys">client.calls.turn.<a href="./src/resources/calls/turn.ts">create</a>({ ...params }) -> TURNCreateResponse</code>
- <code title="put /accounts/{account_id}/calls/turn_keys/{key_id}">client.calls.turn.<a href="./src/resources/calls/turn.ts">update</a>(keyId, { ...params }) -> TURNUpdateResponse</code>
- <code title="get /accounts/{account_id}/calls/turn_keys">client.calls.turn.<a href="./src/resources/calls/turn.ts">list</a>({ ...params }) -> TURNListResponsesSinglePage</code>
- <code title="delete /accounts/{account_id}/calls/turn_keys/{key_id}">client.calls.turn.<a href="./src/resources/calls/turn.ts">delete</a>(keyId, { ...params }) -> TURNDeleteResponse</code>
- <code title="get /accounts/{account_id}/calls/turn_keys/{key_id}">client.calls.turn.<a href="./src/resources/calls/turn.ts">get</a>(keyId, { ...params }) -> TURNGetResponse</code>

# CloudforceOne

## Scans

### Results

Types:

- <code><a href="./src/resources/cloudforce-one/scans/results.ts">ScanResult</a></code>
- <code><a href="./src/resources/cloudforce-one/scans/results.ts">ResultGetResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/cloudforce-one/scans/results/{config_id}">client.cloudforceOne.scans.results.<a href="./src/resources/cloudforce-one/scans/results.ts">get</a>(configId, { ...params }) -> ResultGetResponse</code>

### Config

Types:

- <code><a href="./src/resources/cloudforce-one/scans/config.ts">ConfigCreateResponse</a></code>
- <code><a href="./src/resources/cloudforce-one/scans/config.ts">ConfigListResponse</a></code>
- <code><a href="./src/resources/cloudforce-one/scans/config.ts">ConfigDeleteResponse</a></code>
- <code><a href="./src/resources/cloudforce-one/scans/config.ts">ConfigEditResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/cloudforce-one/scans/config">client.cloudforceOne.scans.config.<a href="./src/resources/cloudforce-one/scans/config.ts">create</a>({ ...params }) -> ConfigCreateResponse</code>
- <code title="get /accounts/{account_id}/cloudforce-one/scans/config">client.cloudforceOne.scans.config.<a href="./src/resources/cloudforce-one/scans/config.ts">list</a>({ ...params }) -> ConfigListResponsesSinglePage</code>
- <code title="delete /accounts/{account_id}/cloudforce-one/scans/config/{config_id}">client.cloudforceOne.scans.config.<a href="./src/resources/cloudforce-one/scans/config.ts">delete</a>(configId, { ...params }) -> ConfigDeleteResponse</code>
- <code title="patch /accounts/{account_id}/cloudforce-one/scans/config/{config_id}">client.cloudforceOne.scans.config.<a href="./src/resources/cloudforce-one/scans/config.ts">edit</a>(configId, { ...params }) -> ConfigEditResponse</code>

## Requests

Types:

- <code><a href="./src/resources/cloudforce-one/requests/requests.ts">Item</a></code>
- <code><a href="./src/resources/cloudforce-one/requests/requests.ts">ListItem</a></code>
- <code><a href="./src/resources/cloudforce-one/requests/requests.ts">Quota</a></code>
- <code><a href="./src/resources/cloudforce-one/requests/requests.ts">RequestConstants</a></code>
- <code><a href="./src/resources/cloudforce-one/requests/requests.ts">RequestTypes</a></code>
- <code><a href="./src/resources/cloudforce-one/requests/requests.ts">RequestDeleteResponse</a></code>
- <code><a href="./src/resources/cloudforce-one/requests/requests.ts">RequestTypesResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/cloudforce-one/requests/new">client.cloudforceOne.requests.<a href="./src/resources/cloudforce-one/requests/requests.ts">create</a>({ ...params }) -> Item</code>
- <code title="put /accounts/{account_id}/cloudforce-one/requests/{request_id}">client.cloudforceOne.requests.<a href="./src/resources/cloudforce-one/requests/requests.ts">update</a>(requestId, { ...params }) -> Item</code>
- <code title="post /accounts/{account_id}/cloudforce-one/requests">client.cloudforceOne.requests.<a href="./src/resources/cloudforce-one/requests/requests.ts">list</a>({ ...params }) -> ListItemsSinglePage</code>
- <code title="delete /accounts/{account_id}/cloudforce-one/requests/{request_id}">client.cloudforceOne.requests.<a href="./src/resources/cloudforce-one/requests/requests.ts">delete</a>(requestId, { ...params }) -> RequestDeleteResponse</code>
- <code title="get /accounts/{account_id}/cloudforce-one/requests/constants">client.cloudforceOne.requests.<a href="./src/resources/cloudforce-one/requests/requests.ts">constants</a>({ ...params }) -> RequestConstants</code>
- <code title="get /accounts/{account_id}/cloudforce-one/requests/{request_id}">client.cloudforceOne.requests.<a href="./src/resources/cloudforce-one/requests/requests.ts">get</a>(requestId, { ...params }) -> Item</code>
- <code title="get /accounts/{account_id}/cloudforce-one/requests/quota">client.cloudforceOne.requests.<a href="./src/resources/cloudforce-one/requests/requests.ts">quota</a>({ ...params }) -> Quota</code>
- <code title="get /accounts/{account_id}/cloudforce-one/requests/types">client.cloudforceOne.requests.<a href="./src/resources/cloudforce-one/requests/requests.ts">types</a>({ ...params }) -> RequestTypesResponsesSinglePage</code>

### Message

Types:

- <code><a href="./src/resources/cloudforce-one/requests/message.ts">Message</a></code>
- <code><a href="./src/resources/cloudforce-one/requests/message.ts">MessageDeleteResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/cloudforce-one/requests/{request_id}/message/new">client.cloudforceOne.requests.message.<a href="./src/resources/cloudforce-one/requests/message.ts">create</a>(requestId, { ...params }) -> Message</code>
- <code title="put /accounts/{account_id}/cloudforce-one/requests/{request_id}/message/{message_id}">client.cloudforceOne.requests.message.<a href="./src/resources/cloudforce-one/requests/message.ts">update</a>(requestId, messageId, { ...params }) -> Message</code>
- <code title="delete /accounts/{account_id}/cloudforce-one/requests/{request_id}/message/{message_id}">client.cloudforceOne.requests.message.<a href="./src/resources/cloudforce-one/requests/message.ts">delete</a>(requestId, messageId, { ...params }) -> MessageDeleteResponse</code>
- <code title="post /accounts/{account_id}/cloudforce-one/requests/{request_id}/message">client.cloudforceOne.requests.message.<a href="./src/resources/cloudforce-one/requests/message.ts">get</a>(requestId, { ...params }) -> MessagesSinglePage</code>

### Priority

Types:

- <code><a href="./src/resources/cloudforce-one/requests/priority.ts">Label</a></code>
- <code><a href="./src/resources/cloudforce-one/requests/priority.ts">Priority</a></code>
- <code><a href="./src/resources/cloudforce-one/requests/priority.ts">PriorityEdit</a></code>
- <code><a href="./src/resources/cloudforce-one/requests/priority.ts">PriorityDeleteResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/cloudforce-one/requests/priority/new">client.cloudforceOne.requests.priority.<a href="./src/resources/cloudforce-one/requests/priority.ts">create</a>({ ...params }) -> Priority</code>
- <code title="put /accounts/{account_id}/cloudforce-one/requests/priority/{priority_id}">client.cloudforceOne.requests.priority.<a href="./src/resources/cloudforce-one/requests/priority.ts">update</a>(priorityId, { ...params }) -> Item</code>
- <code title="delete /accounts/{account_id}/cloudforce-one/requests/priority/{priority_id}">client.cloudforceOne.requests.priority.<a href="./src/resources/cloudforce-one/requests/priority.ts">delete</a>(priorityId, { ...params }) -> PriorityDeleteResponse</code>
- <code title="get /accounts/{account_id}/cloudforce-one/requests/priority/{priority_id}">client.cloudforceOne.requests.priority.<a href="./src/resources/cloudforce-one/requests/priority.ts">get</a>(priorityId, { ...params }) -> Item</code>
- <code title="get /accounts/{account_id}/cloudforce-one/requests/priority/quota">client.cloudforceOne.requests.priority.<a href="./src/resources/cloudforce-one/requests/priority.ts">quota</a>({ ...params }) -> Quota</code>

### Assets

Types:

- <code><a href="./src/resources/cloudforce-one/requests/assets.ts">AssetCreateResponse</a></code>
- <code><a href="./src/resources/cloudforce-one/requests/assets.ts">AssetUpdateResponse</a></code>
- <code><a href="./src/resources/cloudforce-one/requests/assets.ts">AssetDeleteResponse</a></code>
- <code><a href="./src/resources/cloudforce-one/requests/assets.ts">AssetGetResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/cloudforce-one/requests/{request_id}/asset">client.cloudforceOne.requests.assets.<a href="./src/resources/cloudforce-one/requests/assets.ts">create</a>(requestId, { ...params }) -> AssetCreateResponsesSinglePage</code>
- <code title="put /accounts/{account_id}/cloudforce-one/requests/{request_id}/asset/{asset_id}">client.cloudforceOne.requests.assets.<a href="./src/resources/cloudforce-one/requests/assets.ts">update</a>(requestId, assetId, { ...params }) -> AssetUpdateResponse</code>
- <code title="delete /accounts/{account_id}/cloudforce-one/requests/{request_id}/asset/{asset_id}">client.cloudforceOne.requests.assets.<a href="./src/resources/cloudforce-one/requests/assets.ts">delete</a>(requestId, assetId, { ...params }) -> AssetDeleteResponse</code>
- <code title="get /accounts/{account_id}/cloudforce-one/requests/{request_id}/asset/{asset_id}">client.cloudforceOne.requests.assets.<a href="./src/resources/cloudforce-one/requests/assets.ts">get</a>(requestId, assetId, { ...params }) -> AssetGetResponsesSinglePage</code>

## ThreatEvents

Types:

- <code><a href="./src/resources/cloudforce-one/threat-events/threat-events.ts">ThreatEventCreateResponse</a></code>
- <code><a href="./src/resources/cloudforce-one/threat-events/threat-events.ts">ThreatEventListResponse</a></code>
- <code><a href="./src/resources/cloudforce-one/threat-events/threat-events.ts">ThreatEventDeleteResponse</a></code>
- <code><a href="./src/resources/cloudforce-one/threat-events/threat-events.ts">ThreatEventBulkCreateResponse</a></code>
- <code><a href="./src/resources/cloudforce-one/threat-events/threat-events.ts">ThreatEventEditResponse</a></code>
- <code><a href="./src/resources/cloudforce-one/threat-events/threat-events.ts">ThreatEventGetResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/cloudforce-one/events/create">client.cloudforceOne.threatEvents.<a href="./src/resources/cloudforce-one/threat-events/threat-events.ts">create</a>({ ...params }) -> ThreatEventCreateResponse</code>
- <code title="get /accounts/{account_id}/cloudforce-one/events">client.cloudforceOne.threatEvents.<a href="./src/resources/cloudforce-one/threat-events/threat-events.ts">list</a>({ ...params }) -> ThreatEventListResponse</code>
- <code title="delete /accounts/{account_id}/cloudforce-one/events/{event_id}">client.cloudforceOne.threatEvents.<a href="./src/resources/cloudforce-one/threat-events/threat-events.ts">delete</a>(eventId, { ...params }) -> ThreatEventDeleteResponse</code>
- <code title="post /accounts/{account_id}/cloudforce-one/events/create/bulk">client.cloudforceOne.threatEvents.<a href="./src/resources/cloudforce-one/threat-events/threat-events.ts">bulkCreate</a>({ ...params }) -> ThreatEventBulkCreateResponse</code>
- <code title="patch /accounts/{account_id}/cloudforce-one/events/{event_id}">client.cloudforceOne.threatEvents.<a href="./src/resources/cloudforce-one/threat-events/threat-events.ts">edit</a>(eventId, { ...params }) -> ThreatEventEditResponse</code>
- <code title="get /accounts/{account_id}/cloudforce-one/events/{event_id}">client.cloudforceOne.threatEvents.<a href="./src/resources/cloudforce-one/threat-events/threat-events.ts">get</a>(eventId, { ...params }) -> ThreatEventGetResponse</code>

### Attackers

Types:

- <code><a href="./src/resources/cloudforce-one/threat-events/attackers.ts">AttackerListResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/cloudforce-one/events/attackers">client.cloudforceOne.threatEvents.attackers.<a href="./src/resources/cloudforce-one/threat-events/attackers.ts">list</a>({ ...params }) -> AttackerListResponse</code>

### Categories

Types:

- <code><a href="./src/resources/cloudforce-one/threat-events/categories.ts">CategoryCreateResponse</a></code>
- <code><a href="./src/resources/cloudforce-one/threat-events/categories.ts">CategoryListResponse</a></code>
- <code><a href="./src/resources/cloudforce-one/threat-events/categories.ts">CategoryDeleteResponse</a></code>
- <code><a href="./src/resources/cloudforce-one/threat-events/categories.ts">CategoryEditResponse</a></code>
- <code><a href="./src/resources/cloudforce-one/threat-events/categories.ts">CategoryGetResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/cloudforce-one/events/categories/create">client.cloudforceOne.threatEvents.categories.<a href="./src/resources/cloudforce-one/threat-events/categories.ts">create</a>({ ...params }) -> CategoryCreateResponse</code>
- <code title="get /accounts/{account_id}/cloudforce-one/events/categories">client.cloudforceOne.threatEvents.categories.<a href="./src/resources/cloudforce-one/threat-events/categories.ts">list</a>({ ...params }) -> CategoryListResponse</code>
- <code title="delete /accounts/{account_id}/cloudforce-one/events/categories/{category_id}">client.cloudforceOne.threatEvents.categories.<a href="./src/resources/cloudforce-one/threat-events/categories.ts">delete</a>(categoryId, { ...params }) -> CategoryDeleteResponse</code>
- <code title="patch /accounts/{account_id}/cloudforce-one/events/categories/{category_id}">client.cloudforceOne.threatEvents.categories.<a href="./src/resources/cloudforce-one/threat-events/categories.ts">edit</a>(categoryId, { ...params }) -> CategoryEditResponse</code>
- <code title="get /accounts/{account_id}/cloudforce-one/events/categories/{category_id}">client.cloudforceOne.threatEvents.categories.<a href="./src/resources/cloudforce-one/threat-events/categories.ts">get</a>(categoryId, { ...params }) -> CategoryGetResponse</code>

### Countries

Types:

- <code><a href="./src/resources/cloudforce-one/threat-events/countries.ts">CountryListResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/cloudforce-one/events/countries">client.cloudforceOne.threatEvents.countries.<a href="./src/resources/cloudforce-one/threat-events/countries.ts">list</a>({ ...params }) -> CountryListResponse</code>

### Crons

Types:

- <code><a href="./src/resources/cloudforce-one/threat-events/crons.ts">CronListResponse</a></code>
- <code><a href="./src/resources/cloudforce-one/threat-events/crons.ts">CronEditResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/cloudforce-one/events/cron">client.cloudforceOne.threatEvents.crons.<a href="./src/resources/cloudforce-one/threat-events/crons.ts">list</a>({ ...params }) -> CronListResponse</code>
- <code title="patch /accounts/{account_id}/cloudforce-one/events/cron">client.cloudforceOne.threatEvents.crons.<a href="./src/resources/cloudforce-one/threat-events/crons.ts">edit</a>({ ...params }) -> CronEditResponse</code>

### Datasets

Types:

- <code><a href="./src/resources/cloudforce-one/threat-events/datasets/datasets.ts">DatasetCreateResponse</a></code>
- <code><a href="./src/resources/cloudforce-one/threat-events/datasets/datasets.ts">DatasetListResponse</a></code>
- <code><a href="./src/resources/cloudforce-one/threat-events/datasets/datasets.ts">DatasetEditResponse</a></code>
- <code><a href="./src/resources/cloudforce-one/threat-events/datasets/datasets.ts">DatasetGetResponse</a></code>
- <code><a href="./src/resources/cloudforce-one/threat-events/datasets/datasets.ts">DatasetRawResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/cloudforce-one/events/dataset/create">client.cloudforceOne.threatEvents.datasets.<a href="./src/resources/cloudforce-one/threat-events/datasets/datasets.ts">create</a>({ ...params }) -> DatasetCreateResponse</code>
- <code title="get /accounts/{account_id}/cloudforce-one/events/dataset">client.cloudforceOne.threatEvents.datasets.<a href="./src/resources/cloudforce-one/threat-events/datasets/datasets.ts">list</a>({ ...params }) -> DatasetListResponse</code>
- <code title="patch /accounts/{account_id}/cloudforce-one/events/dataset/{dataset_id}">client.cloudforceOne.threatEvents.datasets.<a href="./src/resources/cloudforce-one/threat-events/datasets/datasets.ts">edit</a>(datasetId, { ...params }) -> DatasetEditResponse</code>
- <code title="get /accounts/{account_id}/cloudforce-one/events/dataset/{dataset_id}">client.cloudforceOne.threatEvents.datasets.<a href="./src/resources/cloudforce-one/threat-events/datasets/datasets.ts">get</a>(datasetId, { ...params }) -> DatasetGetResponse</code>
- <code title="get /accounts/{account_id}/cloudforce-one/events/raw/{dataset_id}/{event_id}">client.cloudforceOne.threatEvents.datasets.<a href="./src/resources/cloudforce-one/threat-events/datasets/datasets.ts">raw</a>(datasetId, eventId, { ...params }) -> DatasetRawResponse</code>

#### Health

Types:

- <code><a href="./src/resources/cloudforce-one/threat-events/datasets/health.ts">HealthGetResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/cloudforce-one/events/dataset/{dataset_id}/health">client.cloudforceOne.threatEvents.datasets.health.<a href="./src/resources/cloudforce-one/threat-events/datasets/health.ts">get</a>(datasetId, { ...params }) -> HealthGetResponse</code>

### IndicatorTypes

Types:

- <code><a href="./src/resources/cloudforce-one/threat-events/indicator-types.ts">IndicatorTypeListResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/cloudforce-one/events/indicatorTypes">client.cloudforceOne.threatEvents.indicatorTypes.<a href="./src/resources/cloudforce-one/threat-events/indicator-types.ts">list</a>({ ...params }) -> IndicatorTypeListResponse</code>

### Raw

Types:

- <code><a href="./src/resources/cloudforce-one/threat-events/raw.ts">RawEditResponse</a></code>
- <code><a href="./src/resources/cloudforce-one/threat-events/raw.ts">RawGetResponse</a></code>

Methods:

- <code title="patch /accounts/{account_id}/cloudforce-one/events/{event_id}/raw/{raw_id}">client.cloudforceOne.threatEvents.raw.<a href="./src/resources/cloudforce-one/threat-events/raw.ts">edit</a>(eventId, rawId, { ...params }) -> RawEditResponse</code>
- <code title="get /accounts/{account_id}/cloudforce-one/events/{event_id}/raw/{raw_id}">client.cloudforceOne.threatEvents.raw.<a href="./src/resources/cloudforce-one/threat-events/raw.ts">get</a>(eventId, rawId, { ...params }) -> RawGetResponse</code>

### Relate

Types:

- <code><a href="./src/resources/cloudforce-one/threat-events/relate.ts">RelateDeleteResponse</a></code>

Methods:

- <code title="delete /accounts/{account_id}/cloudforce-one/events/relate/{event_id}">client.cloudforceOne.threatEvents.relate.<a href="./src/resources/cloudforce-one/threat-events/relate.ts">delete</a>(eventId, { ...params }) -> RelateDeleteResponse</code>

### Tags

Types:

- <code><a href="./src/resources/cloudforce-one/threat-events/tags.ts">TagCreateResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/cloudforce-one/events/tags/create">client.cloudforceOne.threatEvents.tags.<a href="./src/resources/cloudforce-one/threat-events/tags.ts">create</a>({ ...params }) -> TagCreateResponse</code>

### EventTags

Types:

- <code><a href="./src/resources/cloudforce-one/threat-events/event-tags.ts">EventTagCreateResponse</a></code>
- <code><a href="./src/resources/cloudforce-one/threat-events/event-tags.ts">EventTagDeleteResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/cloudforce-one/events/event_tag/{event_id}/create">client.cloudforceOne.threatEvents.eventTags.<a href="./src/resources/cloudforce-one/threat-events/event-tags.ts">create</a>(eventId, { ...params }) -> EventTagCreateResponse</code>
- <code title="delete /accounts/{account_id}/cloudforce-one/events/event_tag/{event_id}">client.cloudforceOne.threatEvents.eventTags.<a href="./src/resources/cloudforce-one/threat-events/event-tags.ts">delete</a>(eventId, { ...params }) -> EventTagDeleteResponse</code>

### TargetIndustries

Types:

- <code><a href="./src/resources/cloudforce-one/threat-events/target-industries.ts">TargetIndustryListResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/cloudforce-one/events/targetIndustries">client.cloudforceOne.threatEvents.targetIndustries.<a href="./src/resources/cloudforce-one/threat-events/target-industries.ts">list</a>({ ...params }) -> TargetIndustryListResponse</code>

### Insights

Types:

- <code><a href="./src/resources/cloudforce-one/threat-events/insights.ts">InsightCreateResponse</a></code>
- <code><a href="./src/resources/cloudforce-one/threat-events/insights.ts">InsightDeleteResponse</a></code>
- <code><a href="./src/resources/cloudforce-one/threat-events/insights.ts">InsightEditResponse</a></code>
- <code><a href="./src/resources/cloudforce-one/threat-events/insights.ts">InsightGetResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/cloudforce-one/events/{event_id}/insight/create">client.cloudforceOne.threatEvents.insights.<a href="./src/resources/cloudforce-one/threat-events/insights.ts">create</a>(eventId, { ...params }) -> InsightCreateResponse</code>
- <code title="delete /accounts/{account_id}/cloudforce-one/events/{event_id}/insight/{insight_id}">client.cloudforceOne.threatEvents.insights.<a href="./src/resources/cloudforce-one/threat-events/insights.ts">delete</a>(eventId, insightId, { ...params }) -> InsightDeleteResponse</code>
- <code title="patch /accounts/{account_id}/cloudforce-one/events/{event_id}/insight/{insight_id}">client.cloudforceOne.threatEvents.insights.<a href="./src/resources/cloudforce-one/threat-events/insights.ts">edit</a>(eventId, insightId, { ...params }) -> InsightEditResponse</code>
- <code title="get /accounts/{account_id}/cloudforce-one/events/{event_id}/insight/{insight_id}">client.cloudforceOne.threatEvents.insights.<a href="./src/resources/cloudforce-one/threat-events/insights.ts">get</a>(eventId, insightId, { ...params }) -> InsightGetResponse</code>

# AIGateway

Types:

- <code><a href="./src/resources/ai-gateway/ai-gateway.ts">AIGatewayCreateResponse</a></code>
- <code><a href="./src/resources/ai-gateway/ai-gateway.ts">AIGatewayUpdateResponse</a></code>
- <code><a href="./src/resources/ai-gateway/ai-gateway.ts">AIGatewayListResponse</a></code>
- <code><a href="./src/resources/ai-gateway/ai-gateway.ts">AIGatewayDeleteResponse</a></code>
- <code><a href="./src/resources/ai-gateway/ai-gateway.ts">AIGatewayGetResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/ai-gateway/gateways">client.aiGateway.<a href="./src/resources/ai-gateway/ai-gateway.ts">create</a>({ ...params }) -> AIGatewayCreateResponse</code>
- <code title="put /accounts/{account_id}/ai-gateway/gateways/{id}">client.aiGateway.<a href="./src/resources/ai-gateway/ai-gateway.ts">update</a>(id, { ...params }) -> AIGatewayUpdateResponse</code>
- <code title="get /accounts/{account_id}/ai-gateway/gateways">client.aiGateway.<a href="./src/resources/ai-gateway/ai-gateway.ts">list</a>({ ...params }) -> AIGatewayListResponsesV4PagePaginationArray</code>
- <code title="delete /accounts/{account_id}/ai-gateway/gateways/{id}">client.aiGateway.<a href="./src/resources/ai-gateway/ai-gateway.ts">delete</a>(id, { ...params }) -> AIGatewayDeleteResponse</code>
- <code title="get /accounts/{account_id}/ai-gateway/gateways/{id}">client.aiGateway.<a href="./src/resources/ai-gateway/ai-gateway.ts">get</a>(id, { ...params }) -> AIGatewayGetResponse</code>

## EvaluationTypes

Types:

- <code><a href="./src/resources/ai-gateway/evaluation-types.ts">EvaluationTypeListResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/ai-gateway/evaluation-types">client.aiGateway.evaluationTypes.<a href="./src/resources/ai-gateway/evaluation-types.ts">list</a>({ ...params }) -> EvaluationTypeListResponsesV4PagePaginationArray</code>

## Logs

Types:

- <code><a href="./src/resources/ai-gateway/logs.ts">LogListResponse</a></code>
- <code><a href="./src/resources/ai-gateway/logs.ts">LogDeleteResponse</a></code>
- <code><a href="./src/resources/ai-gateway/logs.ts">LogEditResponse</a></code>
- <code><a href="./src/resources/ai-gateway/logs.ts">LogGetResponse</a></code>
- <code><a href="./src/resources/ai-gateway/logs.ts">LogRequestResponse</a></code>
- <code><a href="./src/resources/ai-gateway/logs.ts">LogResponseResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/ai-gateway/gateways/{gateway_id}/logs">client.aiGateway.logs.<a href="./src/resources/ai-gateway/logs.ts">list</a>(gatewayId, { ...params }) -> LogListResponsesV4PagePaginationArray</code>
- <code title="delete /accounts/{account_id}/ai-gateway/gateways/{gateway_id}/logs">client.aiGateway.logs.<a href="./src/resources/ai-gateway/logs.ts">delete</a>(gatewayId, { ...params }) -> LogDeleteResponse</code>
- <code title="patch /accounts/{account_id}/ai-gateway/gateways/{gateway_id}/logs/{id}">client.aiGateway.logs.<a href="./src/resources/ai-gateway/logs.ts">edit</a>(gatewayId, id, { ...params }) -> LogEditResponse</code>
- <code title="get /accounts/{account_id}/ai-gateway/gateways/{gateway_id}/logs/{id}">client.aiGateway.logs.<a href="./src/resources/ai-gateway/logs.ts">get</a>(gatewayId, id, { ...params }) -> LogGetResponse</code>
- <code title="get /accounts/{account_id}/ai-gateway/gateways/{gateway_id}/logs/{id}/request">client.aiGateway.logs.<a href="./src/resources/ai-gateway/logs.ts">request</a>(gatewayId, id, { ...params }) -> unknown</code>
- <code title="get /accounts/{account_id}/ai-gateway/gateways/{gateway_id}/logs/{id}/response">client.aiGateway.logs.<a href="./src/resources/ai-gateway/logs.ts">response</a>(gatewayId, id, { ...params }) -> unknown</code>

## Datasets

Types:

- <code><a href="./src/resources/ai-gateway/datasets.ts">DatasetCreateResponse</a></code>
- <code><a href="./src/resources/ai-gateway/datasets.ts">DatasetUpdateResponse</a></code>
- <code><a href="./src/resources/ai-gateway/datasets.ts">DatasetListResponse</a></code>
- <code><a href="./src/resources/ai-gateway/datasets.ts">DatasetDeleteResponse</a></code>
- <code><a href="./src/resources/ai-gateway/datasets.ts">DatasetGetResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/ai-gateway/gateways/{gateway_id}/datasets">client.aiGateway.datasets.<a href="./src/resources/ai-gateway/datasets.ts">create</a>(gatewayId, { ...params }) -> DatasetCreateResponse</code>
- <code title="put /accounts/{account_id}/ai-gateway/gateways/{gateway_id}/datasets/{id}">client.aiGateway.datasets.<a href="./src/resources/ai-gateway/datasets.ts">update</a>(gatewayId, id, { ...params }) -> DatasetUpdateResponse</code>
- <code title="get /accounts/{account_id}/ai-gateway/gateways/{gateway_id}/datasets">client.aiGateway.datasets.<a href="./src/resources/ai-gateway/datasets.ts">list</a>(gatewayId, { ...params }) -> DatasetListResponsesV4PagePaginationArray</code>
- <code title="delete /accounts/{account_id}/ai-gateway/gateways/{gateway_id}/datasets/{id}">client.aiGateway.datasets.<a href="./src/resources/ai-gateway/datasets.ts">delete</a>(gatewayId, id, { ...params }) -> DatasetDeleteResponse</code>
- <code title="get /accounts/{account_id}/ai-gateway/gateways/{gateway_id}/datasets/{id}">client.aiGateway.datasets.<a href="./src/resources/ai-gateway/datasets.ts">get</a>(gatewayId, id, { ...params }) -> DatasetGetResponse</code>

## Evaluations

Types:

- <code><a href="./src/resources/ai-gateway/evaluations.ts">EvaluationCreateResponse</a></code>
- <code><a href="./src/resources/ai-gateway/evaluations.ts">EvaluationListResponse</a></code>
- <code><a href="./src/resources/ai-gateway/evaluations.ts">EvaluationDeleteResponse</a></code>
- <code><a href="./src/resources/ai-gateway/evaluations.ts">EvaluationGetResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/ai-gateway/gateways/{gateway_id}/evaluations">client.aiGateway.evaluations.<a href="./src/resources/ai-gateway/evaluations.ts">create</a>(gatewayId, { ...params }) -> EvaluationCreateResponse</code>
- <code title="get /accounts/{account_id}/ai-gateway/gateways/{gateway_id}/evaluations">client.aiGateway.evaluations.<a href="./src/resources/ai-gateway/evaluations.ts">list</a>(gatewayId, { ...params }) -> EvaluationListResponsesV4PagePaginationArray</code>
- <code title="delete /accounts/{account_id}/ai-gateway/gateways/{gateway_id}/evaluations/{id}">client.aiGateway.evaluations.<a href="./src/resources/ai-gateway/evaluations.ts">delete</a>(gatewayId, id, { ...params }) -> EvaluationDeleteResponse</code>
- <code title="get /accounts/{account_id}/ai-gateway/gateways/{gateway_id}/evaluations/{id}">client.aiGateway.evaluations.<a href="./src/resources/ai-gateway/evaluations.ts">get</a>(gatewayId, id, { ...params }) -> EvaluationGetResponse</code>

## URLs

Types:

- <code><a href="./src/resources/ai-gateway/urls.ts">URLGetResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/ai-gateway/gateways/{gateway_id}/url/{provider}">client.aiGateway.urls.<a href="./src/resources/ai-gateway/urls.ts">get</a>(gatewayId, provider, { ...params }) -> URLGetResponse</code>

# IAM

## PermissionGroups

Types:

- <code><a href="./src/resources/iam/permission-groups.ts">PermissionGroupListResponse</a></code>
- <code><a href="./src/resources/iam/permission-groups.ts">PermissionGroupGetResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/iam/permission_groups">client.iam.permissionGroups.<a href="./src/resources/iam/permission-groups.ts">list</a>({ ...params }) -> PermissionGroupListResponsesV4PagePaginationArray</code>
- <code title="get /accounts/{account_id}/iam/permission_groups/{permission_group_id}">client.iam.permissionGroups.<a href="./src/resources/iam/permission-groups.ts">get</a>(permissionGroupId, { ...params }) -> PermissionGroupGetResponse</code>

## ResourceGroups

Types:

- <code><a href="./src/resources/iam/resource-groups.ts">ResourceGroupCreateResponse</a></code>
- <code><a href="./src/resources/iam/resource-groups.ts">ResourceGroupUpdateResponse</a></code>
- <code><a href="./src/resources/iam/resource-groups.ts">ResourceGroupListResponse</a></code>
- <code><a href="./src/resources/iam/resource-groups.ts">ResourceGroupDeleteResponse</a></code>
- <code><a href="./src/resources/iam/resource-groups.ts">ResourceGroupGetResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/iam/resource_groups">client.iam.resourceGroups.<a href="./src/resources/iam/resource-groups.ts">create</a>({ ...params }) -> ResourceGroupCreateResponse</code>
- <code title="put /accounts/{account_id}/iam/resource_groups/{resource_group_id}">client.iam.resourceGroups.<a href="./src/resources/iam/resource-groups.ts">update</a>(resourceGroupId, { ...params }) -> ResourceGroupUpdateResponse</code>
- <code title="get /accounts/{account_id}/iam/resource_groups">client.iam.resourceGroups.<a href="./src/resources/iam/resource-groups.ts">list</a>({ ...params }) -> ResourceGroupListResponsesV4PagePaginationArray</code>
- <code title="delete /accounts/{account_id}/iam/resource_groups/{resource_group_id}">client.iam.resourceGroups.<a href="./src/resources/iam/resource-groups.ts">delete</a>(resourceGroupId, { ...params }) -> ResourceGroupDeleteResponse | null</code>
- <code title="get /accounts/{account_id}/iam/resource_groups/{resource_group_id}">client.iam.resourceGroups.<a href="./src/resources/iam/resource-groups.ts">get</a>(resourceGroupId, { ...params }) -> ResourceGroupGetResponse</code>

## UserGroups

Types:

- <code><a href="./src/resources/iam/user-groups/user-groups.ts">UserGroupCreateResponse</a></code>
- <code><a href="./src/resources/iam/user-groups/user-groups.ts">UserGroupUpdateResponse</a></code>
- <code><a href="./src/resources/iam/user-groups/user-groups.ts">UserGroupListResponse</a></code>
- <code><a href="./src/resources/iam/user-groups/user-groups.ts">UserGroupDeleteResponse</a></code>
- <code><a href="./src/resources/iam/user-groups/user-groups.ts">UserGroupGetResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/iam/user_groups">client.iam.userGroups.<a href="./src/resources/iam/user-groups/user-groups.ts">create</a>({ ...params }) -> UserGroupCreateResponse</code>
- <code title="put /accounts/{account_id}/iam/user_groups/{user_group_id}">client.iam.userGroups.<a href="./src/resources/iam/user-groups/user-groups.ts">update</a>(userGroupId, { ...params }) -> UserGroupUpdateResponse</code>
- <code title="get /accounts/{account_id}/iam/user_groups">client.iam.userGroups.<a href="./src/resources/iam/user-groups/user-groups.ts">list</a>({ ...params }) -> UserGroupListResponsesV4PagePaginationArray</code>
- <code title="delete /accounts/{account_id}/iam/user_groups/{user_group_id}">client.iam.userGroups.<a href="./src/resources/iam/user-groups/user-groups.ts">delete</a>(userGroupId, { ...params }) -> UserGroupDeleteResponse | null</code>
- <code title="get /accounts/{account_id}/iam/user_groups/{user_group_id}">client.iam.userGroups.<a href="./src/resources/iam/user-groups/user-groups.ts">get</a>(userGroupId, { ...params }) -> UserGroupGetResponse</code>

### Members

Types:

- <code><a href="./src/resources/iam/user-groups/members.ts">MemberCreateResponse</a></code>
- <code><a href="./src/resources/iam/user-groups/members.ts">MemberUpdateResponse</a></code>
- <code><a href="./src/resources/iam/user-groups/members.ts">MemberListResponse</a></code>
- <code><a href="./src/resources/iam/user-groups/members.ts">MemberDeleteResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/iam/user_groups/{user_group_id}/members">client.iam.userGroups.members.<a href="./src/resources/iam/user-groups/members.ts">create</a>(userGroupId, [ ...body ]) -> MemberCreateResponse</code>
- <code title="put /accounts/{account_id}/iam/user_groups/{user_group_id}/members">client.iam.userGroups.members.<a href="./src/resources/iam/user-groups/members.ts">update</a>(userGroupId, [ ...body ]) -> MemberUpdateResponsesSinglePage</code>
- <code title="get /accounts/{account_id}/iam/user_groups/{user_group_id}/members">client.iam.userGroups.members.<a href="./src/resources/iam/user-groups/members.ts">list</a>(userGroupId, { ...params }) -> MemberListResponsesV4PagePaginationArray</code>
- <code title="delete /accounts/{account_id}/iam/user_groups/{user_group_id}/members/{member_id}">client.iam.userGroups.members.<a href="./src/resources/iam/user-groups/members.ts">delete</a>(userGroupId, memberId, { ...params }) -> MemberDeleteResponse</code>

# CloudConnector

## Rules

Types:

- <code><a href="./src/resources/cloud-connector/rules.ts">RuleUpdateResponse</a></code>
- <code><a href="./src/resources/cloud-connector/rules.ts">RuleListResponse</a></code>

Methods:

- <code title="put /zones/{zone_id}/cloud_connector/rules">client.cloudConnector.rules.<a href="./src/resources/cloud-connector/rules.ts">update</a>([ ...rules ]) -> RuleUpdateResponsesSinglePage</code>
- <code title="get /zones/{zone_id}/cloud_connector/rules">client.cloudConnector.rules.<a href="./src/resources/cloud-connector/rules.ts">list</a>({ ...params }) -> RuleListResponsesSinglePage</code>

# BotnetFeed

## ASN

Types:

- <code><a href="./src/resources/botnet-feed/asn.ts">ASNDayReportResponse</a></code>
- <code><a href="./src/resources/botnet-feed/asn.ts">ASNFullReportResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/botnet_feed/asn/{asn_id}/day_report">client.botnetFeed.asn.<a href="./src/resources/botnet-feed/asn.ts">dayReport</a>(asnId, { ...params }) -> ASNDayReportResponse</code>
- <code title="get /accounts/{account_id}/botnet_feed/asn/{asn_id}/full_report">client.botnetFeed.asn.<a href="./src/resources/botnet-feed/asn.ts">fullReport</a>(asnId, { ...params }) -> ASNFullReportResponse</code>

## Configs

### ASN

Types:

- <code><a href="./src/resources/botnet-feed/configs/asn.ts">ASNDeleteResponse</a></code>
- <code><a href="./src/resources/botnet-feed/configs/asn.ts">ASNGetResponse</a></code>

Methods:

- <code title="delete /accounts/{account_id}/botnet_feed/configs/asn/{asn_id}">client.botnetFeed.configs.asn.<a href="./src/resources/botnet-feed/configs/asn.ts">delete</a>(asnId, { ...params }) -> ASNDeleteResponse</code>
- <code title="get /accounts/{account_id}/botnet_feed/configs/asn">client.botnetFeed.configs.asn.<a href="./src/resources/botnet-feed/configs/asn.ts">get</a>({ ...params }) -> ASNGetResponse</code>

# SecurityTXT

Types:

- <code><a href="./src/resources/security-txt.ts">SecurityTXTUpdateResponse</a></code>
- <code><a href="./src/resources/security-txt.ts">SecurityTXTDeleteResponse</a></code>
- <code><a href="./src/resources/security-txt.ts">SecurityTXTGetResponse</a></code>

Methods:

- <code title="put /zones/{zone_id}/security-center/securitytxt">client.securityTXT.<a href="./src/resources/security-txt.ts">update</a>({ ...params }) -> SecurityTXTUpdateResponse</code>
- <code title="delete /zones/{zone_id}/security-center/securitytxt">client.securityTXT.<a href="./src/resources/security-txt.ts">delete</a>({ ...params }) -> SecurityTXTDeleteResponse</code>
- <code title="get /zones/{zone_id}/security-center/securitytxt">client.securityTXT.<a href="./src/resources/security-txt.ts">get</a>({ ...params }) -> SecurityTXTGetResponse</code>

# Workflows

Types:

- <code><a href="./src/resources/workflows/workflows.ts">WorkflowUpdateResponse</a></code>
- <code><a href="./src/resources/workflows/workflows.ts">WorkflowListResponse</a></code>
- <code><a href="./src/resources/workflows/workflows.ts">WorkflowDeleteResponse</a></code>
- <code><a href="./src/resources/workflows/workflows.ts">WorkflowGetResponse</a></code>

Methods:

- <code title="put /accounts/{account_id}/workflows/{workflow_name}">client.workflows.<a href="./src/resources/workflows/workflows.ts">update</a>(workflowName, { ...params }) -> WorkflowUpdateResponse</code>
- <code title="get /accounts/{account_id}/workflows">client.workflows.<a href="./src/resources/workflows/workflows.ts">list</a>({ ...params }) -> WorkflowListResponsesV4PagePaginationArray</code>
- <code title="delete /accounts/{account_id}/workflows/{workflow_name}">client.workflows.<a href="./src/resources/workflows/workflows.ts">delete</a>(workflowName, { ...params }) -> WorkflowDeleteResponse</code>
- <code title="get /accounts/{account_id}/workflows/{workflow_name}">client.workflows.<a href="./src/resources/workflows/workflows.ts">get</a>(workflowName, { ...params }) -> WorkflowGetResponse</code>

## Instances

Types:

- <code><a href="./src/resources/workflows/instances/instances.ts">InstanceCreateResponse</a></code>
- <code><a href="./src/resources/workflows/instances/instances.ts">InstanceListResponse</a></code>
- <code><a href="./src/resources/workflows/instances/instances.ts">InstanceBulkResponse</a></code>
- <code><a href="./src/resources/workflows/instances/instances.ts">InstanceGetResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/workflows/{workflow_name}/instances">client.workflows.instances.<a href="./src/resources/workflows/instances/instances.ts">create</a>(workflowName, { ...params }) -> InstanceCreateResponse</code>
- <code title="get /accounts/{account_id}/workflows/{workflow_name}/instances">client.workflows.instances.<a href="./src/resources/workflows/instances/instances.ts">list</a>(workflowName, { ...params }) -> InstanceListResponsesV4PagePaginationArray</code>
- <code title="post /accounts/{account_id}/workflows/{workflow_name}/instances/batch">client.workflows.instances.<a href="./src/resources/workflows/instances/instances.ts">bulk</a>(workflowName, [ ...body ]) -> InstanceBulkResponsesSinglePage</code>
- <code title="get /accounts/{account_id}/workflows/{workflow_name}/instances/{instance_id}">client.workflows.instances.<a href="./src/resources/workflows/instances/instances.ts">get</a>(workflowName, instanceId, { ...params }) -> InstanceGetResponse</code>

### Status

Types:

- <code><a href="./src/resources/workflows/instances/status.ts">StatusEditResponse</a></code>

Methods:

- <code title="patch /accounts/{account_id}/workflows/{workflow_name}/instances/{instance_id}/status">client.workflows.instances.status.<a href="./src/resources/workflows/instances/status.ts">edit</a>(workflowName, instanceId, { ...params }) -> StatusEditResponse</code>

### Events

Types:

- <code><a href="./src/resources/workflows/instances/events.ts">EventCreateResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/workflows/{workflow_name}/instances/{instance_id}/events/{event_type}">client.workflows.instances.events.<a href="./src/resources/workflows/instances/events.ts">create</a>(workflowName, instanceId, eventType, { ...params }) -> EventCreateResponse</code>

## Versions

Types:

- <code><a href="./src/resources/workflows/versions.ts">VersionListResponse</a></code>
- <code><a href="./src/resources/workflows/versions.ts">VersionGetResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/workflows/{workflow_name}/versions">client.workflows.versions.<a href="./src/resources/workflows/versions.ts">list</a>(workflowName, { ...params }) -> VersionListResponsesV4PagePaginationArray</code>
- <code title="get /accounts/{account_id}/workflows/{workflow_name}/versions/{version_id}">client.workflows.versions.<a href="./src/resources/workflows/versions.ts">get</a>(workflowName, versionId, { ...params }) -> VersionGetResponse</code>

# ResourceSharing

Types:

- <code><a href="./src/resources/resource-sharing/resource-sharing.ts">ResourceSharingCreateResponse</a></code>
- <code><a href="./src/resources/resource-sharing/resource-sharing.ts">ResourceSharingUpdateResponse</a></code>
- <code><a href="./src/resources/resource-sharing/resource-sharing.ts">ResourceSharingListResponse</a></code>
- <code><a href="./src/resources/resource-sharing/resource-sharing.ts">ResourceSharingDeleteResponse</a></code>
- <code><a href="./src/resources/resource-sharing/resource-sharing.ts">ResourceSharingGetResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/shares">client.resourceSharing.<a href="./src/resources/resource-sharing/resource-sharing.ts">create</a>({ ...params }) -> ResourceSharingCreateResponse</code>
- <code title="put /accounts/{account_id}/shares/{share_id}">client.resourceSharing.<a href="./src/resources/resource-sharing/resource-sharing.ts">update</a>(shareId, { ...params }) -> ResourceSharingUpdateResponse</code>
- <code title="get /accounts/{account_id}/shares">client.resourceSharing.<a href="./src/resources/resource-sharing/resource-sharing.ts">list</a>({ ...params }) -> ResourceSharingListResponsesV4PagePaginationArray</code>
- <code title="delete /accounts/{account_id}/shares/{share_id}">client.resourceSharing.<a href="./src/resources/resource-sharing/resource-sharing.ts">delete</a>(shareId, { ...params }) -> ResourceSharingDeleteResponse</code>
- <code title="get /accounts/{account_id}/shares/{share_id}">client.resourceSharing.<a href="./src/resources/resource-sharing/resource-sharing.ts">get</a>(shareId, { ...params }) -> ResourceSharingGetResponse</code>

## Recipients

Types:

- <code><a href="./src/resources/resource-sharing/recipients.ts">RecipientCreateResponse</a></code>
- <code><a href="./src/resources/resource-sharing/recipients.ts">RecipientListResponse</a></code>
- <code><a href="./src/resources/resource-sharing/recipients.ts">RecipientDeleteResponse</a></code>
- <code><a href="./src/resources/resource-sharing/recipients.ts">RecipientGetResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/shares/{share_id}/recipients">client.resourceSharing.recipients.<a href="./src/resources/resource-sharing/recipients.ts">create</a>(shareId, { ...params }) -> RecipientCreateResponse</code>
- <code title="get /accounts/{account_id}/shares/{share_id}/recipients">client.resourceSharing.recipients.<a href="./src/resources/resource-sharing/recipients.ts">list</a>(shareId, { ...params }) -> RecipientListResponsesV4PagePaginationArray</code>
- <code title="delete /accounts/{account_id}/shares/{share_id}/recipients/{recipient_id}">client.resourceSharing.recipients.<a href="./src/resources/resource-sharing/recipients.ts">delete</a>(shareId, recipientId, { ...params }) -> RecipientDeleteResponse</code>
- <code title="get /accounts/{account_id}/shares/{share_id}/recipients/{recipient_id}">client.resourceSharing.recipients.<a href="./src/resources/resource-sharing/recipients.ts">get</a>(shareId, recipientId, { ...params }) -> RecipientGetResponse</code>

## Resources

Types:

- <code><a href="./src/resources/resource-sharing/resources.ts">ResourceCreateResponse</a></code>
- <code><a href="./src/resources/resource-sharing/resources.ts">ResourceUpdateResponse</a></code>
- <code><a href="./src/resources/resource-sharing/resources.ts">ResourceListResponse</a></code>
- <code><a href="./src/resources/resource-sharing/resources.ts">ResourceDeleteResponse</a></code>
- <code><a href="./src/resources/resource-sharing/resources.ts">ResourceGetResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/shares/{share_id}/resources">client.resourceSharing.resources.<a href="./src/resources/resource-sharing/resources.ts">create</a>(shareId, { ...params }) -> ResourceCreateResponse</code>
- <code title="put /accounts/{account_id}/shares/{share_id}/resources/{resource_id}">client.resourceSharing.resources.<a href="./src/resources/resource-sharing/resources.ts">update</a>(shareId, resourceId, { ...params }) -> ResourceUpdateResponse</code>
- <code title="get /accounts/{account_id}/shares/{share_id}/resources">client.resourceSharing.resources.<a href="./src/resources/resource-sharing/resources.ts">list</a>(shareId, { ...params }) -> ResourceListResponsesV4PagePaginationArray</code>
- <code title="delete /accounts/{account_id}/shares/{share_id}/resources/{resource_id}">client.resourceSharing.resources.<a href="./src/resources/resource-sharing/resources.ts">delete</a>(shareId, resourceId, { ...params }) -> ResourceDeleteResponse</code>
- <code title="get /accounts/{account_id}/shares/{share_id}/resources/{resource_id}">client.resourceSharing.resources.<a href="./src/resources/resource-sharing/resources.ts">get</a>(shareId, resourceId, { ...params }) -> ResourceGetResponse</code>

# LeakedCredentialChecks

Types:

- <code><a href="./src/resources/leaked-credential-checks/leaked-credential-checks.ts">LeakedCredentialCheckCreateResponse</a></code>
- <code><a href="./src/resources/leaked-credential-checks/leaked-credential-checks.ts">LeakedCredentialCheckGetResponse</a></code>

Methods:

- <code title="post /zones/{zone_id}/leaked-credential-checks">client.leakedCredentialChecks.<a href="./src/resources/leaked-credential-checks/leaked-credential-checks.ts">create</a>({ ...params }) -> LeakedCredentialCheckCreateResponse</code>
- <code title="get /zones/{zone_id}/leaked-credential-checks">client.leakedCredentialChecks.<a href="./src/resources/leaked-credential-checks/leaked-credential-checks.ts">get</a>({ ...params }) -> LeakedCredentialCheckGetResponse</code>

## Detections

Types:

- <code><a href="./src/resources/leaked-credential-checks/detections.ts">DetectionCreateResponse</a></code>
- <code><a href="./src/resources/leaked-credential-checks/detections.ts">DetectionUpdateResponse</a></code>
- <code><a href="./src/resources/leaked-credential-checks/detections.ts">DetectionListResponse</a></code>
- <code><a href="./src/resources/leaked-credential-checks/detections.ts">DetectionDeleteResponse</a></code>

Methods:

- <code title="post /zones/{zone_id}/leaked-credential-checks/detections">client.leakedCredentialChecks.detections.<a href="./src/resources/leaked-credential-checks/detections.ts">create</a>({ ...params }) -> DetectionCreateResponse</code>
- <code title="put /zones/{zone_id}/leaked-credential-checks/detections/{detection_id}">client.leakedCredentialChecks.detections.<a href="./src/resources/leaked-credential-checks/detections.ts">update</a>(detectionId, { ...params }) -> DetectionUpdateResponse</code>
- <code title="get /zones/{zone_id}/leaked-credential-checks/detections">client.leakedCredentialChecks.detections.<a href="./src/resources/leaked-credential-checks/detections.ts">list</a>({ ...params }) -> DetectionListResponsesSinglePage</code>
- <code title="delete /zones/{zone_id}/leaked-credential-checks/detections/{detection_id}">client.leakedCredentialChecks.detections.<a href="./src/resources/leaked-credential-checks/detections.ts">delete</a>(detectionId, { ...params }) -> DetectionDeleteResponse</code>

# ContentScanning

Types:

- <code><a href="./src/resources/content-scanning/content-scanning.ts">ContentScanningDisableResponse</a></code>
- <code><a href="./src/resources/content-scanning/content-scanning.ts">ContentScanningEnableResponse</a></code>

Methods:

- <code title="post /zones/{zone_id}/content-upload-scan/disable">client.contentScanning.<a href="./src/resources/content-scanning/content-scanning.ts">disable</a>({ ...params }) -> ContentScanningDisableResponse</code>
- <code title="post /zones/{zone_id}/content-upload-scan/enable">client.contentScanning.<a href="./src/resources/content-scanning/content-scanning.ts">enable</a>({ ...params }) -> ContentScanningEnableResponse</code>

## Payloads

Types:

- <code><a href="./src/resources/content-scanning/payloads.ts">PayloadCreateResponse</a></code>
- <code><a href="./src/resources/content-scanning/payloads.ts">PayloadListResponse</a></code>
- <code><a href="./src/resources/content-scanning/payloads.ts">PayloadDeleteResponse</a></code>

Methods:

- <code title="post /zones/{zone_id}/content-upload-scan/payloads">client.contentScanning.payloads.<a href="./src/resources/content-scanning/payloads.ts">create</a>([ ...body ]) -> PayloadCreateResponsesSinglePage</code>
- <code title="get /zones/{zone_id}/content-upload-scan/payloads">client.contentScanning.payloads.<a href="./src/resources/content-scanning/payloads.ts">list</a>({ ...params }) -> PayloadListResponsesSinglePage</code>
- <code title="delete /zones/{zone_id}/content-upload-scan/payloads/{expression_id}">client.contentScanning.payloads.<a href="./src/resources/content-scanning/payloads.ts">delete</a>(expressionId, { ...params }) -> PayloadDeleteResponsesSinglePage</code>

## Settings

Types:

- <code><a href="./src/resources/content-scanning/settings.ts">SettingGetResponse</a></code>

Methods:

- <code title="get /zones/{zone_id}/content-upload-scan/settings">client.contentScanning.settings.<a href="./src/resources/content-scanning/settings.ts">get</a>({ ...params }) -> SettingGetResponse</code>

# AbuseReports

Types:

- <code><a href="./src/resources/abuse-reports.ts">AbuseReportCreateResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/abuse-reports/{report_type}">client.abuseReports.<a href="./src/resources/abuse-reports.ts">create</a>(reportType, { ...params }) -> AbuseReportCreateResponse</code>

# AI

Types:

- <code><a href="./src/resources/ai/ai.ts">AIRunResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/ai/run/{model_name}">client.ai.<a href="./src/resources/ai/ai.ts">run</a>(modelName, { ...params }) -> AIRunResponse</code>

## Finetunes

Types:

- <code><a href="./src/resources/ai/finetunes/finetunes.ts">FinetuneCreateResponse</a></code>
- <code><a href="./src/resources/ai/finetunes/finetunes.ts">FinetuneListResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/ai/finetunes">client.ai.finetunes.<a href="./src/resources/ai/finetunes/finetunes.ts">create</a>({ ...params }) -> FinetuneCreateResponse</code>
- <code title="get /accounts/{account_id}/ai/finetunes">client.ai.finetunes.<a href="./src/resources/ai/finetunes/finetunes.ts">list</a>({ ...params }) -> FinetuneListResponse</code>

### Assets

Types:

- <code><a href="./src/resources/ai/finetunes/assets.ts">AssetCreateResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/ai/finetunes/{finetune_id}/finetune-assets">client.ai.finetunes.assets.<a href="./src/resources/ai/finetunes/assets.ts">create</a>(finetuneId, { ...params }) -> AssetCreateResponse</code>

### Public

Types:

- <code><a href="./src/resources/ai/finetunes/public.ts">PublicListResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/ai/finetunes/public">client.ai.finetunes.public.<a href="./src/resources/ai/finetunes/public.ts">list</a>({ ...params }) -> PublicListResponsesSinglePage</code>

## Authors

Types:

- <code><a href="./src/resources/ai/authors.ts">AuthorListResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/ai/authors/search">client.ai.authors.<a href="./src/resources/ai/authors.ts">list</a>({ ...params }) -> AuthorListResponsesSinglePage</code>

## Tasks

Types:

- <code><a href="./src/resources/ai/tasks.ts">TaskListResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/ai/tasks/search">client.ai.tasks.<a href="./src/resources/ai/tasks.ts">list</a>({ ...params }) -> TaskListResponsesSinglePage</code>

## Models

Types:

- <code><a href="./src/resources/ai/models/models.ts">ModelListResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/ai/models/search">client.ai.models.<a href="./src/resources/ai/models/models.ts">list</a>({ ...params }) -> ModelListResponsesV4PagePaginationArray</code>

### Schema

Types:

- <code><a href="./src/resources/ai/models/schema.ts">SchemaGetResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/ai/models/schema">client.ai.models.schema.<a href="./src/resources/ai/models/schema.ts">get</a>({ ...params }) -> SchemaGetResponse</code>

# SecurityCenter

## Insights

Types:

- <code><a href="./src/resources/security-center/insights/insights.ts">InsightListResponse</a></code>
- <code><a href="./src/resources/security-center/insights/insights.ts">InsightDismissResponse</a></code>

Methods:

- <code title="get /{accounts_or_zones}/{account_or_zone_id}/security-center/insights">client.securityCenter.insights.<a href="./src/resources/security-center/insights/insights.ts">list</a>({ ...params }) -> InsightListResponsesV4PagePagination</code>
- <code title="put /{accounts_or_zones}/{account_or_zone_id}/security-center/insights/{issue_id}/dismiss">client.securityCenter.insights.<a href="./src/resources/security-center/insights/insights.ts">dismiss</a>(issueId, { ...params }) -> InsightDismissResponse</code>

### Class

Types:

- <code><a href="./src/resources/security-center/insights/class.ts">ClassGetResponse</a></code>

Methods:

- <code title="get /{accounts_or_zones}/{account_or_zone_id}/security-center/insights/class">client.securityCenter.insights.class.<a href="./src/resources/security-center/insights/class.ts">get</a>({ ...params }) -> ClassGetResponse</code>

### Severity

Types:

- <code><a href="./src/resources/security-center/insights/severity.ts">SeverityGetResponse</a></code>

Methods:

- <code title="get /{accounts_or_zones}/{account_or_zone_id}/security-center/insights/severity">client.securityCenter.insights.severity.<a href="./src/resources/security-center/insights/severity.ts">get</a>({ ...params }) -> SeverityGetResponse</code>

### Type

Types:

- <code><a href="./src/resources/security-center/insights/type.ts">TypeGetResponse</a></code>

Methods:

- <code title="get /{accounts_or_zones}/{account_or_zone_id}/security-center/insights/type">client.securityCenter.insights.type.<a href="./src/resources/security-center/insights/type.ts">get</a>({ ...params }) -> TypeGetResponse</code>

# BrowserRendering

## Content

Types:

- <code><a href="./src/resources/browser-rendering/content.ts">ContentCreateResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/browser-rendering/content">client.browserRendering.content.<a href="./src/resources/browser-rendering/content.ts">create</a>({ ...params }) -> ContentCreateResponse</code>

## PDF

Methods:

- <code title="post /accounts/{account_id}/browser-rendering/pdf">client.browserRendering.pdf.<a href="./src/resources/browser-rendering/pdf.ts">create</a>({ ...params }) -> Response</code>

## Scrape

Types:

- <code><a href="./src/resources/browser-rendering/scrape.ts">ScrapeCreateResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/browser-rendering/scrape">client.browserRendering.scrape.<a href="./src/resources/browser-rendering/scrape.ts">create</a>({ ...params }) -> ScrapeCreateResponse</code>

## Screenshot

Types:

- <code><a href="./src/resources/browser-rendering/screenshot.ts">ScreenshotCreateResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/browser-rendering/screenshot">client.browserRendering.screenshot.<a href="./src/resources/browser-rendering/screenshot.ts">create</a>({ ...params }) -> ScreenshotCreateResponse</code>

## Snapshot

Types:

- <code><a href="./src/resources/browser-rendering/snapshot.ts">SnapshotCreateResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/browser-rendering/snapshot">client.browserRendering.snapshot.<a href="./src/resources/browser-rendering/snapshot.ts">create</a>({ ...params }) -> SnapshotCreateResponse</code>

## Json

Types:

- <code><a href="./src/resources/browser-rendering/json.ts">JsonCreateResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/browser-rendering/json">client.browserRendering.json.<a href="./src/resources/browser-rendering/json.ts">create</a>({ ...params }) -> JsonCreateResponse</code>

## Links

Types:

- <code><a href="./src/resources/browser-rendering/links.ts">LinkCreateResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/browser-rendering/links">client.browserRendering.links.<a href="./src/resources/browser-rendering/links.ts">create</a>({ ...params }) -> LinkCreateResponse</code>

## Markdown

Types:

- <code><a href="./src/resources/browser-rendering/markdown.ts">MarkdownCreateResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/browser-rendering/markdown">client.browserRendering.markdown.<a href="./src/resources/browser-rendering/markdown.ts">create</a>({ ...params }) -> MarkdownCreateResponse</code>

# CustomPages

Types:

- <code><a href="./src/resources/custom-pages.ts">CustomPageUpdateResponse</a></code>
- <code><a href="./src/resources/custom-pages.ts">CustomPageListResponse</a></code>
- <code><a href="./src/resources/custom-pages.ts">CustomPageGetResponse</a></code>

Methods:

- <code title="put /{accounts_or_zones}/{account_or_zone_id}/custom_pages/{identifier}">client.customPages.<a href="./src/resources/custom-pages.ts">update</a>(identifier, { ...params }) -> CustomPageUpdateResponse | null</code>
- <code title="get /{accounts_or_zones}/{account_or_zone_id}/custom_pages">client.customPages.<a href="./src/resources/custom-pages.ts">list</a>({ ...params }) -> CustomPageListResponsesSinglePage</code>
- <code title="get /{accounts_or_zones}/{account_or_zone_id}/custom_pages/{identifier}">client.customPages.<a href="./src/resources/custom-pages.ts">get</a>(identifier, { ...params }) -> CustomPageGetResponse | null</code>

# SecretsStore

## Stores

Types:

- <code><a href="./src/resources/secrets-store/stores/stores.ts">StoreCreateResponse</a></code>
- <code><a href="./src/resources/secrets-store/stores/stores.ts">StoreListResponse</a></code>
- <code><a href="./src/resources/secrets-store/stores/stores.ts">StoreDeleteResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/secrets_store/stores">client.secretsStore.stores.<a href="./src/resources/secrets-store/stores/stores.ts">create</a>([ ...body ]) -> StoreCreateResponsesSinglePage</code>
- <code title="get /accounts/{account_id}/secrets_store/stores">client.secretsStore.stores.<a href="./src/resources/secrets-store/stores/stores.ts">list</a>({ ...params }) -> StoreListResponsesV4PagePaginationArray</code>
- <code title="delete /accounts/{account_id}/secrets_store/stores/{store_id}">client.secretsStore.stores.<a href="./src/resources/secrets-store/stores/stores.ts">delete</a>(storeId, { ...params }) -> StoreDeleteResponse</code>

### Secrets

Types:

- <code><a href="./src/resources/secrets-store/stores/secrets.ts">SecretCreateResponse</a></code>
- <code><a href="./src/resources/secrets-store/stores/secrets.ts">SecretListResponse</a></code>
- <code><a href="./src/resources/secrets-store/stores/secrets.ts">SecretDeleteResponse</a></code>
- <code><a href="./src/resources/secrets-store/stores/secrets.ts">SecretBulkDeleteResponse</a></code>
- <code><a href="./src/resources/secrets-store/stores/secrets.ts">SecretDuplicateResponse</a></code>
- <code><a href="./src/resources/secrets-store/stores/secrets.ts">SecretEditResponse</a></code>
- <code><a href="./src/resources/secrets-store/stores/secrets.ts">SecretGetResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/secrets_store/stores/{store_id}/secrets">client.secretsStore.stores.secrets.<a href="./src/resources/secrets-store/stores/secrets.ts">create</a>(storeId, [ ...body ]) -> SecretCreateResponsesSinglePage</code>
- <code title="get /accounts/{account_id}/secrets_store/stores/{store_id}/secrets">client.secretsStore.stores.secrets.<a href="./src/resources/secrets-store/stores/secrets.ts">list</a>(storeId, { ...params }) -> SecretListResponsesV4PagePaginationArray</code>
- <code title="delete /accounts/{account_id}/secrets_store/stores/{store_id}/secrets/{secret_id}">client.secretsStore.stores.secrets.<a href="./src/resources/secrets-store/stores/secrets.ts">delete</a>(storeId, secretId, { ...params }) -> SecretDeleteResponse</code>
- <code title="delete /accounts/{account_id}/secrets_store/stores/{store_id}/secrets">client.secretsStore.stores.secrets.<a href="./src/resources/secrets-store/stores/secrets.ts">bulkDelete</a>(storeId, { ...params }) -> SecretBulkDeleteResponsesSinglePage</code>
- <code title="post /accounts/{account_id}/secrets_store/stores/{store_id}/secrets/{secret_id}/duplicate">client.secretsStore.stores.secrets.<a href="./src/resources/secrets-store/stores/secrets.ts">duplicate</a>(storeId, secretId, { ...params }) -> SecretDuplicateResponse</code>
- <code title="patch /accounts/{account_id}/secrets_store/stores/{store_id}/secrets/{secret_id}">client.secretsStore.stores.secrets.<a href="./src/resources/secrets-store/stores/secrets.ts">edit</a>(storeId, secretId, { ...params }) -> SecretEditResponse</code>
- <code title="get /accounts/{account_id}/secrets_store/stores/{store_id}/secrets/{secret_id}">client.secretsStore.stores.secrets.<a href="./src/resources/secrets-store/stores/secrets.ts">get</a>(storeId, secretId, { ...params }) -> SecretGetResponse</code>

## Quota

Types:

- <code><a href="./src/resources/secrets-store/quota.ts">QuotaGetResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/secrets_store/quota">client.secretsStore.quota.<a href="./src/resources/secrets-store/quota.ts">get</a>({ ...params }) -> QuotaGetResponse</code>

# Pipelines

Types:

- <code><a href="./src/resources/pipelines.ts">PipelineCreateResponse</a></code>
- <code><a href="./src/resources/pipelines.ts">PipelineUpdateResponse</a></code>
- <code><a href="./src/resources/pipelines.ts">PipelineListResponse</a></code>
- <code><a href="./src/resources/pipelines.ts">PipelineGetResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/pipelines">client.pipelines.<a href="./src/resources/pipelines.ts">create</a>({ ...params }) -> PipelineCreateResponse</code>
- <code title="put /accounts/{account_id}/pipelines/{pipeline_name}">client.pipelines.<a href="./src/resources/pipelines.ts">update</a>(pipelineName, { ...params }) -> PipelineUpdateResponse</code>
- <code title="get /accounts/{account_id}/pipelines">client.pipelines.<a href="./src/resources/pipelines.ts">list</a>({ ...params }) -> PipelineListResponse</code>
- <code title="delete /accounts/{account_id}/pipelines/{pipeline_name}">client.pipelines.<a href="./src/resources/pipelines.ts">delete</a>(pipelineName, { ...params }) -> void</code>
- <code title="get /accounts/{account_id}/pipelines/{pipeline_name}">client.pipelines.<a href="./src/resources/pipelines.ts">get</a>(pipelineName, { ...params }) -> PipelineGetResponse</code>

# SchemaValidation

## Schemas

Types:

- <code><a href="./src/resources/schema-validation/schemas.ts">SchemaCreateResponse</a></code>
- <code><a href="./src/resources/schema-validation/schemas.ts">SchemaListResponse</a></code>
- <code><a href="./src/resources/schema-validation/schemas.ts">SchemaDeleteResponse</a></code>
- <code><a href="./src/resources/schema-validation/schemas.ts">SchemaEditResponse</a></code>
- <code><a href="./src/resources/schema-validation/schemas.ts">SchemaGetResponse</a></code>

Methods:

- <code title="post /zones/{zone_id}/schema_validation/schemas">client.schemaValidation.schemas.<a href="./src/resources/schema-validation/schemas.ts">create</a>({ ...params }) -> SchemaCreateResponse</code>
- <code title="get /zones/{zone_id}/schema_validation/schemas">client.schemaValidation.schemas.<a href="./src/resources/schema-validation/schemas.ts">list</a>({ ...params }) -> SchemaListResponsesV4PagePaginationArray</code>
- <code title="delete /zones/{zone_id}/schema_validation/schemas/{schema_id}">client.schemaValidation.schemas.<a href="./src/resources/schema-validation/schemas.ts">delete</a>(schemaId, { ...params }) -> SchemaDeleteResponse</code>
- <code title="patch /zones/{zone_id}/schema_validation/schemas/{schema_id}">client.schemaValidation.schemas.<a href="./src/resources/schema-validation/schemas.ts">edit</a>(schemaId, { ...params }) -> SchemaEditResponse</code>
- <code title="get /zones/{zone_id}/schema_validation/schemas/{schema_id}">client.schemaValidation.schemas.<a href="./src/resources/schema-validation/schemas.ts">get</a>(schemaId, { ...params }) -> SchemaGetResponse</code>

## Settings

Types:

- <code><a href="./src/resources/schema-validation/settings/settings.ts">SettingUpdateResponse</a></code>
- <code><a href="./src/resources/schema-validation/settings/settings.ts">SettingEditResponse</a></code>
- <code><a href="./src/resources/schema-validation/settings/settings.ts">SettingGetResponse</a></code>

Methods:

- <code title="put /zones/{zone_id}/schema_validation/settings">client.schemaValidation.settings.<a href="./src/resources/schema-validation/settings/settings.ts">update</a>({ ...params }) -> SettingUpdateResponse</code>
- <code title="patch /zones/{zone_id}/schema_validation/settings">client.schemaValidation.settings.<a href="./src/resources/schema-validation/settings/settings.ts">edit</a>({ ...params }) -> SettingEditResponse</code>
- <code title="get /zones/{zone_id}/schema_validation/settings">client.schemaValidation.settings.<a href="./src/resources/schema-validation/settings/settings.ts">get</a>({ ...params }) -> SettingGetResponse</code>

### Operations

Types:

- <code><a href="./src/resources/schema-validation/settings/operations.ts">OperationUpdateResponse</a></code>
- <code><a href="./src/resources/schema-validation/settings/operations.ts">OperationListResponse</a></code>
- <code><a href="./src/resources/schema-validation/settings/operations.ts">OperationDeleteResponse</a></code>
- <code><a href="./src/resources/schema-validation/settings/operations.ts">OperationBulkEditResponse</a></code>
- <code><a href="./src/resources/schema-validation/settings/operations.ts">OperationGetResponse</a></code>

Methods:

- <code title="put /zones/{zone_id}/schema_validation/settings/operations/{operation_id}">client.schemaValidation.settings.operations.<a href="./src/resources/schema-validation/settings/operations.ts">update</a>(operationId, { ...params }) -> OperationUpdateResponse</code>
- <code title="get /zones/{zone_id}/schema_validation/settings/operations">client.schemaValidation.settings.operations.<a href="./src/resources/schema-validation/settings/operations.ts">list</a>({ ...params }) -> OperationListResponsesV4PagePaginationArray</code>
- <code title="delete /zones/{zone_id}/schema_validation/settings/operations/{operation_id}">client.schemaValidation.settings.operations.<a href="./src/resources/schema-validation/settings/operations.ts">delete</a>(operationId, { ...params }) -> OperationDeleteResponse</code>
- <code title="patch /zones/{zone_id}/schema_validation/settings/operations">client.schemaValidation.settings.operations.<a href="./src/resources/schema-validation/settings/operations.ts">bulkEdit</a>({ ...params }) -> OperationBulkEditResponse</code>
- <code title="get /zones/{zone_id}/schema_validation/settings/operations/{operation_id}">client.schemaValidation.settings.operations.<a href="./src/resources/schema-validation/settings/operations.ts">get</a>(operationId, { ...params }) -> OperationGetResponse</code>
