import _ from 'lodash';
import { d_shared } from 'shared/internal';
import {
    s_el_parser,
    s_roots,
    s_keywords,
} from 'content_script/internal';

import { InitAll } from 'shared/init_all';

export class Main {
    private static i0: Main;

    public static i(): Main {
    // eslint-disable-next-line no-return-assign
        return this.i0 || (this.i0 = new this());
    }

    // eslint-disable-next-line no-useless-constructor, @typescript-eslint/no-empty-function
    private constructor() {}

    public already_run_initial_and_on_load_action = false;

    private run_actions = (): Promise<void> => err_async(async () => {
        await d_shared.Data.i().set_from_storage();
        s_el_parser.Main.i().get_els();
        s_keywords.Main.i().color_keywords();
        s_roots.Main.i().apply_root_parent_cls();
    },
    1045);

    public run_initial_actions = (): Promise<void> => err_async(async () => {
        InitAll.i().init();

        await this.run_actions();
        s_roots.Main.i().init({
            name: 'icons',
            limit: 10,
        });
    },
    1046);

    public run_on_load_actions = (): Promise<void> => err_async(async () => {
        await x.delay(1000);

        s_roots.Main.i().init({
            name: 'icons',
            start: 11,
        });

        this.already_run_initial_and_on_load_action = true;
    },
    1047);

    private run_reload_actions = (): Promise<void> => err_async(async () => {
        if (this.already_run_initial_and_on_load_action) {
            await this.run_actions();
            s_roots.Main.i().init({ name: 'icons' });
        }
    },
    1048);

    public run_reload_actions_debounce = _.debounce((): void => err(() => {
        this.run_reload_actions();
    },
    1049),
    500);
}