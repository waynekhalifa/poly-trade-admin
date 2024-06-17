import type { Schema, Attribute } from '@strapi/strapi';

export interface AttributesAnimation extends Schema.Component {
  collectionName: 'components_attributes_animations';
  info: {
    displayName: 'Animation';
  };
  attributes: {
    component: Attribute.Enumeration<
      [
        'Bounce',
        'Fade',
        'Flip',
        'Hinge',
        'JackInTheBox',
        'Roll',
        'Rotate',
        'Slide',
        'Zoom'
      ]
    > &
      Attribute.DefaultTo<'Fade'>;
    direction: Attribute.Enumeration<['down', 'left', 'right', 'up']>;
    damping: Attribute.Decimal & Attribute.DefaultTo<0.5>;
    delay: Attribute.Integer & Attribute.DefaultTo<0>;
    duration: Attribute.Integer & Attribute.DefaultTo<1000>;
    fraction: Attribute.Decimal & Attribute.DefaultTo<0>;
    triggerOnce: Attribute.Boolean & Attribute.DefaultTo<true>;
    cascade: Attribute.Boolean & Attribute.DefaultTo<false>;
  };
}

export interface AttributesBackground extends Schema.Component {
  collectionName: 'components_attributes_backgrounds';
  info: {
    displayName: 'Background';
  };
  attributes: {
    image: Attribute.Media;
    video: Attribute.Media;
    gradient: Attribute.Component<'attributes.gradient'>;
    color: Attribute.String;
  };
}

export interface AttributesColumnSpan extends Schema.Component {
  collectionName: 'components_attributes_column_spans';
  info: {
    displayName: 'Column span';
    description: '';
  };
  attributes: {
    xs: Attribute.Decimal & Attribute.DefaultTo<12>;
    sm: Attribute.Decimal & Attribute.DefaultTo<12>;
    md: Attribute.Decimal & Attribute.DefaultTo<12>;
    lg: Attribute.Decimal & Attribute.DefaultTo<12>;
  };
}

export interface AttributesColumn extends Schema.Component {
  collectionName: 'components_attributes_columns';
  info: {
    displayName: 'Column';
    description: '';
  };
  attributes: {
    height: Attribute.Component<'attributes.height'>;
    innerHeight: Attribute.Component<'attributes.height'>;
    bottomMargin: Attribute.Component<'attributes.integer'>;
    span: Attribute.Component<'attributes.column-span'>;
    padding: Attribute.Component<'attributes.padding'>;
    background: Attribute.Component<'attributes.background'>;
    alignment: Attribute.Component<'attributes.content-alignment'>;
  };
}

export interface AttributesContainer extends Schema.Component {
  collectionName: 'components_attributes_containers';
  info: {
    displayName: 'Container';
  };
  attributes: {
    component: Attribute.Enumeration<['section', 'div']> &
      Attribute.DefaultTo<'section'>;
    maxWidth: Attribute.Enumeration<['xs', 'sm', 'md', 'lg', 'xl', 'false']> &
      Attribute.DefaultTo<'lg'>;
    disableGutters: Attribute.Boolean & Attribute.DefaultTo<false>;
    background: Attribute.Component<'attributes.background'>;
    grid: Attribute.Component<'attributes.grid'>;
  };
}

export interface AttributesContentAlignment extends Schema.Component {
  collectionName: 'components_attributes_content_alignments';
  info: {
    displayName: 'Content alignment';
    description: '';
  };
  attributes: {
    xs: Attribute.Enumeration<
      ['flex-start', 'center', 'flex-end', 'space-between']
    > &
      Attribute.DefaultTo<'flex-start'>;
    sm: Attribute.Enumeration<
      ['flex-start', 'center', 'flex-end', 'space-between']
    > &
      Attribute.DefaultTo<'flex-start'>;
    md: Attribute.Enumeration<
      ['flex-start', 'center', 'flex-end', 'space-between']
    > &
      Attribute.DefaultTo<'flex-start'>;
    lg: Attribute.Enumeration<
      ['flex-start', 'center', 'flex-end', 'space-between']
    > &
      Attribute.DefaultTo<'flex-start'>;
  };
}

export interface AttributesGradient extends Schema.Component {
  collectionName: 'components_attributes_gradients';
  info: {
    displayName: 'Gradient';
  };
  attributes: {
    startColor: Attribute.String;
    endColor: Attribute.String;
    degree: Attribute.String;
  };
}

export interface AttributesGrid extends Schema.Component {
  collectionName: 'components_attributes_grids';
  info: {
    displayName: 'Grid';
    description: '';
  };
  attributes: {
    rows: Attribute.Component<'attributes.row', true>;
  };
}

export interface AttributesHeight extends Schema.Component {
  collectionName: 'components_attributes_heights';
  info: {
    displayName: 'height';
  };
  attributes: {
    xs: Attribute.Integer & Attribute.DefaultTo<1>;
    sm: Attribute.Integer & Attribute.DefaultTo<1>;
    md: Attribute.Integer & Attribute.DefaultTo<1>;
    lg: Attribute.Integer & Attribute.DefaultTo<1>;
  };
}

export interface AttributesInteger extends Schema.Component {
  collectionName: 'components_attributes_integers';
  info: {
    displayName: 'Integer';
  };
  attributes: {
    xs: Attribute.Integer & Attribute.DefaultTo<0>;
    sm: Attribute.Integer & Attribute.DefaultTo<0>;
    md: Attribute.Integer & Attribute.DefaultTo<0>;
    lg: Attribute.Integer & Attribute.DefaultTo<0>;
  };
}

export interface AttributesLink extends Schema.Component {
  collectionName: 'components_attributes_links';
  info: {
    displayName: 'Link';
    description: '';
  };
  attributes: {
    href: Attribute.String;
    ariaLabel: Attribute.String;
    newTab: Attribute.Boolean & Attribute.DefaultTo<false>;
  };
}

export interface AttributesMargin extends Schema.Component {
  collectionName: 'components_shared_margins';
  info: {
    displayName: 'Margin';
    description: '';
  };
  attributes: {
    top: Attribute.Component<'attributes.integer'>;
    bottom: Attribute.Component<'attributes.integer'>;
    left: Attribute.Component<'attributes.integer'>;
    right: Attribute.Component<'attributes.integer'>;
  };
}

export interface AttributesOption extends Schema.Component {
  collectionName: 'components_attributes_options';
  info: {
    displayName: 'Option';
  };
  attributes: {
    label: Attribute.String & Attribute.Required;
    value: Attribute.String & Attribute.Required;
  };
}

export interface AttributesPadding extends Schema.Component {
  collectionName: 'components_shared_paddings';
  info: {
    displayName: 'Padding';
    description: '';
  };
  attributes: {
    top: Attribute.Component<'attributes.integer'>;
    bottom: Attribute.Component<'attributes.integer'>;
    left: Attribute.Component<'attributes.integer'>;
    right: Attribute.Component<'attributes.integer'>;
  };
}

export interface AttributesPosition extends Schema.Component {
  collectionName: 'components_attributes_positions';
  info: {
    displayName: 'Position';
  };
  attributes: {
    rowNum: Attribute.Integer & Attribute.DefaultTo<1>;
    columnNum: Attribute.Integer & Attribute.DefaultTo<1>;
  };
}

export interface AttributesRow extends Schema.Component {
  collectionName: 'components_attributes_rows';
  info: {
    displayName: 'Row';
  };
  attributes: {
    spacing: Attribute.Integer & Attribute.DefaultTo<0>;
    boxShadow: Attribute.String;
    height: Attribute.Component<'attributes.height'>;
    padding: Attribute.Component<'attributes.padding'>;
    columns: Attribute.Component<'attributes.column', true>;
  };
}

export interface AttributesTextAlignment extends Schema.Component {
  collectionName: 'components_attributes_text_alignments';
  info: {
    displayName: 'Text alignment';
    description: '';
  };
  attributes: {
    xs: Attribute.Enumeration<['start', 'center', 'end']> &
      Attribute.DefaultTo<'start'>;
    sm: Attribute.Enumeration<['start', 'center', 'end']> &
      Attribute.DefaultTo<'start'>;
    md: Attribute.Enumeration<['start', 'center', 'end']> &
      Attribute.DefaultTo<'start'>;
    lg: Attribute.Enumeration<['start', 'center', 'end']> &
      Attribute.DefaultTo<'start'>;
  };
}

export interface AttributesTextVariant extends Schema.Component {
  collectionName: 'components_attributes_text_variants';
  info: {
    displayName: 'Text variant';
  };
  attributes: {
    xs: Attribute.Enumeration<
      [
        'body1',
        'body2',
        'button',
        'caption',
        'h1',
        'h2',
        'h3',
        'h4',
        'h5',
        'h6',
        'inherit',
        'overline',
        'subtitle1',
        'subtitle2'
      ]
    > &
      Attribute.DefaultTo<'body1'>;
    sm: Attribute.Enumeration<
      [
        'body1',
        'body2',
        'button',
        'caption',
        'h1',
        'h2',
        'h3',
        'h4',
        'h5',
        'h6',
        'inherit',
        'overline',
        'subtitle1',
        'subtitle2'
      ]
    > &
      Attribute.DefaultTo<'body1'>;
    md: Attribute.Enumeration<
      [
        'body1',
        'body2',
        'button',
        'caption',
        'h1',
        'h2',
        'h3',
        'h4',
        'h5',
        'h6',
        'inherit',
        'overline',
        'subtitle1',
        'subtitle2'
      ]
    > &
      Attribute.DefaultTo<'body1'>;
    lg: Attribute.Enumeration<
      [
        'body1',
        'body2',
        'button',
        'caption',
        'h1',
        'h2',
        'h3',
        'h4',
        'h5',
        'h6',
        'inherit',
        'overline',
        'subtitle1',
        'subtitle2'
      ]
    > &
      Attribute.DefaultTo<'body1'>;
  };
}

export interface AttributesTrueFalse extends Schema.Component {
  collectionName: 'components_attributes_true_falses';
  info: {
    displayName: 'True false';
  };
  attributes: {
    xs: Attribute.Boolean & Attribute.DefaultTo<false>;
    sm: Attribute.Boolean & Attribute.DefaultTo<false>;
    md: Attribute.Boolean & Attribute.DefaultTo<false>;
    lg: Attribute.Boolean & Attribute.DefaultTo<false>;
  };
}

export interface SeoSeo extends Schema.Component {
  collectionName: 'components_shared_seos';
  info: {
    displayName: 'Seo';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    description: Attribute.Text &
      Attribute.Required &
      Attribute.DefaultTo<'PolyTrade | High-Quality raw materials | Crops'>;
    icon: Attribute.Media & Attribute.Required;
  };
}

export interface SharedAccordion extends Schema.Component {
  collectionName: 'components_shared_accordions';
  info: {
    displayName: 'Accordion';
  };
  attributes: {
    Summary: Attribute.String & Attribute.Required;
    Content: Attribute.String & Attribute.Required;
  };
}

export interface SharedBreadcrumb extends Schema.Component {
  collectionName: 'components_shared_breadcrumbs';
  info: {
    displayName: 'Breadcrumb';
  };
  attributes: {
    title: Attribute.String;
    links: Attribute.Component<'shared.link', true>;
    padding: Attribute.Component<'attributes.padding'>;
    margin: Attribute.Component<'attributes.margin'>;
    position: Attribute.Component<'attributes.position'>;
  };
}

export interface SharedButtonList extends Schema.Component {
  collectionName: 'components_shared_button_lists';
  info: {
    displayName: 'Button list';
  };
  attributes: {
    list: Attribute.Component<'shared.button', true>;
    alignment: Attribute.Component<'attributes.content-alignment'>;
    padding: Attribute.Component<'attributes.padding'>;
    margin: Attribute.Component<'attributes.margin'>;
    position: Attribute.Component<'attributes.position'>;
    animation: Attribute.Component<'attributes.animation'>;
  };
}

export interface SharedButton extends Schema.Component {
  collectionName: 'components_shared_buttons';
  info: {
    displayName: 'Button';
    description: '';
  };
  attributes: {
    variant: Attribute.Enumeration<['contained', 'outlined', 'text']> &
      Attribute.DefaultTo<'text'>;
    size: Attribute.Enumeration<['small', 'medium', 'large']> &
      Attribute.DefaultTo<'medium'>;
    fullWidth: Attribute.Boolean & Attribute.DefaultTo<false>;
    color: Attribute.Enumeration<
      ['inherit', 'primary', 'secondary', 'success', 'error', 'info', 'warning']
    > &
      Attribute.DefaultTo<'primary'>;
    disabled: Attribute.Boolean & Attribute.DefaultTo<false>;
    startIcon: Attribute.String;
    endIcon: Attribute.String;
    type: Attribute.Enumeration<['button', 'link']> &
      Attribute.DefaultTo<'button'>;
    href: Attribute.String;
    newTab: Attribute.Boolean & Attribute.DefaultTo<false>;
    text: Attribute.String;
    name: Attribute.String;
    padding: Attribute.Component<'attributes.padding'>;
    margin: Attribute.Component<'attributes.margin'>;
    position: Attribute.Component<'attributes.position'>;
  };
}

export interface SharedContacInformation extends Schema.Component {
  collectionName: 'components_shared_contac_informations';
  info: {
    displayName: 'Contac information';
  };
  attributes: {
    links: Attribute.Component<'shared.contact-me-info', true>;
    padding: Attribute.Component<'attributes.padding'>;
    margin: Attribute.Component<'attributes.margin'>;
    position: Attribute.Component<'attributes.position'>;
  };
}

export interface SharedContactForm extends Schema.Component {
  collectionName: 'components_shared_contact_forms';
  info: {
    displayName: 'Contact form';
  };
  attributes: {
    address: Attribute.String;
    contact: Attribute.String;
  };
}

export interface SharedContactMeInfo extends Schema.Component {
  collectionName: 'components_shared_contact_me_infos';
  info: {
    displayName: 'Contact me info';
  };
  attributes: {
    title: Attribute.String;
    text: Attribute.String;
    type: Attribute.Enumeration<['email', 'contact', 'address']>;
    padding: Attribute.Component<'attributes.padding'>;
    margin: Attribute.Component<'attributes.margin'>;
    position: Attribute.Component<'attributes.position'>;
  };
}

export interface SharedContact extends Schema.Component {
  collectionName: 'components_shared_contacts';
  info: {
    displayName: 'Contact';
  };
  attributes: {
    contact: Attribute.String;
    url: Attribute.Component<'attributes.link'>;
    padding: Attribute.Component<'attributes.padding'>;
    margin: Attribute.Component<'attributes.margin'>;
    position: Attribute.Component<'attributes.position'>;
  };
}

export interface SharedCourseModuleList extends Schema.Component {
  collectionName: 'components_shared_course_module_lists';
  info: {
    displayName: 'Course module list';
  };
  attributes: {
    list: Attribute.Component<'shared.course-module', true>;
    padding: Attribute.Component<'attributes.padding'>;
    margin: Attribute.Component<'attributes.margin'>;
    position: Attribute.Component<'attributes.position'>;
  };
}

export interface SharedCourseModule extends Schema.Component {
  collectionName: 'components_shared_course_modules';
  info: {
    displayName: 'Course module';
  };
  attributes: {
    text: Attribute.String;
    description: Attribute.Text;
  };
}

export interface SharedCrateriaItem extends Schema.Component {
  collectionName: 'components_shared_crateria_items';
  info: {
    displayName: 'Crateria item';
  };
  attributes: {
    name: Attribute.String;
    description: Attribute.String;
  };
}

export interface SharedCraterias extends Schema.Component {
  collectionName: 'components_shared_craterias';
  info: {
    displayName: 'Craterias';
  };
  attributes: {
    links: Attribute.Component<'shared.crateria-item', true>;
    padding: Attribute.Component<'attributes.padding'>;
    margin: Attribute.Component<'attributes.margin'>;
    position: Attribute.Component<'attributes.position'>;
  };
}

export interface SharedDivider extends Schema.Component {
  collectionName: 'components_shared_dividers';
  info: {
    displayName: 'Divider';
  };
  attributes: {
    width: Attribute.Integer;
    height: Attribute.Integer;
    orientation: Attribute.Enumeration<['horizontal', 'vertical']>;
    bStyle: Attribute.Enumeration<['solid', 'dashed']>;
    bColor: Attribute.String;
    padding: Attribute.Component<'attributes.padding'>;
    margin: Attribute.Component<'attributes.margin'>;
    position: Attribute.Component<'attributes.position'>;
  };
}

export interface SharedEditor extends Schema.Component {
  collectionName: 'components_shared_editors';
  info: {
    displayName: 'Editor';
  };
  attributes: {
    editor: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'blockBalloon';
        }
      >;
    padding: Attribute.Component<'attributes.padding'>;
    margin: Attribute.Component<'attributes.margin'>;
    position: Attribute.Component<'attributes.position'>;
  };
}

export interface SharedEmail extends Schema.Component {
  collectionName: 'components_shared_emails';
  info: {
    displayName: 'Email';
  };
  attributes: {
    email: Attribute.Email;
    url: Attribute.Component<'attributes.link'>;
    padding: Attribute.Component<'attributes.padding'>;
    margin: Attribute.Component<'attributes.margin'>;
    position: Attribute.Component<'attributes.position'>;
  };
}

export interface SharedEmbeddedMap extends Schema.Component {
  collectionName: 'components_shared_embedded_maps';
  info: {
    displayName: 'Embedded map';
  };
  attributes: {
    url: Attribute.String;
    height: Attribute.Integer;
    padding: Attribute.Component<'attributes.padding'>;
    margin: Attribute.Component<'attributes.margin'>;
    position: Attribute.Component<'attributes.position'>;
  };
}

export interface SharedExploreProperties extends Schema.Component {
  collectionName: 'components_shared_explore_properties';
  info: {
    displayName: 'Explore properties';
    description: '';
  };
  attributes: {
    position: Attribute.Component<'attributes.position'>;
  };
}

export interface SharedFaQs extends Schema.Component {
  collectionName: 'components_shared_fa_qs';
  info: {
    displayName: 'FAQs';
  };
  attributes: {
    questions: Attribute.Component<'shared.accordion', true>;
    padding: Attribute.Component<'attributes.padding'>;
    margin: Attribute.Component<'attributes.margin'>;
    position: Attribute.Component<'attributes.position'>;
  };
}

export interface SharedForm extends Schema.Component {
  collectionName: 'components_shared_forms';
  info: {
    displayName: 'Form';
    description: '';
  };
  attributes: {
    name: Attribute.String;
    position: Attribute.Component<'attributes.position'>;
  };
}

export interface SharedGallery extends Schema.Component {
  collectionName: 'components_shared_galleries';
  info: {
    displayName: 'Gallery';
  };
  attributes: {
    files: Attribute.Media;
    padding: Attribute.Component<'attributes.padding'>;
    margin: Attribute.Component<'attributes.margin'>;
    position: Attribute.Component<'attributes.position'>;
  };
}

export interface SharedHeroTitle extends Schema.Component {
  collectionName: 'components_shared_hero_titles';
  info: {
    displayName: 'heroTitle';
  };
  attributes: {
    text: Attribute.String & Attribute.Required;
    padding: Attribute.Component<'attributes.padding'>;
    margin: Attribute.Component<'attributes.margin'>;
    position: Attribute.Component<'attributes.position'>;
  };
}

export interface SharedHowItWorks extends Schema.Component {
  collectionName: 'components_shared_how_it_works';
  info: {
    displayName: 'How-it-works';
  };
  attributes: {
    position: Attribute.Component<'attributes.position'>;
  };
}

export interface SharedLink extends Schema.Component {
  collectionName: 'components_shared_links';
  info: {
    displayName: 'Link';
  };
  attributes: {
    url: Attribute.String;
    text: Attribute.String;
    newTab: Attribute.Boolean & Attribute.DefaultTo<false>;
    padding: Attribute.Component<'attributes.padding'>;
    margin: Attribute.Component<'attributes.margin'>;
    position: Attribute.Component<'attributes.position'>;
  };
}

export interface SharedListing extends Schema.Component {
  collectionName: 'components_shared_listings';
  info: {
    displayName: 'Listing';
    description: '';
  };
  attributes: {
    sectionName: Attribute.String;
    collection: Attribute.String;
    type: Attribute.Enumeration<['grid', 'slider']>;
    filterBy: Attribute.String;
    numOfItems: Attribute.Integer;
    padding: Attribute.Component<'attributes.padding'>;
    margin: Attribute.Component<'attributes.margin'>;
    position: Attribute.Component<'attributes.position'>;
  };
}

export interface SharedLogo extends Schema.Component {
  collectionName: 'components_shared_logos';
  info: {
    displayName: 'Logo';
    description: '';
  };
  attributes: {
    text: Attribute.String;
    placement: Attribute.String;
    file: Attribute.Media;
    url: Attribute.Component<'attributes.link'>;
    padding: Attribute.Component<'attributes.padding'>;
    margin: Attribute.Component<'attributes.margin'>;
    position: Attribute.Component<'attributes.position'>;
  };
}

export interface SharedLottieTechnology extends Schema.Component {
  collectionName: 'components_shared_lottie_technologies';
  info: {
    displayName: 'Lottie technology';
  };
  attributes: {
    width: Attribute.Component<'attributes.height'>;
    alignment: Attribute.Component<'attributes.content-alignment'>;
    padding: Attribute.Component<'attributes.padding'>;
    margin: Attribute.Component<'attributes.margin'>;
    position: Attribute.Component<'attributes.position'>;
  };
}

export interface SharedMedia extends Schema.Component {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    description: '';
  };
  attributes: {
    file: Attribute.Media;
    objectFit: Attribute.Enumeration<['cover', 'contained']>;
    height: Attribute.Integer;
    padding: Attribute.Component<'attributes.padding'>;
    margin: Attribute.Component<'attributes.margin'>;
    position: Attribute.Component<'attributes.position'>;
  };
}

export interface SharedMessageForm extends Schema.Component {
  collectionName: 'components_shared_message_forms';
  info: {
    displayName: 'Message form';
  };
  attributes: {
    address: Attribute.String;
    contact: Attribute.String;
    email: Attribute.Email;
    padding: Attribute.Component<'attributes.padding'>;
    margin: Attribute.Component<'attributes.margin'>;
    position: Attribute.Component<'attributes.position'>;
  };
}

export interface SharedMyAccount extends Schema.Component {
  collectionName: 'components_shared_my_accounts';
  info: {
    displayName: 'My Account';
  };
  attributes: {
    padding: Attribute.Component<'attributes.padding'>;
    margin: Attribute.Component<'attributes.margin'>;
    position: Attribute.Component<'attributes.position'>;
  };
}

export interface SharedNavbar extends Schema.Component {
  collectionName: 'components_shared_navbars';
  info: {
    displayName: 'Navbar';
  };
  attributes: {
    links: Attribute.Component<'shared.link', true>;
    position: Attribute.Component<'attributes.position'>;
  };
}

export interface SharedNumbers extends Schema.Component {
  collectionName: 'components_shared_numbers';
  info: {
    displayName: 'Numbers';
  };
  attributes: {
    projects: Attribute.String;
    clients: Attribute.String;
    countries: Attribute.String;
    padding: Attribute.Component<'attributes.padding'>;
    margin: Attribute.Component<'attributes.margin'>;
    position: Attribute.Component<'attributes.position'>;
  };
}

export interface SharedPortfolioItem extends Schema.Component {
  collectionName: 'components_shared_portfolio_items';
  info: {
    displayName: 'Portfolio item';
    description: '';
  };
  attributes: {
    category: Attribute.String;
    name: Attribute.String;
    link: Attribute.String;
    padding: Attribute.Component<'attributes.padding'>;
    margin: Attribute.Component<'attributes.margin'>;
    position: Attribute.Component<'attributes.position'>;
  };
}

export interface SharedQuote extends Schema.Component {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    description: '';
  };
  attributes: {
    body: Attribute.Text;
    author: Attribute.String;
    padding: Attribute.Component<'attributes.padding'>;
    margin: Attribute.Component<'attributes.margin'>;
    position: Attribute.Component<'attributes.position'>;
  };
}

export interface SharedRichText extends Schema.Component {
  collectionName: 'components_shared_rich_texts';
  info: {
    displayName: 'Rich text';
    description: '';
  };
  attributes: {
    content: Attribute.Blocks;
    name: Attribute.String;
    height: Attribute.Integer & Attribute.DefaultTo<1>;
    padding: Attribute.Component<'attributes.padding'>;
    margin: Attribute.Component<'attributes.margin'>;
    position: Attribute.Component<'attributes.position'>;
    alignment: Attribute.Component<'attributes.text-alignment'>;
    color: Attribute.String & Attribute.DefaultTo<'text.primary'>;
    width: Attribute.Integer & Attribute.DefaultTo<1>;
  };
}

export interface SharedSearchForm extends Schema.Component {
  collectionName: 'components_shared_search_forms';
  info: {
    displayName: 'Search form';
  };
  attributes: {
    buttonText: Attribute.String;
    placeholder: Attribute.String;
  };
}

export interface SharedService extends Schema.Component {
  collectionName: 'components_shared_services';
  info: {
    displayName: 'Service';
    description: '';
  };
  attributes: {
    label: Attribute.String;
    icon: Attribute.Media;
    position: Attribute.Component<'attributes.position'>;
  };
}

export interface SharedSitemap extends Schema.Component {
  collectionName: 'components_shared_sitemaps';
  info: {
    displayName: 'Sitemap';
  };
  attributes: {
    placement: Attribute.String & Attribute.DefaultTo<'footer.widget'>;
    links: Attribute.Component<'shared.link', true>;
    padding: Attribute.Component<'attributes.padding'>;
    margin: Attribute.Component<'attributes.margin'>;
    position: Attribute.Component<'attributes.position'>;
  };
}

export interface SharedSlider extends Schema.Component {
  collectionName: 'components_shared_sliders';
  info: {
    displayName: 'Slider';
    description: '';
  };
  attributes: {
    slidesPerView: Attribute.Integer & Attribute.DefaultTo<1>;
    direction: Attribute.Enumeration<['horizontal', 'vertical']>;
    navigation: Attribute.Boolean & Attribute.DefaultTo<false>;
    mousewheel: Attribute.Boolean & Attribute.DefaultTo<false>;
    pagination: Attribute.Boolean & Attribute.DefaultTo<false>;
    autoplay: Attribute.Boolean & Attribute.DefaultTo<false>;
    loop: Attribute.Boolean & Attribute.DefaultTo<false>;
    paginationAlignment: Attribute.Component<'attributes.content-alignment'>;
    type: Attribute.Enumeration<['slider', 'carousel']>;
    imageHeight: Attribute.Integer;
    borderColor: Attribute.String & Attribute.DefaultTo<'transparent'>;
    files: Attribute.Media;
    padding: Attribute.Component<'attributes.padding'>;
    margin: Attribute.Component<'attributes.margin'>;
    position: Attribute.Component<'attributes.position'>;
    prevPosition: Attribute.String & Attribute.DefaultTo<'0%'>;
    nextPosition: Attribute.String & Attribute.DefaultTo<'0%'>;
    spaceBetween: Attribute.Integer & Attribute.DefaultTo<1>;
    slidesPerGroup: Attribute.Integer & Attribute.DefaultTo<1>;
  };
}

export interface SharedSocialIcons extends Schema.Component {
  collectionName: 'components_shared_social_icons';
  info: {
    displayName: 'Social icons';
    description: '';
  };
  attributes: {
    links: Attribute.Component<'shared.social-link', true>;
    padding: Attribute.Component<'attributes.padding'>;
    margin: Attribute.Component<'attributes.margin'>;
    position: Attribute.Component<'attributes.position'>;
    text: Attribute.String;
  };
}

export interface SharedSocialLink extends Schema.Component {
  collectionName: 'components_shared_social_links';
  info: {
    displayName: 'Social link';
    description: '';
  };
  attributes: {
    url: Attribute.String;
    text: Attribute.String;
    newTab: Attribute.Boolean;
    icon: Attribute.String;
    name: Attribute.String;
  };
}

export interface SharedSubscribeForm extends Schema.Component {
  collectionName: 'components_shared_subscribe_forms';
  info: {
    displayName: 'Subscribe form';
  };
  attributes: {
    text: Attribute.Blocks;
    padding: Attribute.Component<'attributes.padding'>;
    margin: Attribute.Component<'attributes.margin'>;
    position: Attribute.Component<'attributes.position'>;
  };
}

export interface SharedTermsAndConditions extends Schema.Component {
  collectionName: 'components_shared_terms_and_conditions';
  info: {
    displayName: 'Terms-and-conditions';
  };
  attributes: {
    position: Attribute.Component<'attributes.position'>;
  };
}

export interface SharedTestimonials extends Schema.Component {
  collectionName: 'components_shared_testimonials';
  info: {
    displayName: 'Testimonials';
  };
  attributes: {
    list: Attribute.Component<'shared.text-image', true>;
    padding: Attribute.Component<'attributes.padding'>;
    margin: Attribute.Component<'attributes.margin'>;
    position: Attribute.Component<'attributes.position'>;
  };
}

export interface SharedTextImageList extends Schema.Component {
  collectionName: 'components_shared_text_image_lists';
  info: {
    displayName: 'Text image list';
  };
  attributes: {
    list: Attribute.Component<'shared.text-image', true>;
  };
}

export interface SharedTextImage extends Schema.Component {
  collectionName: 'components_shared_text_images';
  info: {
    displayName: 'Text image';
  };
  attributes: {
    text: Attribute.Component<'shared.rich-text'>;
    image: Attribute.Component<'shared.media'>;
  };
}

export interface SharedText extends Schema.Component {
  collectionName: 'components_shared_texts';
  info: {
    displayName: 'Text';
    description: '';
  };
  attributes: {
    component: Attribute.String & Attribute.Required & Attribute.DefaultTo<'p'>;
    fontWeight: Attribute.Enumeration<
      ['light', 'regular', 'semi-bold', 'bold']
    > &
      Attribute.DefaultTo<'regular'>;
    variant: Attribute.Enumeration<
      [
        'body1',
        'body2',
        'button',
        'caption',
        'h1',
        'h2',
        'h3',
        'h4',
        'h5',
        'h6',
        'inherit',
        'overline',
        'subtitle1',
        'subtitle2'
      ]
    > &
      Attribute.DefaultTo<'body1'>;
    noWrap: Attribute.Boolean & Attribute.DefaultTo<false>;
    text: Attribute.String;
    color: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'text.primary'>;
    textAlign: Attribute.Component<'attributes.text-alignment'>;
    margin: Attribute.Component<'attributes.margin'>;
    position: Attribute.Component<'attributes.position'>;
    animation: Attribute.Component<'attributes.animation'>;
  };
}

export interface SharedWidgetTitle extends Schema.Component {
  collectionName: 'components_shared_widget_titles';
  info: {
    displayName: 'WidgetTitle';
  };
  attributes: {
    text: Attribute.String & Attribute.Required;
    padding: Attribute.Component<'attributes.padding'>;
    margin: Attribute.Component<'attributes.margin'>;
    position: Attribute.Component<'attributes.position'>;
  };
}

export interface ThemeBackground extends Schema.Component {
  collectionName: 'components_theme_backgrounds';
  info: {
    displayName: 'Background';
  };
  attributes: {
    paper: Attribute.String & Attribute.Required;
    default: Attribute.String & Attribute.Required;
  };
}

export interface ThemeCommon extends Schema.Component {
  collectionName: 'components_theme_commons';
  info: {
    displayName: 'Common';
  };
  attributes: {
    white: Attribute.String & Attribute.Required;
    black: Attribute.String & Attribute.Required;
  };
}

export interface ThemePalette extends Schema.Component {
  collectionName: 'components_theme_palettes';
  info: {
    displayName: 'Palette';
    description: '';
  };
  attributes: {
    mode: Attribute.String & Attribute.Required;
    primary: Attribute.Component<'theme.primary'> & Attribute.Required;
    secondary: Attribute.Component<'theme.secondary'> & Attribute.Required;
    common: Attribute.Component<'theme.common'> & Attribute.Required;
    background: Attribute.Component<'theme.background'> & Attribute.Required;
  };
}

export interface ThemePrimary extends Schema.Component {
  collectionName: 'components_theme_primaries';
  info: {
    displayName: 'Primary';
    description: '';
  };
  attributes: {
    light: Attribute.String & Attribute.Required;
    main: Attribute.String & Attribute.Required;
    dark: Attribute.String & Attribute.Required;
  };
}

export interface ThemeSecondary extends Schema.Component {
  collectionName: 'components_theme_secondaries';
  info: {
    displayName: 'Secondary';
  };
  attributes: {
    light: Attribute.String & Attribute.Required;
    main: Attribute.String & Attribute.Required;
    dark: Attribute.String & Attribute.Required;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'attributes.animation': AttributesAnimation;
      'attributes.background': AttributesBackground;
      'attributes.column-span': AttributesColumnSpan;
      'attributes.column': AttributesColumn;
      'attributes.container': AttributesContainer;
      'attributes.content-alignment': AttributesContentAlignment;
      'attributes.gradient': AttributesGradient;
      'attributes.grid': AttributesGrid;
      'attributes.height': AttributesHeight;
      'attributes.integer': AttributesInteger;
      'attributes.link': AttributesLink;
      'attributes.margin': AttributesMargin;
      'attributes.option': AttributesOption;
      'attributes.padding': AttributesPadding;
      'attributes.position': AttributesPosition;
      'attributes.row': AttributesRow;
      'attributes.text-alignment': AttributesTextAlignment;
      'attributes.text-variant': AttributesTextVariant;
      'attributes.true-false': AttributesTrueFalse;
      'seo.seo': SeoSeo;
      'shared.accordion': SharedAccordion;
      'shared.breadcrumb': SharedBreadcrumb;
      'shared.button-list': SharedButtonList;
      'shared.button': SharedButton;
      'shared.contac-information': SharedContacInformation;
      'shared.contact-form': SharedContactForm;
      'shared.contact-me-info': SharedContactMeInfo;
      'shared.contact': SharedContact;
      'shared.course-module-list': SharedCourseModuleList;
      'shared.course-module': SharedCourseModule;
      'shared.crateria-item': SharedCrateriaItem;
      'shared.craterias': SharedCraterias;
      'shared.divider': SharedDivider;
      'shared.editor': SharedEditor;
      'shared.email': SharedEmail;
      'shared.embedded-map': SharedEmbeddedMap;
      'shared.explore-properties': SharedExploreProperties;
      'shared.fa-qs': SharedFaQs;
      'shared.form': SharedForm;
      'shared.gallery': SharedGallery;
      'shared.hero-title': SharedHeroTitle;
      'shared.how-it-works': SharedHowItWorks;
      'shared.link': SharedLink;
      'shared.listing': SharedListing;
      'shared.logo': SharedLogo;
      'shared.lottie-technology': SharedLottieTechnology;
      'shared.media': SharedMedia;
      'shared.message-form': SharedMessageForm;
      'shared.my-account': SharedMyAccount;
      'shared.navbar': SharedNavbar;
      'shared.numbers': SharedNumbers;
      'shared.portfolio-item': SharedPortfolioItem;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.search-form': SharedSearchForm;
      'shared.service': SharedService;
      'shared.sitemap': SharedSitemap;
      'shared.slider': SharedSlider;
      'shared.social-icons': SharedSocialIcons;
      'shared.social-link': SharedSocialLink;
      'shared.subscribe-form': SharedSubscribeForm;
      'shared.terms-and-conditions': SharedTermsAndConditions;
      'shared.testimonials': SharedTestimonials;
      'shared.text-image-list': SharedTextImageList;
      'shared.text-image': SharedTextImage;
      'shared.text': SharedText;
      'shared.widget-title': SharedWidgetTitle;
      'theme.background': ThemeBackground;
      'theme.common': ThemeCommon;
      'theme.palette': ThemePalette;
      'theme.primary': ThemePrimary;
      'theme.secondary': ThemeSecondary;
    }
  }
}
