export type CoreElementInput = {
    name: string;
    description: string;
    var_type: string;
    default_value: string;
    is_required: string;
};

export type CoreElement = {
    name: string;
    description: string;
    inputs: CoreElementInput[];
};

export type MarkDownDataConfig = {
    config: {
        core_actions: CoreElement[];
        core_data_containers: CoreElement[];
        core_events: CoreElement[];
    };
};
