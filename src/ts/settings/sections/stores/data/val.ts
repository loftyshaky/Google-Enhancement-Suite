import {
    d_inputs,
    d_color,
    i_inputs,
    i_color,
} from '@loftyshaky/shared/inputs';

export class Val {
    private static i0: Val;

    public static i(): Val {
    // eslint-disable-next-line no-return-assign
        return this.i0 || (this.i0 = new this());
    }

    // eslint-disable-next-line no-useless-constructor, @typescript-eslint/no-empty-function
    private constructor() {}

    public change = (
        {
            input,
            i,
        }: {
            input: i_inputs.Input;
            i: i_color.I
        },
    ): Promise<void> => err_async(async () => {
        let val: any;

        if (input.type === 'color') {
            val = d_color.Color.i().access({
                input,
                i,
            });
        } else {
            val = d_inputs.Val.i().access({ input });
        }

        if (input.type !== 'color' || i === 'main') {
            await ext.send_msg_resp({
                msg: 'update_settings',
                settings: { [input.name]: val },
            });
        } else {
            const { colors } = data.settings;

            colors[i] = val;

            await ext.send_msg_resp({
                msg: 'update_settings',
                settings: { colors },
            });
        }

        ext.iterate_all_tabs({ msg: 'rerun_actions' });
    },
    1009);

    public save_selected_palette_color = (
        {
            input,
            i,
        }: {
            input: i_inputs.Input;
            i: i_color.I
        },
    ): Promise<void> => err_async(async () => {
        await ext.send_msg_resp({
            msg: 'update_settings',
            settings: { [input.name]: i },
        });

        ext.iterate_all_tabs({ msg: 'rerun_actions' });
    },
    1011);
}