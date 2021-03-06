import { s_suffix } from 'shared/internal';
import { s_el_parser, s_roots } from 'content_script/internal';

export class Position {
    private static i0: Position;

    public static i(): Position {
        // eslint-disable-next-line no-return-assign
        return this.i0 || (this.i0 = new this());
    }

    // eslint-disable-next-line no-useless-constructor, @typescript-eslint/no-empty-function
    private constructor() {}

    public offset_1_cls: string = new s_suffix.Main('offset_1').result;
    public offset_2_cls: string = new s_suffix.Main('offset_2').result;

    public position_title_el = (): void =>
        err(() => {
            s_el_parser.Main.i().title_els.forEach((title_el): void =>
                err(() => {
                    s_roots.Main.i().apply_root_parent_cls_to_title_el({ title_el });

                    this.remove_offset_classes({ title_el });

                    if (data.settings.show_favicons && data.settings.show_server_locations) {
                        x.add_cls(title_el, this.offset_2_cls);
                    } else if (
                        (data.settings.show_favicons && !data.settings.show_server_locations) ||
                        (!data.settings.show_favicons && data.settings.show_server_locations)
                    ) {
                        x.add_cls(title_el, this.offset_1_cls);
                    }
                }, 'ges_1084'),
            );
        }, 'ges_1085');

    private remove_offset_classes = ({ title_el }: { title_el: HTMLElement }): void =>
        err(() => {
            // needed when changing facvicons/server locatiions display settings.
            x.remove_cls(title_el, s_roots.Position.i().offset_1_cls);
            x.remove_cls(title_el, s_roots.Position.i().offset_2_cls);
        }, 'ges_1086');
}
