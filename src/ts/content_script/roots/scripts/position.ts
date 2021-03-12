import { Suffix } from 'shared/internal';
import { s_el_parser } from 'content_script/internal';

export class Position {
    private static i0: Position;

    public static i(): Position {
    // eslint-disable-next-line no-return-assign
        return this.i0 || (this.i0 = new this());
    }

    // eslint-disable-next-line no-useless-constructor, @typescript-eslint/no-empty-function
    private constructor() {}

    private offset_1_cls: string =new Suffix('offset_1').result;
    private offset_2_cls: string =new Suffix('offset_2').result;

    public position_title_el = (): void => err(() => { // needed because in some cases icons go outside container. ex: https://www.google.com/search?q=infinite+scroll&oq=infinite&aqs=chrome.4.69i57j46j0j46j0j69i61j69i60l2.7170j0j1&sourceid=chrome&ie=UTF-8
        s_el_parser.Main.i().title_els.forEach((title_el): void => err(() => {
            x.add_cls(
                title_el,
                new Suffix('root_parent').result,
            );
            if (
                data.settings.show_favicons
                    && data.settings.show_server_locations
            ) {
                x.add_cls(
                    title_el,
                    this.offset_2_cls,
                );
            } else {
                x.remove_cls(
                    title_el,
                    this.offset_2_cls,
                );
            }

            if (
                (
                    data.settings.show_favicons
                        && !data.settings.show_server_locations
                ) || (
                    !data.settings.show_favicons
                        && data.settings.show_server_locations
                )
            ) {
                x.add_cls(
                    title_el,
                    this.offset_1_cls,
                );
            } else {
                x.remove_cls(
                    title_el,
                    this.offset_1_cls,
                );
            }
        },
        1057));
    },
    1056);

    public position_root = (
        {
            title_el,
            root,
        }: {
            title_el: HTMLElement;
            root: HTMLElement;
        },
    ): void => err(() => {
        root.style.top = `${(x.get_numeric_css_val(
            title_el,
            'height',
        ) / 2) - x.get_numeric_css_val(
            title_el,
            'padding-top',
        )}px`;
    },
    1102);
}
