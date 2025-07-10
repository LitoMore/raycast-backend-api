export type RaycastConfig = {
	accessToken?: string;
	token?: string;
	Token?: string;
};

export type Me = {
	id: string;
	name: string;
	handle: string;
	bio: string;
	twitter_handle: string;
	github_handle: string;
	location: string;
	initials: string;
	avatar_placeholder_color: string;
	slack_community_username: string;
	slack_community_user_id: string;
	created_at: string;
	website_anchor: string;
	website: string;
	username: string;
	avatar: string;
	client_flags: {
		pro_plan_walkthrough: boolean;
		raycast_notes_onboarding_note_created: boolean;
	};
	eligible_for_pro_features: boolean;
	eligible_for_ai: boolean;
	eligible_for_gpt4: boolean;
	eligible_for_developer_hub: boolean;
	eligible_for_bext: boolean;
	eligible_for_file_search_beta: boolean;
	eligible_for_ai_beta_features: boolean;
	eligible_for_raycast_notes_beta: boolean;
	eligible_for_hyper_key: boolean;
	eligible_for_windows: boolean;
	can_use_referral_codes: boolean;
	eligible_for_ai_citations: boolean;
	eligible_for_cloud_sync: boolean;
	eligible_for_application_settings: boolean;
	can_upgrade_to_pro: boolean;
	can_manage_billing: boolean;
	subscription: {
		id: string;
		status: string;
		interval: string;
		running: boolean;
		has_better_ai: boolean;
		trail_period_days?: number;
		trail_days_left?: number;
		canceled_at?: string;
		current_period_end?: number;
		can_update: boolean;
		can_cancel: boolean;
		can_update_interval: boolean;
		can_upgrade_to_better_ai: boolean;
		can_downgrade_from_better_ai: boolean;
	};
	stripe_subscription_id: string;
	stripe_subscription_status: string;
	stripe_subscription_interval: string;
	has_running_subscription: boolean;
	has_payments: boolean;
	stripe_subscription_canceled_at?: number;
	stripe_subscription_current_period_end?: number;
	has_active_subscription: boolean;
	can_cancel_subscription: boolean;
	can_view_billing: boolean;
	can_modify_subscription_interval: boolean;
	any_organization_has_active_subscription: boolean;
	any_organization_has_running_subscription: boolean;
	any_organization_has_better_ai: boolean;
	can_upgrade_to_better_ai: Array<{
		type: string;
		handle: string;
		name: string;
		strip_subscription_id: string;
	}>;
	better_ai_subscription_ids: string[];
	email: string;
	has_pro_features: boolean;
	has_better_ai: boolean;
	receive_extension_issues_weekly_summary: boolean;
	has_developer_extensions: boolean;
	stripe_customer_id: string;
	analytics_distinct_id: string;
	saml: boolean;
	admin: boolean;
	publishing_bot: boolean;
	broken_raycast_client: boolean;
	last_used_broken_version_at?: number;
	can_apply_for_free_trail: boolean;
	can_join_ios_waitlist: boolean;
	organizations: Array<{
		id: string;
		name: string;
		handle: string;
		initials: string;
		avatar_placeholder_color: string;
		saml: boolean;
		avatar: string;
		can_upgrade_to_pro: boolean;
		can_manage_billing: boolean;
		subscription?: any;
		stripe_subscription_id: string;
		stripe_subscription_status: string;
		stripe_subscription_interval: string;
		has_running_subscription: boolean;
		has_payments: boolean;
		stripe_subscription_canceled_at?: number;
		stripe_subscription_current_period_end?: number;
		has_active_subscription: boolean;
		role: string;
	}>;
	swag_info?: any;
};

export type AiModel = {
	id: string;
	name: string;
	description: string;
	status: string;
	features: string[];
	suggestions: string[];
	capabilities: {
		web_search: string;
		image_generation: string;
	};
	abilities: {
		web_search: {
			toggleable: boolean;
		};
		image_generation: {
			model: string;
		};
		vision: {
			formats: string[];
		};
		system_message: {
			supported: boolean;
		};
		temperature: {
			supported: boolean;
		};
		tools: {
			supported: boolean;
			limit: number;
		};
	};
	in_better_ai_subscription: boolean;
	model: string;
	provider: string;
	provider_name: string;
	provider_brand: string;
	availability: string;
	speed: number;
	intelligence: number;
	requires_better_ai: boolean;
	context: number;
};

export type AiModels = {
	models: AiModel[];
	default_models: {
		chat: string;
		quick_ai: string;
		commands: string;
		api: string;
		emoji_search: string;
		tools: string;
	};
};
