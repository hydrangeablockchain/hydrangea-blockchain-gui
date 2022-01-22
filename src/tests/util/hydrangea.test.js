const hydrangea = require('../../util/hydrangea');

describe('hydrangea', () => {
  it('converts number mojo to hydrangea', () => {
    const result = hydrangea.mojo_to_hydrangea(1000000);

    expect(result).toBe(0.000001);
  });
  it('converts string mojo to hydrangea', () => {
    const result = hydrangea.mojo_to_hydrangea('1000000');

    expect(result).toBe(0.000001);
  });
  it('converts number mojo to hydrangea string', () => {
    const result = hydrangea.mojo_to_hydrangea_string(1000000);

    expect(result).toBe('0.000001');
  });
  it('converts string mojo to hydrangea string', () => {
    const result = hydrangea.mojo_to_hydrangea_string('1000000');

    expect(result).toBe('0.000001');
  });
  it('converts number hydrangea to mojo', () => {
    const result = hydrangea.hydrangea_to_mojo(0.000001);

    expect(result).toBe(1000000);
  });
  it('converts string hydrangea to mojo', () => {
    const result = hydrangea.hydrangea_to_mojo('0.000001');

    expect(result).toBe(1000000);
  });
  it('converts number mojo to colouredcoin', () => {
    const result = hydrangea.mojo_to_colouredcoin(1000000);

    expect(result).toBe(1000);
  });
  it('converts string mojo to colouredcoin', () => {
    const result = hydrangea.mojo_to_colouredcoin('1000000');

    expect(result).toBe(1000);
  });
  it('converts number mojo to colouredcoin string', () => {
    const result = hydrangea.mojo_to_colouredcoin_string(1000000);

    expect(result).toBe('1,000');
  });
  it('converts string mojo to colouredcoin string', () => {
    const result = hydrangea.mojo_to_colouredcoin_string('1000000');

    expect(result).toBe('1,000');
  });
  it('converts number colouredcoin to mojo', () => {
    const result = hydrangea.colouredcoin_to_mojo(1000);

    expect(result).toBe(1000000);
  });
  it('converts string colouredcoin to mojo', () => {
    const result = hydrangea.colouredcoin_to_mojo('1000');

    expect(result).toBe(1000000);
  });
});
