const button = document.getElementById('calculate_btn');
button.addEventListener('click', calculate);
function getNumber(id) {
    return parseFloat(document.getElementById(id).value);}
function calculate() {
    const distance = getNumber('distance');
    const v = getNumber('speed');
    const C = getNumber('capacity');
    const S = getNumber('c_rating');
    const m_a1 = getNumber('battery_weight');
    const m_d1 = getNumber('drone_weight');
    const KV = getNumber('kv');
    const D = getNumber('prop_size');

    const out = document.getElementById('result_time');

    const values = [distance, v, C, S, m_a1, m_d1, KV, D];
    (`if (values.some(x=>isNaN(x)||x<=0)){out.textContent="Заполните все поля положительными числами"; return;}`)
    const m_d = m_d1 / 1000;
    const m_a = m_a1 / 1000;
    const q = C / 1000;
    const U = S * 3.7;
    const A = U * q * 0.8;
    const m_ob = m_d + m_a;
    const F = m_ob * 10;
    const K_ideal = (D * 1.8) * (1500 / KV);
    const K_real = K_ideal * 0.55 * 10 / 1000;
    const K_fl = 1.0 - 0.0075 * v + 0.000125 * v * v;
    const P = (F / K_real) * K_fl;
    const t_h = A / P;
    const t_min = t_h * 60;
    const S_max = v * t_h;
    const need = distance * 2;
    const ok = S_max >= need;

    out.innerHTML = "<b>${t_min.toFixed(1)} мин</b><br>+(ok ? '✅ Успешно пролетит!' : '❌ Не хватит заряда!');
}

