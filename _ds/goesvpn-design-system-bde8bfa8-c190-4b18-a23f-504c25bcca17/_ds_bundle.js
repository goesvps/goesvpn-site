/* @ds-bundle: {"format":4,"namespace":"GoesVPNDesignSystem_bde8bf","components":[{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"Tooltip","sourcePath":"components/feedback/Tooltip.jsx"},{"name":"Button","sourcePath":"components/forms/Button.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"IconButton","sourcePath":"components/forms/IconButton.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"}],"sourceHashes":{"components/core/Badge.jsx":"ed8434927d01","components/core/Card.jsx":"847a4e01c6dc","components/core/Tag.jsx":"e7c69c48f746","components/feedback/Toast.jsx":"32ccc102102e","components/feedback/Tooltip.jsx":"c039c5b5eb0f","components/forms/Button.jsx":"a13cd8f314b6","components/forms/Checkbox.jsx":"39a0910aec5a","components/forms/IconButton.jsx":"b70ffacc287c","components/forms/Input.jsx":"8eb636a60811","components/forms/Select.jsx":"8a8baf45b91e","components/forms/Switch.jsx":"96affe70d3ae","components/navigation/Tabs.jsx":"82bb5127d8f4","ui_kits/loja/Catalog.jsx":"fa70685f915c","ui_kits/loja/Footer.jsx":"b79d5cb3c920","ui_kits/loja/Header.jsx":"02c3a293cef5","ui_kits/loja/Hero.jsx":"225368dcdc57","ui_kits/loja/Icon.jsx":"8c79bbd394f9"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.GoesVPNDesignSystem_bde8bf = window.GoesVPNDesignSystem_bde8bf || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Badge.jsx
try { (() => {
function Badge({
  children,
  tone = 'accent'
}) {
  const tones = {
    accent: {
      background: 'var(--cyan-neon-16)',
      color: 'var(--accent)',
      border: '1px solid var(--cyan-neon-35)'
    },
    neutral: {
      background: 'var(--surface-elevated)',
      color: 'var(--text-secondary)',
      border: '1px solid var(--border-default)'
    },
    success: {
      background: 'rgba(53,242,166,.15)',
      color: 'var(--success)',
      border: '1px solid rgba(53,242,166,.35)'
    }
  };
  return React.createElement('span', {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 4,
      padding: '4px 10px',
      borderRadius: 'var(--radius-pill)',
      fontSize: 12,
      fontWeight: 'var(--fw-bold)',
      fontFamily: 'var(--font-body)',
      textTransform: 'uppercase',
      letterSpacing: '.04em',
      ...tones[tone]
    }
  }, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function Card({
  children,
  elevated = false,
  style
}) {
  return React.createElement('div', {
    style: {
      background: elevated ? 'var(--surface-elevated)' : 'var(--surface-card)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-lg)',
      boxShadow: elevated ? 'var(--shadow-elevated)' : 'var(--shadow-card)',
      padding: 'var(--space-5)',
      transition: 'background var(--duration-standard) var(--ease-standard)',
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function Tag({
  children,
  active = false,
  onClick
}) {
  return React.createElement('button', {
    onClick,
    style: {
      background: active ? 'var(--accent)' : 'var(--surface-card)',
      color: active ? 'var(--text-on-accent)' : 'var(--text-secondary)',
      border: `1px solid ${active ? 'var(--accent)' : 'var(--border-default)'}`,
      borderRadius: 'var(--radius-pill)',
      padding: '8px 16px',
      fontSize: 13,
      fontWeight: 'var(--fw-medium)',
      fontFamily: 'var(--font-body)',
      cursor: 'pointer',
      transition: 'all var(--duration-fast) var(--ease-standard)'
    }
  }, children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
function Toast({
  tone = 'accent',
  children,
  onClose
}) {
  const tones = {
    accent: 'var(--accent)',
    success: 'var(--success)',
    danger: 'var(--danger)'
  };
  return React.createElement('div', {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      background: 'var(--surface-elevated)',
      border: '1px solid var(--border-default)',
      borderLeft: `3px solid ${tones[tone]}`,
      borderRadius: 'var(--radius-md)',
      padding: '14px 16px',
      boxShadow: 'var(--shadow-elevated)',
      color: 'var(--text-primary)',
      fontFamily: 'var(--font-body)',
      fontSize: 14,
      maxWidth: 360
    }
  }, React.createElement('span', {
    style: {
      flex: 1
    }
  }, children), onClose && React.createElement('button', {
    onClick: onClose,
    style: {
      background: 'none',
      border: 'none',
      color: 'var(--text-muted)',
      cursor: 'pointer',
      fontSize: 16
    }
  }, '×'));
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tooltip.jsx
try { (() => {
function Tooltip({
  label,
  children
}) {
  const [show, setShow] = React.useState(false);
  return React.createElement('span', {
    style: {
      position: 'relative',
      display: 'inline-block'
    },
    onMouseEnter: () => setShow(true),
    onMouseLeave: () => setShow(false)
  }, children, show && React.createElement('span', {
    style: {
      position: 'absolute',
      bottom: 'calc(100% + 8px)',
      left: '50%',
      transform: 'translateX(-50%)',
      background: 'var(--surface-elevated)',
      border: '1px solid var(--border-default)',
      color: 'var(--text-primary)',
      fontSize: 12,
      padding: '6px 10px',
      borderRadius: 'var(--radius-sm)',
      whiteSpace: 'nowrap',
      boxShadow: 'var(--shadow-card)',
      fontFamily: 'var(--font-body)',
      zIndex: 10
    }
  }, label));
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/forms/Button.jsx
try { (() => {
function Button({
  variant = 'primary',
  size = 'md',
  disabled = false,
  icon = null,
  children,
  onClick
}) {
  const base = {
    fontFamily: 'var(--font-body)',
    fontWeight: 'var(--fw-bold)',
    textTransform: 'uppercase',
    letterSpacing: '.04em',
    border: 'none',
    cursor: disabled ? 'not-allowed' : 'pointer',
    display: 'inline-flex',
    alignItems: 'center',
    gap: 8,
    borderRadius: 'var(--radius-pill)',
    transition: 'all var(--duration-standard) var(--ease-standard)',
    opacity: disabled ? .45 : 1
  };
  const sizes = {
    sm: {
      padding: '8px 16px',
      fontSize: 12
    },
    md: {
      padding: '12px 24px',
      fontSize: 14
    },
    lg: {
      padding: '16px 32px',
      fontSize: 16
    }
  };
  const variants = {
    primary: {
      background: 'var(--accent)',
      color: 'var(--text-on-accent)',
      boxShadow: 'var(--glow-accent-soft)'
    },
    secondary: {
      background: 'var(--surface-card)',
      color: 'var(--text-primary)',
      border: '1px solid var(--border-default)'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--accent)',
      border: '1px solid var(--accent)'
    },
    danger: {
      background: 'var(--danger)',
      color: 'var(--ice-white)'
    }
  };
  return React.createElement('button', {
    disabled,
    onClick,
    style: {
      ...base,
      ...sizes[size],
      ...variants[variant]
    }
  }, icon, children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Button.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function Checkbox({
  label,
  checked = false,
  onChange,
  disabled = false
}) {
  return React.createElement('label', {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      cursor: disabled ? 'not-allowed' : 'pointer',
      fontFamily: 'var(--font-body)',
      color: 'var(--text-primary)',
      fontSize: 14,
      opacity: disabled ? .5 : 1
    }
  }, React.createElement('input', {
    type: 'checkbox',
    checked,
    onChange,
    disabled,
    style: {
      display: 'none'
    }
  }), React.createElement('span', {
    style: {
      width: 20,
      height: 20,
      borderRadius: 'var(--radius-sm)',
      border: `1px solid ${checked ? 'var(--accent)' : 'var(--border-default)'}`,
      background: checked ? 'var(--accent)' : 'transparent',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'all var(--duration-fast) var(--ease-standard)'
    }
  }, checked && React.createElement('span', {
    style: {
      width: 10,
      height: 10,
      background: 'var(--black-deep)',
      borderRadius: 2
    }
  })), label);
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/IconButton.jsx
try { (() => {
function IconButton({
  icon,
  size = 40,
  variant = 'ghost',
  disabled = false,
  onClick,
  'aria-label': ariaLabel
}) {
  const variants = {
    ghost: {
      background: 'transparent',
      color: 'var(--text-secondary)',
      border: '1px solid var(--border-default)'
    },
    solid: {
      background: 'var(--surface-card)',
      color: 'var(--accent)',
      border: '1px solid var(--border-subtle)'
    },
    accent: {
      background: 'var(--cyan-neon-16)',
      color: 'var(--accent)',
      border: '1px solid var(--cyan-neon-35)'
    }
  };
  return React.createElement('button', {
    onClick,
    disabled,
    'aria-label': ariaLabel,
    style: {
      width: size,
      height: size,
      borderRadius: '50%',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? .45 : 1,
      transition: 'all var(--duration-fast) var(--ease-standard)',
      ...variants[variant]
    }
  }, icon);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function Input({
  label,
  placeholder,
  type = 'text',
  error,
  disabled = false,
  value,
  onChange
}) {
  return React.createElement('div', {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      fontFamily: 'var(--font-body)'
    }
  }, label && React.createElement('label', {
    style: {
      fontSize: 13,
      color: 'var(--text-secondary)',
      fontWeight: 'var(--fw-medium)'
    }
  }, label), React.createElement('input', {
    type,
    placeholder,
    disabled,
    value,
    onChange,
    style: {
      background: 'var(--surface-card)',
      border: `1px solid ${error ? 'var(--danger)' : 'var(--border-default)'}`,
      borderRadius: 'var(--radius-md)',
      padding: '12px 16px',
      color: 'var(--text-primary)',
      fontSize: 15,
      outline: 'none',
      opacity: disabled ? .5 : 1
    }
  }), error && React.createElement('span', {
    style: {
      fontSize: 12,
      color: 'var(--danger)'
    }
  }, error));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function Select({
  label,
  options = [],
  value,
  onChange,
  disabled = false
}) {
  return React.createElement('div', {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      fontFamily: 'var(--font-body)'
    }
  }, label && React.createElement('label', {
    style: {
      fontSize: 13,
      color: 'var(--text-secondary)',
      fontWeight: 'var(--fw-medium)'
    }
  }, label), React.createElement('select', {
    value,
    onChange,
    disabled,
    style: {
      background: 'var(--surface-card)',
      border: '1px solid var(--border-default)',
      borderRadius: 'var(--radius-md)',
      padding: '12px 16px',
      color: 'var(--text-primary)',
      fontSize: 15,
      outline: 'none'
    }
  }, options.map((o, i) => React.createElement('option', {
    key: i,
    value: o.value ?? o
  }, o.label ?? o))));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function Switch({
  checked = false,
  onChange,
  disabled = false,
  label
}) {
  return React.createElement('label', {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? .5 : 1,
      fontFamily: 'var(--font-body)',
      color: 'var(--text-primary)',
      fontSize: 14
    }
  }, React.createElement('input', {
    type: 'checkbox',
    checked,
    onChange,
    disabled,
    style: {
      display: 'none'
    }
  }), React.createElement('span', {
    style: {
      width: 40,
      height: 22,
      borderRadius: 'var(--radius-pill)',
      background: checked ? 'var(--accent)' : 'var(--surface-elevated)',
      border: '1px solid var(--border-default)',
      position: 'relative',
      transition: 'all var(--duration-standard) var(--ease-standard)'
    }
  }, React.createElement('span', {
    style: {
      position: 'absolute',
      top: 2,
      left: checked ? 20 : 2,
      width: 16,
      height: 16,
      borderRadius: '50%',
      background: checked ? 'var(--black-deep)' : 'var(--ice-white)',
      transition: 'all var(--duration-standard) var(--ease-standard)'
    }
  })), label);
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function Tabs({
  tabs = [],
  active,
  onChange
}) {
  return React.createElement('div', {
    style: {
      display: 'flex',
      gap: 24,
      borderBottom: '1px solid var(--border-subtle)',
      fontFamily: 'var(--font-body)'
    }
  }, tabs.map((t, i) => React.createElement('button', {
    key: i,
    onClick: () => onChange && onChange(t.value ?? t),
    style: {
      background: 'none',
      border: 'none',
      padding: '12px 0',
      fontSize: 14,
      fontWeight: 'var(--fw-bold)',
      color: (t.value ?? t) === active ? 'var(--text-primary)' : 'var(--text-muted)',
      borderBottom: (t.value ?? t) === active ? '2px solid var(--accent)' : '2px solid transparent',
      cursor: 'pointer'
    }
  }, t.label ?? t)));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// ui_kits/loja/Catalog.jsx
try { (() => {
const CATS = [['🎓', 'Cursos', '2.4K+', 'COURSE'], ['📚', 'E-books', '1.8K+', 'EBOOK'], ['🎨', 'Templates', '980+', 'TEMPLATE'], ['📊', 'Planilhas', '540+', 'SPREADSHEET'], ['💻', 'Softwares', '320+', 'SOFTWARE'], ['♾️', 'Assinaturas', '180+', 'SUBSCRIPTION']];
function CategoryGrid({
  onSelect
}) {
  return React.createElement('section', {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '88px 24px'
    }
  }, React.createElement('div', {
    style: {
      color: 'var(--accent)',
      fontFamily: 'var(--font-heading)',
      fontWeight: 'var(--fw-bold)',
      fontSize: 13,
      textTransform: 'uppercase',
      letterSpacing: 'var(--tracking-eyebrow)'
    }
  }, 'Categorias'), React.createElement('h2', {
    style: {
      fontSize: 'var(--fs-h2)',
      color: 'var(--text-primary)',
      margin: '10px 0 8px'
    }
  }, 'Explore por categoria'), React.createElement('p', {
    style: {
      color: 'var(--text-secondary)',
      maxWidth: 520,
      marginBottom: 36
    }
  }, 'Encontre exatamente o que você precisa entre milhares de produtos digitais premium.'), React.createElement('div', {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(6,1fr)',
      gap: 16
    }
  }, CATS.map(([icon, label, count, type], i) => React.createElement('button', {
    key: i,
    onClick: () => onSelect(type),
    style: {
      background: 'var(--surface-card)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-lg)',
      padding: '24px 16px',
      textAlign: 'center',
      cursor: 'pointer',
      transition: 'background .2s'
    },
    onMouseEnter: e => e.currentTarget.style.background = 'var(--surface-card-hover)',
    onMouseLeave: e => e.currentTarget.style.background = 'var(--surface-card)'
  }, React.createElement('div', {
    style: {
      fontSize: 28,
      marginBottom: 10
    }
  }, icon), React.createElement('div', {
    style: {
      color: 'var(--text-primary)',
      fontWeight: 'var(--fw-bold)',
      fontSize: 14
    }
  }, label), React.createElement('div', {
    style: {
      color: 'var(--text-muted)',
      fontSize: 12,
      marginTop: 4
    }
  }, count)))));
}
function ProductCard({
  product,
  onAdd
}) {
  return React.createElement('div', {
    style: {
      background: 'var(--surface-card)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-lg)',
      boxShadow: 'var(--shadow-card)',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column'
    }
  }, React.createElement('div', {
    style: {
      height: 150,
      background: `linear-gradient(135deg,var(--navy),var(--steel-blue))`,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 36
    }
  }, product.emoji), React.createElement('div', {
    style: {
      padding: 18,
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      flex: 1
    }
  }, product.badge && React.createElement('span', {
    style: {
      alignSelf: 'flex-start',
      background: 'var(--cyan-neon-16)',
      color: 'var(--accent)',
      border: '1px solid var(--cyan-neon-35)',
      borderRadius: 'var(--radius-pill)',
      padding: '4px 10px',
      fontSize: 11,
      fontWeight: 'var(--fw-bold)',
      textTransform: 'uppercase'
    }
  }, product.badge), React.createElement('h4', {
    style: {
      color: 'var(--text-primary)',
      fontSize: 16,
      margin: 0
    }
  }, product.name), React.createElement('div', {
    style: {
      color: 'var(--text-muted)',
      fontSize: 12
    }
  }, product.type), React.createElement('div', {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginTop: 'auto',
      paddingTop: 10
    }
  }, React.createElement('span', {
    style: {
      color: 'var(--accent)',
      fontWeight: 'var(--fw-bold)',
      fontSize: 18
    }
  }, product.price), React.createElement('button', {
    onClick: () => onAdd(product),
    style: {
      background: 'var(--accent)',
      color: 'var(--text-on-accent)',
      border: 'none',
      padding: '8px 14px',
      borderRadius: 'var(--radius-pill)',
      fontSize: 12,
      fontWeight: 'var(--fw-bold)',
      textTransform: 'uppercase',
      cursor: 'pointer'
    }
  }, 'Comprar'))));
}
Object.assign(window, {
  CategoryGrid,
  ProductCard
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/loja/Catalog.jsx", error: String((e && e.message) || e) }); }

// ui_kits/loja/Footer.jsx
try { (() => {
function Newsletter() {
  const [email, setEmail] = React.useState('');
  const [sent, setSent] = React.useState(false);
  return React.createElement('section', {
    style: {
      background: 'var(--navy)',
      padding: '72px 24px',
      textAlign: 'center'
    }
  }, React.createElement('div', {
    style: {
      color: 'var(--accent)',
      fontFamily: 'var(--font-heading)',
      fontWeight: 'var(--fw-bold)',
      fontSize: 13,
      textTransform: 'uppercase',
      letterSpacing: 'var(--tracking-eyebrow)'
    }
  }, 'Newsletter exclusiva'), React.createElement('h2', {
    style: {
      color: 'var(--text-primary)',
      fontSize: 'var(--fs-h2)',
      margin: '10px 0 8px'
    }
  }, 'Receba ofertas exclusivas'), React.createElement('p', {
    style: {
      color: 'var(--text-secondary)',
      maxWidth: 480,
      margin: '0 auto 24px'
    }
  }, 'Cadastre seu e-mail e seja o primeiro a saber sobre lançamentos, promoções e conteúdo gratuito.'), React.createElement('form', {
    onSubmit: e => {
      e.preventDefault();
      setSent(true);
    },
    style: {
      display: 'flex',
      gap: 10,
      justifyContent: 'center',
      maxWidth: 420,
      margin: '0 auto'
    }
  }, React.createElement('input', {
    type: 'email',
    required: true,
    value: email,
    onChange: e => setEmail(e.target.value),
    placeholder: 'seu@email.com',
    style: {
      flex: 1,
      background: 'var(--surface-card)',
      border: '1px solid var(--border-default)',
      borderRadius: 'var(--radius-pill)',
      padding: '12px 18px',
      color: 'var(--text-primary)',
      fontSize: 14,
      outline: 'none'
    }
  }), React.createElement('button', {
    type: 'submit',
    style: {
      background: 'var(--accent)',
      color: 'var(--text-on-accent)',
      border: 'none',
      padding: '12px 22px',
      borderRadius: 'var(--radius-pill)',
      fontWeight: 'var(--fw-bold)',
      fontSize: 13,
      textTransform: 'uppercase',
      cursor: 'pointer'
    }
  }, 'Quero receber')), React.createElement('div', {
    style: {
      color: 'var(--text-muted)',
      fontSize: 12,
      marginTop: 14
    }
  }, sent ? '✅ Inscrito! Fique atento ao seu e-mail.' : '🔒 Seus dados estão seguros. Sem spam, prometemos!'));
}
function Footer() {
  const cols = [['Produtos', ['Cursos Online', 'E-books', 'Templates', 'Planilhas', 'Softwares', 'Assinaturas']], ['Empresa', ['Blog', 'Afiliados', 'Seja um produtor', 'Sobre nós', 'Parceiros', 'Trabalhe conosco']], ['Suporte', ['Política de privacidade', 'Termos de afiliados', 'Central de ajuda', 'Reembolsos', 'Contato']]];
  return React.createElement('footer', {
    style: {
      background: 'var(--black-deep)',
      borderTop: '1px solid var(--border-subtle)',
      padding: '64px 24px 32px'
    }
  }, React.createElement('div', {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: '1.4fr 1fr 1fr 1fr',
      gap: 32
    }
  }, React.createElement('div', null, React.createElement('div', {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--fw-black)',
      color: 'var(--text-primary)',
      fontSize: 18,
      marginBottom: 12
    }
  }, 'Minha Loja'), React.createElement('p', {
    style: {
      color: 'var(--text-muted)',
      fontSize: 13,
      lineHeight: 'var(--lh-body)',
      maxWidth: 240
    }
  }, 'A plataforma completa para comprar e vender produtos digitais de alta qualidade.')), cols.map(([title, items], i) => React.createElement('div', {
    key: i
  }, React.createElement('div', {
    style: {
      color: 'var(--text-primary)',
      fontWeight: 'var(--fw-bold)',
      fontSize: 13,
      marginBottom: 14
    }
  }, title), items.map((it, j) => React.createElement('div', {
    key: j,
    style: {
      color: 'var(--text-muted)',
      fontSize: 13,
      marginBottom: 8,
      cursor: 'pointer'
    }
  }, it))))), React.createElement('div', {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '40px auto 0',
      paddingTop: 24,
      borderTop: '1px solid var(--border-subtle)',
      display: 'flex',
      justifyContent: 'space-between',
      color: 'var(--text-muted)',
      fontSize: 12
    }
  }, React.createElement('span', null, '© 2026 Minha Loja. Todos os direitos reservados.'), React.createElement('span', null, '🔒 Pagamento seguro · ✅ Garantia de 7 dias · ⚡ Entrega imediata')));
}
Object.assign(window, {
  Newsletter,
  Footer
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/loja/Footer.jsx", error: String((e && e.message) || e) }); }

// ui_kits/loja/Header.jsx
try { (() => {
function Header({
  cartCount,
  onNav,
  page
}) {
  const links = [['Catálogo', 'catalogo'], ['Cursos', 'catalogo'], ['E-books', 'catalogo'], ['Templates', 'catalogo'], ['Blog', 'blog']];
  return React.createElement('header', {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 20,
      background: 'rgba(4,7,13,.85)',
      backdropFilter: 'blur(12px)',
      borderBottom: '1px solid var(--border-subtle)'
    }
  }, React.createElement('div', {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '14px 24px'
    }
  }, React.createElement('div', {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      cursor: 'pointer'
    },
    onClick: () => onNav('home')
  }, React.createElement('img', {
    src: '../../assets/logo-white-bg.png',
    style: {
      height: 34,
      background: '#fff',
      borderRadius: 8,
      padding: 2
    }
  }), React.createElement('span', {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--fw-black)',
      color: 'var(--text-primary)',
      fontSize: 18
    }
  }, 'Minha Loja')), React.createElement('nav', {
    style: {
      display: 'flex',
      gap: 28
    }
  }, links.map(([label, to], i) => React.createElement('a', {
    key: i,
    onClick: () => onNav(to),
    style: {
      color: 'var(--text-secondary)',
      fontSize: 14,
      fontWeight: 'var(--fw-medium)',
      cursor: 'pointer',
      textDecoration: 'none'
    }
  }, label))), React.createElement('div', {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 16
    }
  }, React.createElement('div', {
    style: {
      position: 'relative',
      cursor: 'pointer',
      color: 'var(--text-primary)'
    },
    onClick: () => onNav('carrinho')
  }, React.createElement(window.Icon, {
    name: 'shopping-cart',
    size: 20
  }), cartCount > 0 && React.createElement('span', {
    style: {
      position: 'absolute',
      top: -8,
      right: -8,
      background: 'var(--accent)',
      color: 'var(--text-on-accent)',
      fontSize: 10,
      fontWeight: 'var(--fw-bold)',
      borderRadius: '50%',
      width: 16,
      height: 16,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, cartCount)), React.createElement('button', {
    onClick: () => onNav('login'),
    style: {
      background: 'var(--accent)',
      color: 'var(--text-on-accent)',
      border: 'none',
      padding: '10px 20px',
      borderRadius: 'var(--radius-pill)',
      fontWeight: 'var(--fw-bold)',
      fontSize: 13,
      textTransform: 'uppercase',
      cursor: 'pointer'
    }
  }, 'Entrar'))));
}
Object.assign(window, {
  Header
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/loja/Header.jsx", error: String((e && e.message) || e) }); }

// ui_kits/loja/Hero.jsx
try { (() => {
function Hero({
  onExplore
}) {
  return React.createElement('section', {
    style: {
      position: 'relative',
      overflow: 'hidden',
      background: 'var(--black-deep)',
      padding: '96px 24px 80px',
      textAlign: 'center'
    }
  }, React.createElement('div', {
    style: {
      position: 'absolute',
      width: 480,
      height: 480,
      borderRadius: '50%',
      background: 'var(--cyan-neon-14)',
      top: -220,
      left: '50%',
      transform: 'translateX(-50%)',
      filter: 'blur(2px)'
    }
  }), React.createElement('div', {
    style: {
      position: 'relative',
      maxWidth: 720,
      margin: '0 auto'
    }
  }, React.createElement('div', {
    style: {
      color: 'var(--accent)',
      fontFamily: 'var(--font-heading)',
      fontWeight: 'var(--fw-bold)',
      fontSize: 13,
      textTransform: 'uppercase',
      letterSpacing: 'var(--tracking-eyebrow)',
      marginBottom: 16
    }
  }, 'Produtos digitais de qualidade'), React.createElement('h1', {
    style: {
      fontSize: 'var(--fs-h1)',
      color: 'var(--text-primary)',
      lineHeight: 'var(--lh-tight)'
    }
  }, 'Produtos digitais que transformam sua vida'), React.createElement('p', {
    style: {
      color: 'var(--text-secondary)',
      fontSize: 'var(--fs-body-lg)',
      lineHeight: 'var(--lh-body)',
      margin: '20px 0 32px'
    }
  }, 'Cursos, e-books, templates e muito mais. Acesse instantaneamente e comece sua jornada digital hoje mesmo.'), React.createElement('div', {
    style: {
      display: 'flex',
      gap: 14,
      justifyContent: 'center',
      flexWrap: 'wrap'
    }
  }, React.createElement('button', {
    onClick: onExplore,
    style: {
      background: 'var(--accent)',
      color: 'var(--text-on-accent)',
      border: 'none',
      padding: '16px 32px',
      borderRadius: 'var(--radius-pill)',
      fontWeight: 'var(--fw-bold)',
      fontSize: 14,
      textTransform: 'uppercase',
      boxShadow: 'var(--glow-accent-soft)',
      cursor: 'pointer'
    }
  }, 'Explorar catálogo'), React.createElement('button', {
    style: {
      background: 'transparent',
      color: 'var(--text-primary)',
      border: '1px solid var(--border-default)',
      padding: '16px 32px',
      borderRadius: 'var(--radius-pill)',
      fontWeight: 'var(--fw-bold)',
      fontSize: 14,
      textTransform: 'uppercase',
      cursor: 'pointer'
    }
  }, 'Ver como funciona'))));
}
function TrustBar() {
  const items = [['⚡', 'Mais vendido', 'Curso Completo de Design · R$ 197'], ['🛡️', 'Garantia', '7 dias grátis'], ['💳', 'Formas de pagamento', 'Pix, cartão e boleto'], ['🚀', 'Entrega', 'Automática após pagamento'], ['🤝', 'Incluído', 'Programa de afiliados']];
  return React.createElement('section', {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '-40px auto 0',
      position: 'relative',
      zIndex: 2,
      padding: '0 24px',
      display: 'grid',
      gridTemplateColumns: 'repeat(5,1fr)',
      gap: 16
    }
  }, items.map(([icon, title, sub], i) => React.createElement('div', {
    key: i,
    style: {
      background: 'var(--surface-card)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-lg)',
      padding: '18px 16px',
      boxShadow: 'var(--shadow-card)'
    }
  }, React.createElement('div', {
    style: {
      fontSize: 20,
      marginBottom: 8
    }
  }, icon), React.createElement('div', {
    style: {
      color: 'var(--text-primary)',
      fontWeight: 'var(--fw-bold)',
      fontSize: 14
    }
  }, title), React.createElement('div', {
    style: {
      color: 'var(--text-muted)',
      fontSize: 12,
      marginTop: 4
    }
  }, sub))));
}
Object.assign(window, {
  Hero,
  TrustBar
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/loja/Hero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/loja/Icon.jsx
try { (() => {
const ICONS = {
  'shopping-cart': '🛒',
  'menu': '☰',
  'search': '🔎'
};
function Icon({
  name,
  size = 20
}) {
  return React.createElement('span', {
    style: {
      display: 'inline-flex',
      lineHeight: 0,
      fontSize: size
    }
  }, ICONS[name] || '•');
}
Object.assign(window, {
  Icon
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/loja/Icon.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Tabs = __ds_scope.Tabs;

})();
