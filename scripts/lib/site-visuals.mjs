/**
 * Deterministic skill artwork for the published site.
 *
 * Each promoted skill gets a real SVG asset rather than a generic stock image.
 * The visual language stays consistent, while the motif follows the job the
 * skill performs. Generated assets are checked by `npm run check`, so adding a
 * skill cannot silently leave the site with a missing thumbnail.
 */

export const FEATURED_SKILL = "de-slop";

const PALETTES = {
  build: { accent: "#4CC2FF", secondary: "#0078D4" },
  connect: { accent: "#A78BFA", secondary: "#7C3AED" },
  review: { accent: "#FFB900", secondary: "#F7630C" },
  operate: { accent: "#81C784", secondary: "#107C10" },
  deliver: { accent: "#FF8A65", secondary: "#D83B01" },
  learn: { accent: "#50E6FF", secondary: "#008272" },
};

const MOTIF_BY_SKILL = {
  "copilot-studio-knowledge-grounding": "network",
  "copilot-studio-production-patterns": "blocks",
  "migrate-agent-to-skills": "flow",
  "write-a-skill": "document",
  "copilot-studio-auth-patterns": "lock",
  "ground-agents-in-work-context": "network",
  "assess-change-blast-radius": "ripple",
  "evaluate-agent-quality": "measure",
  "review-copilot-studio-agent": "scan",
  "govern-agent-lifecycle": "shield",
  "monitor-agent-telemetry": "pulse",
  "plan-agent-capacity-and-cost": "gauge",
  "power-platform-alm-connection-refs": "plug",
  "respond-to-agent-incidents": "alert",
  "ask-ragnar": "route",
  "choose-agent-platform": "route",
  "de-slop": "rewrite",
  discovery: "dialog",
  "structured-interview": "dialog",
  "what-should-i-build": "decision",
  "explain-concept": "explain",
};

const FALLBACK_MOTIF = {
  build: "blocks",
  connect: "network",
  review: "scan",
  operate: "pulse",
  deliver: "route",
  learn: "explain",
};

const MOTIFS = {
  network: `
    <path class="line" d="M58 214 146 88 280 142 236 278 92 292Z"/>
    <path class="alt" d="M146 88 236 278M58 214l222-72"/>
    <circle class="node" cx="58" cy="214" r="22"/><circle class="node alt-fill" cx="146" cy="88" r="24"/>
    <circle class="node" cx="280" cy="142" r="20"/><circle class="node alt-fill" cx="236" cy="278" r="25"/>
    <circle class="node" cx="92" cy="292" r="17"/>`,
  blocks: `
    <rect class="soft" x="44" y="52" width="116" height="116" rx="18"/>
    <rect class="line" x="188" y="52" width="116" height="116" rx="18"/>
    <rect class="line" x="44" y="196" width="116" height="116" rx="18"/>
    <rect class="soft alt-fill" x="188" y="196" width="116" height="116" rx="18"/>
    <path class="alt" d="M102 168v28M246 168v28M160 110h28M160 254h28"/>`,
  flow: `
    <rect class="line" x="34" y="84" width="116" height="176" rx="16"/>
    <path class="line" d="M58 126h68M58 164h50M58 202h62"/>
    <path class="alt" d="M164 172h82m-24-28 28 28-28 28"/>
    <rect class="soft alt-fill" x="250" y="84" width="72" height="176" rx="16"/>
    <path class="line" d="M270 128h32M270 166h32M270 204h32"/>`,
  document: `
    <path class="soft" d="M70 42h168l58 58v218H70Z"/>
    <path class="line" d="M238 42v60h58M104 144h112M104 190h134M104 236h88"/>
    <path class="alt" d="m216 268 82-82 28 28-82 82-44 16Z"/>`,
  lock: `
    <rect class="soft" x="62" y="148" width="236" height="166" rx="24"/>
    <path class="line" d="M112 148V108c0-58 34-84 68-84s68 26 68 84v40"/>
    <circle class="node alt-fill" cx="180" cy="222" r="25"/>
    <path class="alt" d="M180 246v34"/>`,
  ripple: `
    <circle class="soft" cx="180" cy="180" r="148"/>
    <circle class="alt" cx="180" cy="180" r="108"/>
    <circle class="line" cx="180" cy="180" r="64"/>
    <circle class="node alt-fill" cx="180" cy="180" r="22"/>
    <path class="line" d="M180 18v38M180 304v38M18 180h38M304 180h38"/>`,
  measure: `
    <path class="line" d="M54 308V62M54 308h270"/>
    <rect class="soft" x="86" y="214" width="48" height="94" rx="8"/>
    <rect class="soft alt-fill" x="158" y="162" width="48" height="146" rx="8"/>
    <rect class="soft" x="230" y="96" width="48" height="212" rx="8"/>
    <path class="alt" d="m238 64 24 24 50-52"/>`,
  scan: `
    <rect class="soft" x="46" y="42" width="202" height="260" rx="18"/>
    <path class="line" d="M82 98h126M82 146h90M82 194h112"/>
    <circle class="alt" cx="236" cy="230" r="66"/>
    <path class="alt" d="m282 278 52 52"/>`,
  shield: `
    <path class="soft" d="M180 28 306 78v92c0 84-45 134-126 174C99 304 54 254 54 170V78Z"/>
    <path class="line" d="M180 28 306 78v92c0 84-45 134-126 174C99 304 54 254 54 170V78Z"/>
    <path class="alt" d="m118 178 42 42 88-96"/>`,
  pulse: `
    <rect class="soft" x="30" y="62" width="300" height="236" rx="24"/>
    <path class="line" d="M54 192h58l30-76 54 144 40-104 26 36h44"/>
    <circle class="node alt-fill" cx="142" cy="116" r="13"/>
    <circle class="node" cx="236" cy="156" r="13"/>`,
  gauge: `
    <path class="soft" d="M52 236a128 128 0 0 1 256 0"/>
    <path class="line" d="M52 236a128 128 0 0 1 256 0"/>
    <path class="alt" d="m180 220 70-84"/>
    <circle class="node alt-fill" cx="180" cy="220" r="18"/>
    <circle class="line" cx="274" cy="280" r="42"/>
    <path class="line" d="M274 258v44M260 268h24M260 290h24"/>`,
  plug: `
    <path class="soft" d="M44 112h104v136H44zM212 112h104v136H212z"/>
    <path class="line" d="M148 154h34c38 0 38 52 0 52h-34M212 154h-30M212 206h-30"/>
    <path class="alt" d="M78 84v28M114 84v28M246 248v28M282 248v28"/>`,
  alert: `
    <path class="soft" d="M180 30 330 312H30Z"/>
    <path class="line" d="M180 30 330 312H30Z"/>
    <path class="alt" d="M180 120v94"/>
    <circle class="node alt-fill" cx="180" cy="258" r="15"/>`,
  route: `
    <circle class="node alt-fill" cx="70" cy="180" r="28"/>
    <path class="line" d="M98 180h68M166 180v-92M166 180v92M166 88h108M166 180h108M166 272h108"/>
    <rect class="soft" x="274" y="54" width="56" height="68" rx="12"/>
    <rect class="soft alt-fill" x="274" y="146" width="56" height="68" rx="12"/>
    <rect class="soft" x="274" y="238" width="56" height="68" rx="12"/>`,
  rewrite: `
    <rect class="soft" x="30" y="62" width="122" height="236" rx="18"/>
    <path class="line" d="M56 112h72M56 154h62M56 196h74M56 238h48"/>
    <path class="alt" d="m54 250 76-150"/>
    <path class="alt" d="M166 180h42m-18-22 22 22-22 22"/>
    <rect class="soft alt-fill" x="212" y="62" width="122" height="236" rx="18"/>
    <path class="line" d="M238 112h72M238 154h48M238 196h66M238 238h58"/>`,
  dialog: `
    <path class="soft" d="M28 54h220v150H98l-52 42 12-42H28Z"/>
    <path class="line" d="M72 104h132M72 148h94"/>
    <path class="soft alt-fill" d="M138 202h194v112H286l12 34-44-34H138Z"/>
    <path class="alt" d="M176 246h112M176 278h72"/>`,
  decision: `
    <path class="soft" d="m180 30 86 74-86 74-86-74Z"/>
    <path class="line" d="M180 178v52M180 230H74v58M180 230h106v58"/>
    <rect class="line" x="30" y="288" width="88" height="48" rx="12"/>
    <rect class="soft alt-fill" x="242" y="288" width="88" height="48" rx="12"/>
    <path class="alt" d="m150 102 24 24 42-48"/>`,
  explain: `
    <path class="soft" d="m180 40 140 70-140 70-140-70Z"/>
    <path class="line" d="m40 170 140 70 140-70M40 230l140 70 140-70"/>
    <circle class="node alt-fill" cx="180" cy="110" r="24"/>
    <path class="alt" d="M180 86V56M204 94l22-22M156 94l-22-22"/>`,
};

const xmlEsc = (value) =>
  String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

const hash = (value) => {
  let out = 2166136261;
  for (const char of String(value)) {
    out ^= char.charCodeAt(0);
    out = Math.imul(out, 16777619);
  }
  return out >>> 0;
};

function wrapTitle(value, max = 22) {
  const words = String(value).split(/\s+/).filter(Boolean);
  const lines = [];
  for (const word of words) {
    const current = lines.at(-1);
    if (!current || (current.length + word.length + 1 > max && lines.length < 3)) {
      lines.push(word);
    } else {
      lines[lines.length - 1] = `${current} ${word}`;
    }
  }
  return lines.slice(0, 3);
}

export function skillVisualFile(skill) {
  return `docs/assets/skills/${skill.name}.svg`;
}

export function skillVisualUrl(skill, { rooted = false } = {}) {
  return `${rooted ? "/" : ""}assets/skills/${skill.name}.svg`;
}

export function buildSkillVisual(skill) {
  const title = skill.displayName || skill.name;
  const palette = PALETTES[skill.bucket] || PALETTES.build;
  const motifName = MOTIF_BY_SKILL[skill.name] || FALLBACK_MOTIF[skill.bucket] || "blocks";
  const motif = MOTIFS[motifName];
  const lines = wrapTitle(title);
  const firstY = lines.length === 1 ? 286 : lines.length === 2 ? 248 : 210;
  const titleMarkup = lines
    .map((line, index) => `<tspan x="72" y="${firstY + index * 62}">${xmlEsc(line)}</tspan>`)
    .join("");
  const serial = String(hash(skill.name) % 1000).padStart(3, "0");

  return `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630" role="img" aria-labelledby="title desc">
  <title id="title">${xmlEsc(title)}</title>
  <desc id="desc">Visual for the ${xmlEsc(title)} skill, written by Ragnar Pitla.</desc>
  <style>
    .eyebrow,.slug,.author,.serial{font-family:"Segoe UI",Arial,sans-serif;font-weight:700;letter-spacing:2px}
    .title{font-family:"Segoe UI",Arial,sans-serif;font-size:52px;font-weight:750;letter-spacing:-1.5px}
    .line,.alt{fill:none;stroke-linecap:round;stroke-linejoin:round}
    .line{stroke:${palette.accent};stroke-width:12}.alt{stroke:${palette.secondary};stroke-width:12}
    .soft{fill:${palette.accent};fill-opacity:.14;stroke:${palette.accent};stroke-width:5}
    .node{fill:#0B1220;stroke:${palette.accent};stroke-width:10}.alt-fill{fill:${palette.secondary}}
  </style>
  <rect width="1200" height="630" fill="#0B1220"/>
  <path d="M0 84H1200M0 546H1200M640 0V630" stroke="#FFFFFF" stroke-opacity=".08"/>
  <path d="M675 44h447v512H675z" fill="#111B2D" stroke="#FFFFFF" stroke-opacity=".09"/>
  <rect width="14" height="630" fill="${palette.accent}"/>
  <text class="eyebrow" x="72" y="102" fill="${palette.accent}" font-size="18">${xmlEsc(skill.bucket.toUpperCase())} / MICROSOFT AGENT SKILL</text>
  <text class="title" fill="#F8FAFC">${titleMarkup}</text>
  <text class="slug" x="72" y="440" fill="#94A3B8" font-size="18">${xmlEsc(skill.name)}</text>
  <text class="author" x="72" y="574" fill="#F8FAFC" font-size="17">WRITTEN BY RAGNAR PITLA</text>
  <text class="serial" x="1116" y="574" text-anchor="end" fill="#64748B" font-size="15">SKILL ${serial}</text>
  <g transform="translate(720 112)">${motif}</g>
</svg>
`;
}
